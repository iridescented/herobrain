// Collaborate.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Lightbulb, Rocket, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.67, 0.83, 0.67] as [number, number, number, number]
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Collaborate = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Diverse Perspectives',
      description: '//Bring together different viewpoints and expertise to create innovative solutions.//',
      color: '#97CEC8'
    },
    {
      icon: Lightbulb,
      title: 'Creative Synergy',
      description: '//Combine our creative energies to generate ideas that neither of us could achieve alone.//',
      color: '#FBD66E'
    },
    {
      icon: Rocket,
      title: 'Amplified Impact',
      description: '//Reach new audiences and markets by leveraging our combined networks and resources.//',
      color: '#EEA27B'
    },
    {
      icon: Heart,
      title: 'Meaningful Relationships',
      description: '//Build lasting professional relationships based on mutual respect and shared values.//',
      color: '#E77C96'
    }
  ];

  const collaborationTypes = [
    {
      title: 'Creative Partnerships',
      description: '//Joint projects that combine our creative talents with your unique expertise.//',
      examples: ['Co-branded campaigns', 'Collaborative content creation', 'Design partnerships']
    },
    {
      title: 'Strategic Alliances',
      description: '//Long-term partnerships that benefit both our organizations and clients.//',
      examples: ['Referral programs', 'Joint service offerings', 'Shared resources']
    },
    {
      title: 'Community Building',
      description: '//Working together to create positive impact in our communities.//',
      examples: ['Nonprofit collaborations', 'Educational initiatives', 'Social impact projects']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#97CEC8]/20 to-[#FBD66E]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="font-spicy text-4xl md:text-6xl font-bold text-[#647C9F] mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🤝 Collaborate with Us
          </motion.h1>
          <motion.p
            className="text-sm uppercase tracking-wide text-[#647C9F]/70 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            nurturing growth, empowering strength
          </motion.p>
          <motion.p
            className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            At <span className="font-semibold">Hero Brain Education Centre</span>, we believe learning doesn’t happen in isolation.
            It takes a whole community — parents, teachers, schools, professionals, and even businesses — to help children thrive.
            That’s why we love collaborating with like-minded individuals and organisations who share our vision of supporting children and families.
          </motion.p>
        </div>
      </section>

      {/* Why Collaborate */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-spicy text-[#647C9F] mb-4">Why Collaborate with Hero Brain?</h2>
            <ul className="space-y-3 text-[#647C9F]/90">
              <li>🌟 <em>Shared Purpose</em> – Helping children discover their strengths and build confidence through joyful learning.</li>
              <li>🌟 <em>Holistic Support</em> – We care for children and families; when caregivers are supported, children flourish.</li>
              <li>🌟 <em>Long-Term Vision</em> – Preparing young people to live, work, and thrive independently in society.</li>
              <li>🌟 <em>Community Impact</em> – Create opportunities that benefit students, families, and the wider community.</li>
              <li>🌟 <em>Inclusive Opportunities</em> – Partnering with businesses to open doors from volunteering to internships to employment.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Who We Collaborate With */}
      <section className="py-16 bg-gradient-to-b from-white to-[#97CEC8]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-spicy text-[#647C9F] mb-4">Who We Collaborate With</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#647C9F]/90">
              <li><em>Parents & Volunteers</em> who want to share their skills, time, or experiences</li>
              <li><em>Professionals</em> (speech therapists, occupational therapists, psychologists, counsellors, play/creative therapists, etc.)</li>
              <li><em>Therapists/Service Providers</em> offering parent support programs, therapy, or workshops</li>
              <li><em>Educators & Trainers</em> (teachers, coaches, facilitators)</li>
              <li><em>Community Creatives</em> (storytellers, artists, musicians, mindfulness coaches, etc.)</li>
              <li><em>Community Service Partners</em> (NGOs, local groups, and businesses championing inclusion)</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* What Collaboration Looks Like */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-spicy text-[#647C9F] mb-4">What Collaboration Looks Like</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#647C9F]/90">
              <li><em>Workshops & Talks</em> for parents, teachers, students, or workplaces</li>
              <li><em>Joint Events</em> such as holiday camps, family activities, or one-off events</li>
              <li><em>Special Programs</em> combining different expertise to create unique experiences</li>
              <li><em>Resource Development</em> – guides and toolkits co-created for families and schools</li>
              <li><em>Inclusive Opportunities</em> – training, exposure, or employment pathways for young adults with special needs</li>
              <li><em>Inclusion Workshops for Workplaces</em> – practical training for inclusive practices</li>
              <li><em>Referral Partnerships</em> – discounted rates or priority slots for our families</li>
              <li><em>Space Rental</em> – we have a space to rent for storytelling sessions, art classes, music classes, etc.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Belief + CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-[#97CEC8]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-spicy text-[#647C9F] mb-4">Our Belief 🌱</h2>
            <p className="text-[#647C9F]/90 leading-relaxed">
              We believe in <em>supporting as a community and collaborating as a village</em>. This means caring for children beyond school years and preparing them for adulthood — while supporting parents so they feel equipped and encouraged.
            </p>
            <p className="text-[#647C9F]/90 leading-relaxed mt-4">
              Every partnership — big or small, one-off or long-term — helps build a more inclusive world for children, families, and communities.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-[#E77C96] text-white rounded-full font-semibold hover:bg-[#d46a83] transition-colors"
              >
                📩 Have an idea? Reach out — we’d love to collaborate with you.
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-spicy text-[#647C9F] mb-6">FAQs</h2>
            <div className="space-y-4">
              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">1. What is Hero Brain?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We’re a holistic education centre providing intervention and support in literacy, math, social-emotional learning, social skills, and school readiness. We believe every child can learn with the right strategies, support, and encouragement.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">2. Who do you support?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We support learners from age 3 up to adults. Each learner has unique strengths and challenges; we personalise learning to meet them where they are.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">3. Do you only support children with special needs?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  No. Our programmes are inclusive — we work with any learner who may benefit from extra support, with or without a diagnosis.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">4. How do I know if my child needs intervention?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  If your child struggles with schoolwork, focus, confidence, peer pace, or shows frustration toward learning, intervention may help. We recommend an initial screening or trial session.
                </p>
              </details>

              <h3 className="font-spicy text-xl text-[#647C9F] mt-6">Programmes & Classes</h3>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">5. What kind of programmes do you offer?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Interventions in literacy, math, social-emotional learning, social skills, and school readiness; plus workshops and parent support programmes.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">6. Are your programmes the same as therapy?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We provide educational interventions (not clinical therapy) and collaborate with therapists (e.g., clinical psychologist, speech therapists) for holistic support.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">7. How big are the classes?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Mostly one-to-one sessions; small groups (2–8 students) for social skills, SEL, and certain interventions.
                </p>
              </details>

              <h3 className="font-spicy text-xl text-[#647C9F] mt-6">Practical Matters</h3>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">8. How often should sessions be?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Depends on needs and goals. Many attend 1–2 times per week; we’ll plan together with you.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">9. How much do programmes cost?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Pricing varies by programme and frequency. Contact us for a customised plan.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">10. Can parents sit in during sessions?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We encourage independence during sessions; we provide feedback and updates after each class. Some programmes include parent involvement.
                </p>
              </details>

              <h3 className="font-spicy text-xl text-[#647C9F] mt-6">Impact & Progress</h3>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">11. How will I know if my child is progressing?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Regular updates and reviews focusing on confidence, motivation, and lasting skills — not just academic results.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">12. How does intervention help in school?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  By building foundational skills, self-confidence, and social-emotional regulation, learners are better equipped for challenges in school and beyond. We collaborate with parents and, where appropriate, schools for consistency.
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collaborate;