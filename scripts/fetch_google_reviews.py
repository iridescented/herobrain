#!/usr/bin/env python3
"""
fetch_google_reviews.py

Purpose:
  Fetch the latest Google Place reviews (max 5 returned by Google Places Details API),
  merge them with existing testimonials stored in src/data/testimonials.json,
  deduplicate, assign colors, and write the updated file back.

Why only 5 reviews?
  The public Google Places Details API (fields=reviews) returns up to 5 most helpful
  reviews. There is no official public pagination for more via this endpoint.

Prerequisites:
  1. Create a Google Cloud Project (https://console.cloud.google.com/)
  2. Enable “Places API” (APIs & Services > Library > Places API)
  3. Create an API Key (APIs & Services > Credentials > Create credentials > API key)
  4. RESTRICT YOUR KEY:
     - For a backend/script usage, restrict by IP (if you run from fixed CI) OR leave unrestricted
       temporarily and rotate frequently.
     - Do NOT embed this unrestricted key in client-side code.
  5. Obtain your Place ID:
     - Use Google Place ID Finder: https://developers.google.com/maps/documentation/javascript/place-id
       (Search your business name/location, copy its Place ID.)
  6. Set environment variables before running the script:
       export GOOGLE_API_KEY="YOUR_KEY"
       export GOOGLE_PLACE_ID="YOUR_PLACE_ID"
     Or pass via CLI arguments.

Usage:
  Basic:
    python scripts/fetch_google_reviews.py

  With explicit args:
    python scripts/fetch_google_reviews.py --api-key YOUR_KEY --place-id PLACE_ID

  Dry-run (no file write):
    python scripts/fetch_google_reviews.py --dry-run

Integration (CI / build step):
  - Run this script in a pre-build phase (GitHub Actions, etc.) to refresh testimonials.
  - Commit the changed JSON or let it be part of the build artifact without committing.

Data Mapping:
  Google review -> internal structure fields:
    id:          google-{time}
    quote:       review.text
    author:      author_name
    role:        "Parent" (placeholder; adjust if needed)
    company:     "Google Review" (or relative_time_description)
    rating:      rating (int)
    color:       deterministic from palette
    createdAt:   ISO8601 from unix time
    status:      "APPROVED"

Security Note:
  Never expose the API key inside shipped frontend code. Keep it server / CI side.
"""
from __future__ import annotations
import os
import json
import argparse
from pathlib import Path
from datetime import datetime, timezone
import sys
import textwrap
from typing import List, Dict, Any

try:
    import requests  # type: ignore
except ImportError:
    print("ERROR: 'requests' library not installed. Install with: pip install requests")
    sys.exit(1)

# ---------------- Configuration ---------------- #
COLOR_PALETTE = ["#97CEC8", "#FBD66E", "#EEA27B", "#647C9F", "#E77C96"]
DEFAULT_ROLE = "Parent"
DEFAULT_COMPANY = "Google Review"
STATUS_APPROVED = "APPROVED"

# Paths (adjust if your structure changes)
ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / 'src' / 'data' / 'testimonials.json'

GOOGLE_DETAILS_ENDPOINT = "https://maps.googleapis.com/maps/api/place/details/json"

# ---------------- Helper Functions ---------------- #

def load_existing() -> List[Dict[str, Any]]:
    if not DATA_FILE.exists():
        return []
    with DATA_FILE.open('r', encoding='utf-8') as f:
        return json.load(f)


def save_data(data: List[Dict[str, Any]]):
    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    with DATA_FILE.open('w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def fetch_google_reviews(api_key: str, place_id: str, language: str = 'en') -> List[Dict[str, Any]]:
    params = {
        'place_id': place_id,
        'fields': 'reviews',  # Only need reviews
        'key': api_key,
        'language': language,
        'reviews_no_translations': 'true'
    }
    resp = requests.get(GOOGLE_DETAILS_ENDPOINT, params=params, timeout=15)
    if resp.status_code != 200:
        raise RuntimeError(f"HTTP {resp.status_code}: {resp.text[:200]}")
    data = resp.json()
    status = data.get('status')
    if status != 'OK':
        raise RuntimeError(f"Google API status not OK: {status} | {data.get('error_message')}")
    reviews = data.get('result', {}).get('reviews', [])
    return reviews


def normalize_review(r: Dict[str, Any]) -> Dict[str, Any]:
    unix_time = r.get('time')  # seconds
    created_at = None
    if isinstance(unix_time, int):
        created_at = datetime.fromtimestamp(unix_time, tz=timezone.utc).isoformat()
    # Deterministic color selection
    color = COLOR_PALETTE[abs((r.get('rating', 5) or 5) + (unix_time or 0)) % len(COLOR_PALETTE)]
    quote = r.get('text') or r.get('review') or ''
    return {
        'id': f"google-{unix_time}" if unix_time else f"google-{abs(hash(quote))}",
        'quote': quote.strip(),
        'author': r.get('author_name') or 'Anonymous',
        'role': DEFAULT_ROLE,
        'company': r.get('relative_time_description') or DEFAULT_COMPANY,
        'rating': int(r.get('rating', 5) or 5),
        'color': color,
        'createdAt': created_at,
        'status': STATUS_APPROVED
    }


def merge_reviews(existing: List[Dict[str, Any]], new_items: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    index = {e['id']: e for e in existing if 'id' in e}
    added = 0
    for item in new_items:
        if item['id'] not in index:
            index[item['id']] = item
            added += 1
    merged = list(index.values())
    # Sort: newest first (createdAt), then rating desc
    def sort_key(x: Dict[str, Any]):
        ts = 0
        if x.get('createdAt'):
            try:
                ts = datetime.fromisoformat(x['createdAt'].replace('Z', '+00:00')).timestamp()
            except Exception:
                ts = 0
        return (-ts, -x.get('rating', 0))
    merged.sort(key=sort_key)
    return merged, added


def main():
    parser = argparse.ArgumentParser(
        description="Fetch Google Place reviews and merge into local testimonials.json",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent(
            """Examples:\n  python scripts/fetch_google_reviews.py \\n    --place-id YOUR_PLACE_ID --api-key YOUR_KEY\n\nEnvironment vars (alternative):\n  export GOOGLE_API_KEY=YOUR_KEY\n  export GOOGLE_PLACE_ID=YOUR_PLACE_ID\n            """
        )
    )
    parser.add_argument('--api-key', dest='api_key', default=os.getenv('GOOGLE_API_KEY'), help='Google Places API key (or set GOOGLE_API_KEY)')
    parser.add_argument('--place-id', dest='place_id', default=os.getenv('GOOGLE_PLACE_ID'), help='Google Place ID (or set GOOGLE_PLACE_ID)')
    parser.add_argument('--language', default='en', help='Language code (default: en)')
    parser.add_argument('--dry-run', action='store_true', help='Do not write file; just show summary')
    args = parser.parse_args()

    if not args.api_key or not args.place_id:
        print('ERROR: API key and Place ID required. Use --api-key / --place-id or env vars GOOGLE_API_KEY / GOOGLE_PLACE_ID.')
        sys.exit(1)

    print('Loading existing testimonials:', DATA_FILE)
    existing = load_existing()
    print(f'Existing count: {len(existing)}')

    try:
        print('Fetching Google reviews...')
        raw_reviews = fetch_google_reviews(args.api_key, args.place_id, args.language)
    except Exception as e:
        print('Failed to fetch reviews:', e)
        sys.exit(2)

    print(f'Fetched {len(raw_reviews)} raw review(s) from API.')
    normalized = [normalize_review(r) for r in raw_reviews]

    merged, added = merge_reviews(existing, normalized)
    print(f'New reviews added: {added}')
    print(f'Total after merge: {len(merged)}')

    if args.dry_run:
        print('--dry-run specified: not writing file.')
    else:
        save_data(merged)
        print('Updated testimonials written.')

    # Show a brief preview
    for i, r in enumerate(normalized, 1):
        print(f"[Fetched #{i}] {r['author']} ({r['rating']}★): {r['quote'][:60]}...")

    print('Done.')


if __name__ == '__main__':
    main()
