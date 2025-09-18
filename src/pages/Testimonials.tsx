// Testimonials.tsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchTestimonials, Testimonial } from '../services/testimonialsService';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] as [number, number, number, number] }
  }
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Pick a featured subset for carousel (top by rating, up to N)
  const FEATURED_COUNT = 5;
  const featuredTestimonials = useMemo(() => {
    if (!allTestimonials.length) return [];
    const sorted = [...allTestimonials].sort(
      (a, b) => (b.rating || 0) - (a.rating || 0)
    );
    return sorted.slice(0, FEATURED_COUNT);
  }, [allTestimonials]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials();
        setAllTestimonials(data);
      } catch (e: any) {
        setError(e.message || 'Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const startAuto = (len: number) => {
    if (!len) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % len);
    }, 10000);
  };

  useEffect(() => {
    startAuto(featuredTestimonials.length);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [featuredTestimonials.length]);

  const next = () => {
    if (!featuredTestimonials.length) return;
    setCurrentTestimonial(p => (p + 1) % featuredTestimonials.length);
    startAuto(featuredTestimonials.length);
  };
  const prev = () => {
    if (!featuredTestimonials.length) return;
    setCurrentTestimonial(p => (p - 1 + featuredTestimonials.length) % featuredTestimonials.length);
    startAuto(featuredTestimonials.length);
  };

  const active = featuredTestimonials[currentTestimonial];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#97CEC8]/20 to-[#FBD66E]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="font-spicy text-4xl md:text-6xl font-bold text-[#647C9F] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Don't just take our word for it – hear from the amazing clients we've had the pleasure of working with.
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[420px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              {loading && <div className="text-center text-[#647C9F]/60">Loading testimonials...</div>}
              {!loading && error && <div className="text-center text-red-500">{error}</div>}
              {!loading && !error && !allTestimonials.length && <div className="text-center text-[#647C9F]/60">No testimonials available yet.</div>}
              {!loading && !error && featuredTestimonials.length > 0 && active && (
                <>
                  <div
                    className="absolute top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${active.color || '#97CEC8'}20` }}
                  >
                    <Quote className="w-8 h-8" style={{ color: active.color || '#97CEC8' }} />
                  </div>
                  <div className="pt-12 px-16 md:px-20">
                    <div className="flex mb-6">
                      {[...Array(active.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" style={{ color: active.color || '#97CEC8' }} />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-3xl text-[#647C9F] leading-relaxed mb-8 font-light whitespace-pre-line">"{active.quote}"</blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <cite className="font-spicy text-xl font-semibold text-[#647C9F] not-italic">{active.author}</cite>
                        <p className="text-[#647C9F]/70">{active.role}{active.company ? ` · ${active.company}` : ''}</p>
                      </div>
                    </div>
                  </div>

                  {/* Absolute-positioned navigation arrows for consistent placement */}
                  <motion.button
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#97CEC8] to-[#647C9F] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    aria-label="Next testimonial"
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#97CEC8] to-[#647C9F] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}
            </motion.div>

            {/* Indicators (for featured only) */}
            {!loading && !error && featuredTestimonials.length > 0 && (
              <motion.div
                className="flex justify-center space-x-3 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {featuredTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => { setCurrentTestimonial(index); startAuto(featuredTestimonials.length); }}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTestimonial ? 'bg-[#E77C96] scale-125' : 'bg-[#647C9F]/30 hover:bg-[#647C9F]/50'}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section id="all-testimonials" className="py-20 bg-gradient-to-b from-[#97CEC8]/10 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-6">More Happy Clients</h2>
            <p className="text-xl text-[#647C9F]/70 max-w-2xl mx-auto">Every project is an opportunity to build lasting relationships and create meaningful impact.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {loading && <div className="col-span-full text-center text-[#647C9F]/60">Loading testimonials...</div>}
            {error && !loading && <div className="col-span-full text-center text-red-500">{error}</div>}
            {!loading && !error && !allTestimonials.length && <div className="col-span-full text-center text-[#647C9F]/60">No testimonials available.</div>}
            {!loading && !error && allTestimonials.map((t, index) => (
              <motion.div
                key={t.id || index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: t.color || '#97CEC8' }} />
                  ))}
                </div>
                <blockquote className="text-[#647C9F]/80 leading-relaxed mb-6 whitespace-pre-line">"{t.quote}"</blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: t.color || '#97CEC8' }}>{(t.author && t.author.charAt(0)) || '?'}</div>
                  <div>
                    <cite className="font-semibold text-[#647C9F] not-italic block">{t.author || 'Anonymous'}</cite>
                    <p className="text-sm text-[#647C9F]/70">{t.role}{t.company ? ` · ${t.company}` : ''}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#E77C96] to-[#FBD66E]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="font-spicy text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Join Our Happy Clients?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's work together to create something amazing that your customers will love.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-[#647C9F] rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Testimonials;