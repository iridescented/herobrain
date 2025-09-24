// Contact.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Facebook, Instagram } from 'lucide-react';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            Get In Touch With Us
          </motion.h1>
          <motion.p 
            className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            We're here to answer your questions and discuss how we can support your child's educational journey.
            Reach out to schedule a consultation or learn more about our services.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Contact Info */}
            <motion.div 
              className="space-y-8 max-w-2xl"
              variants={itemVariants}
            >
              <div>
                <h2 className="font-spicy text-3xl font-bold text-[#647C9F] mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-[#647C9F]/70 leading-relaxed">
                  We're dedicated to providing personalized educational support for your child. 
                  Contact us to learn more about our services or to schedule an appointment.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'herobrain.consultations@gmail.com',
                    description: 'Send us a message anytime',
                    color: '#E77C96'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: '+6016-7048484',
                    description: 'By appointment only',
                    color: '#97CEC8'
                  },
                  {
                    icon: MapPin,
                    title: 'Our Location',
                    content: '72, Jln Horizon Perdana 1, Tmn Horizon Hills, 79100, Iskandar Puteri, Johor, Malaysia',
                    description: 'We offer both in-person and online sessions',
                    color: '#FBD66E'
                  },
                  {
                    icon: Clock,
                    title: 'Opening Hours',
                    content: 'By appointment only',
                    description: 'We are flexible to your schedule',
                    color: '#EEA27B'
                  },
                  {
                    icon: MessageCircle,
                    title: 'WhatsApp',
                    content: '016-7048484',
                    description: 'Message us directly on WhatsApp',
                    color: '#25D366'
                  }
                ].map((contact, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4 group"
                    variants={itemVariants}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: `${contact.color}20` }}
                    >
                      <contact.icon
                        className="w-7 h-7"
                        style={{ color: contact.color }}
                      />
                    </div>
                    <div>
                      <h3 className="font-spicy text-lg font-semibold text-[#647C9F] mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-[#647C9F] font-medium mb-1">
                        {contact.content}
                      </p>
                      <p className="text-[#647C9F]/60 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div 
                className="pt-6"
                variants={itemVariants}
              >
                <h3 className="font-spicy text-xl font-semibold text-[#647C9F] mb-4">
                  Follow Us On Social Media
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#97CEC8]/20 flex items-center justify-center hover:bg-[#97CEC8]/40 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-[#647C9F]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#97CEC8]/20 flex items-center justify-center hover:bg-[#97CEC8]/40 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-[#647C9F]" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl"
              variants={itemVariants}
            >
              <h3 className="font-spicy text-2xl font-semibold text-[#647C9F] mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <motion.div 
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-[#97CEC8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#97CEC8]" />
                  </div>
                  <h4 className="font-spicy text-xl font-semibold text-[#647C9F] mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-[#647C9F]/70">
                    Thank you for reaching out. We'll get back to you within 24 hours!
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#647C9F] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97CEC8] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#647C9F] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97CEC8] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#647C9F] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97CEC8] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="consultation">Schedule Consultation</option>
                      <option value="services">Questions About Services</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#647C9F] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97CEC8] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you and your child..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-[#97CEC8] to-[#647C9F] text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#97CEC8]/10 to-white">
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#647C9F]/70">
                Here are some common questions we receive from parents and caregivers.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                {
                  question: 'What types of educational support do you provide?',
                  answer: 'We offer comprehensive educational support including literacy intervention, math skills development, social-emotional learning, social skills development, school readiness, homework support, and parent collaboration.'
                },
                {
                  question: 'How do I schedule an appointment?',
                  answer: 'You can schedule an appointment by calling us at 016-7048484, messaging us on WhatsApp, or filling out the contact form on this page. We will get back to you within 24 hours to confirm your appointment.'
                },
                {
                  question: 'Do you offer online sessions?',
                  answer: 'Yes, we offer both in-person sessions at our location in Iskandar Puteri and online sessions via video conference for your convenience.'
                },
                {
                  question: 'What ages do you work with?',
                  answer: 'We work with children of all ages, from preschoolers needing school readiness support to teens requiring academic assistance and social skills development.'
                },
                {
                  question: 'How are your sessions structured?',
                  answer: 'Sessions are typically 60 minutes long and are tailored to each child\'s specific needs. We begin with an assessment to understand your child\'s strengths and challenges, then develop a personalized learning plan.'
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-lg p-6"
                  variants={itemVariants}
                >
                  <h3 className="font-spicy text-lg font-semibold text-[#647C9F] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#647C9F]/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;