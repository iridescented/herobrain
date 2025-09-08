// Testimonials.tsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
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

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Working with this team has been an absolute pleasure. They brought our vision to life with creativity and professionalism that exceeded our expectations.",
      author: "Sarah M.",
      role: "Marketing Director",
      company: "TechStart Inc.",
      rating: 5,
      color: '#E77C96'
    },
    {
      quote: "The collaborative approach and attention to detail made all the difference. Our project was delivered on time and beyond what we imagined possible.",
      author: "Michael R.",
      role: "CEO",
      company: "GrowthCorp",
      rating: 5,
      color: '#97CEC8'
    },
    {
      quote: "Their playful yet professional style perfectly matched our brand. The team understood our needs and delivered exceptional results.",
      author: "Jennifer L.",
      role: "Creative Manager",
      company: "BrightIdeas Co.",
      rating: 5,
      color: '#FBD66E'
    },
    {
      quote: "From concept to completion, the team was responsive, creative, and genuinely cared about our success. Highly recommended!",
      author: "David K.",
      role: "Founder",
      company: "Innovation Labs",
      rating: 5,
      color: '#EEA27B'
    },
    {
      quote: "The website they created for us has received countless compliments. It perfectly captures our brand personality and converts visitors into customers.",
      author: "Lisa W.",
      role: "Business Owner",
      company: "Wellness Studio",
      rating: 5,
      color: '#647C9F'
    },
    {
      quote: "Their team building workshop transformed our workplace culture. The activities were engaging and the results have been lasting.",
      author: "Robert H.",
      role: "HR Director",
      company: "Global Solutions",
      rating: 5,
      color: '#E77C96'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="absolute top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${testimonials[currentTestimonial].color}20` }}
              >
                <Quote
                  className="w-8 h-8"
                  style={{ color: testimonials[currentTestimonial].color }}
                />
              </div>

              <div className="pt-12">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-current"
                      style={{ color: testimonials[currentTestimonial].color }}
                    />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl text-[#647C9F] leading-relaxed mb-8 font-light">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <cite className="font-spicy text-xl font-semibold text-[#647C9F] not-italic">
                      {testimonials[currentTestimonial].author}
                    </cite>
                    <p className="text-[#647C9F]/70">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-gradient-to-r from-[#97CEC8] to-[#647C9F] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-gradient-to-r from-[#97CEC8] to-[#647C9F] text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <motion.div 
              className="flex justify-center space-x-3 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? 'bg-[#E77C96] scale-125'
                      : 'bg-[#647C9F]/30 hover:bg-[#647C9F]/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-[#97CEC8]/10 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-6">
              More Happy Clients
            </h2>
            <p className="text-xl text-[#647C9F]/70 max-w-2xl mx-auto">
              Every project is an opportunity to build lasting relationships and create meaningful impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: testimonial.color }}
                    />
                  ))}
                </div>

                <blockquote className="text-[#647C9F]/80 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-semibold text-[#647C9F] not-italic block">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-[#647C9F]/70">
                      {testimonial.role}
                    </p>
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