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
      description: 'Bring together different viewpoints and expertise to create innovative solutions.',
      color: '#97CEC8'
    },
    {
      icon: Lightbulb,
      title: 'Creative Synergy',
      description: 'Combine our creative energies to generate ideas that neither of us could achieve alone.',
      color: '#FBD66E'
    },
    {
      icon: Rocket,
      title: 'Amplified Impact',
      description: 'Reach new audiences and markets by leveraging our combined networks and resources.',
      color: '#EEA27B'
    },
    {
      icon: Heart,
      title: 'Meaningful Relationships',
      description: 'Build lasting professional relationships based on mutual respect and shared values.',
      color: '#E77C96'
    }
  ];

  const collaborationTypes = [
    {
      title: 'Creative Partnerships',
      description: 'Joint projects that combine our creative talents with your unique expertise.',
      examples: ['Co-branded campaigns', 'Collaborative content creation', 'Design partnerships']
    },
    {
      title: 'Strategic Alliances',
      description: 'Long-term partnerships that benefit both our organizations and clients.',
      examples: ['Referral programs', 'Joint service offerings', 'Shared resources']
    },
    {
      title: 'Community Building',
      description: 'Working together to create positive impact in our communities.',
      examples: ['Nonprofit collaborations', 'Educational initiatives', 'Social impact projects']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#97CEC8]/20 via-white to-[#E77C96]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="inline-block p-4 bg-gradient-to-r from-[#97CEC8] to-[#E77C96] rounded-full mb-8"
              variants={itemVariants}
            >
              <Users className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h1
              className="font-spicy text-4xl md:text-6xl font-bold text-[#647C9F] mb-6"
              variants={itemVariants}
            >
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-[#E77C96] to-[#FBD66E] bg-clip-text text-transparent">
                Amazing Together
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[#647C9F]/70 leading-relaxed mb-8"
              variants={itemVariants}
            >
              We believe the best ideas come from collaboration. Whether you're a fellow creative,
              a business owner, or an organization with a mission, we'd love to explore how we can
              work together to create something meaningful.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#E77C96] to-[#FBD66E] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span>Start the Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-6">
              Why Collaborate with Us?
            </h2>
            <p className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto">
              Collaboration isn't just about working together – it's about creating something
              greater than the sum of our individual parts.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon
                    className="w-10 h-10"
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="font-spicy text-xl font-semibold text-[#647C9F] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#647C9F]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-20 bg-gradient-to-b from-[#97CEC8]/10 to-[#FBD66E]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-6">
              Ways We Can Work Together
            </h2>
            <p className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto">
              Every collaboration is unique, but here are some of the ways we love to partner with others.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                variants={itemVariants}
              >
                <div
                  className="h-2"
                  style={{
                    background: `linear-gradient(90deg, ${['#97CEC8', '#FBD66E', '#E77C96'][index]
                      } 0%, ${['#647C9F', '#EEA27B', '#97CEC8'][index]} 100%)`
                  }}
                />
                <div className="p-8">
                  <h3 className="font-spicy text-2xl font-semibold text-[#647C9F] mb-4">
                    {type.title}
                  </h3>
                  <p className="text-[#647C9F]/70 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-3">
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: ['#97CEC8', '#FBD66E', '#E77C96'][index] }}
                        />
                        <span className="text-[#647C9F]/80">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-6">
                Our Collaboration Process
              </h2>
              <p className="text-xl text-[#647C9F]/70">
                We believe great collaborations start with great conversations.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  step: '01',
                  title: 'Connect & Explore',
                  description: 'We start with a friendly chat to understand your ideas, goals, and how we might work together.',
                  color: '#97CEC8'
                },
                {
                  step: '02',
                  title: 'Plan & Design',
                  description: 'Together, we create a collaboration plan that leverages both our strengths and aligns with our values.',
                  color: '#FBD66E'
                },
                {
                  step: '03',
                  title: 'Create & Launch',
                  description: 'We bring our shared vision to life, maintaining open communication throughout the process.',
                  color: '#E77C96'
                }
              ].map((step, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-spicy text-xl font-bold mb-6"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-spicy text-xl font-semibold text-[#647C9F] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#647C9F]/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#97CEC8] via-[#FBD66E] to-[#E77C96]"
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
            Ready to Start Our Journey Together?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Whether you have a specific project in mind or just want to explore possibilities,
            we'd love to hear from you. Let's create something amazing together!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-[#647C9F] rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#647C9F] transition-all duration-200"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Collaborate;