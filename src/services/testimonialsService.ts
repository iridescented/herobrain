// services/testimonialsService.ts
// Abstraction layer so future CMS (e.g., Headless, GraphQL, AppSync, Contentful) can replace this easily.
import data from '../data/testimonials.json';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  rating: number;
  color?: string;
  createdAt?: string;
  status?: 'APPROVED' | 'PENDING';
}

// Simulate async fetch (e.g., from CMS)
export async function fetchTestimonials(options?: { includePending?: boolean }): Promise<Testimonial[]> {
  const includePending = options?.includePending || false;
  const items = (data as Testimonial[]).filter(t => includePending ? true : t.status !== 'PENDING');
  // Sort newest first, then rating desc
  return items.sort((a, b) => {
    const dateA = a.createdAt ? Date.parse(a.createdAt) : 0;
    const dateB = b.createdAt ? Date.parse(b.createdAt) : 0;
    if (dateB !== dateA) return dateB - dateA;
    return (b.rating || 0) - (a.rating || 0);
  });
}

export async function addLocalTestimonial(t: Omit<Testimonial, 'id'>): Promise<Testimonial> {
  // For now just return a shaped object (no persistence). CMS integration will replace this.
  return { id: `local-${Date.now()}`, ...t };
}
