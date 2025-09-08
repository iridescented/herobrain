// Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, BookOpen, Calculator, Users as UsersIcon, Brain, School, Clock, HomeIcon } from 'lucide-react';
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

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Literacy Support',
      description: 'Evidence-based reading, writing, and spelling support tailored to each child\'s learning style.',
      color: '#E77C96'
    },
    {
      icon: Calculator,
      title: 'Math Intervention',
      description: 'Building number sense and real-world math application skills with practical examples.',
      color: '#97CEC8'
    },
    {
      icon: Brain,
      title: 'Social-Emotional Learning',
      description: 'Teaching emotion recognition, self-regulation, and resilience strategies.',
      color: '#FBD66E'
    },
    {
      icon: UsersIcon,
      title: 'Social Skills Development',
      description: 'Helping children connect better with friends and peers through practice and role-play.',
      color: '#EEA27B'
    },
    {
      icon: School,
      title: 'School Readiness',
      description: 'Building early literacy, numeracy, and independence for young learners.',
      color: '#647C9F'
    },
    {
      icon: Clock,
      title: 'Homework Support',
      description: 'Guiding children to break work into manageable steps and build study habits.',
      color: '#E77C96'
    },
    {
      icon: HomeIcon, // New service
      title: 'Parent & School Collaboration',
      description: 'Sharing strategies with parents and coordinating with schools for consistent support.',
      color: '#97CEC8'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#97CEC8]/20 via-white to-[#FBD66E]/20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="inline-block p-4 bg-gradient-to-r from-[#97CEC8] to-[#647C9F] rounded-full mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img
                  src="/src/assets/herobrainlogo.png"
                  alt="Herobrain Icon"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null; // Prevents infinite loop
                    e.currentTarget.style.display = "none";
                    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    svg.setAttribute("viewBox", "0 0 32 29.6");
                    svg.setAttribute("fill", "currentColor");
                    svg.setAttribute("class", "w-20 h-20 text-[#E77C96]");
                    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute("d", "M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.3,16,21.2,16,21.2s16-11.9,16-21.2C32,3.8,28.2,0,23.6,0z");
                    svg.appendChild(path);
                    if (e.currentTarget.parentNode) {
                      e.currentTarget.parentNode.appendChild(svg);
                    }
                  }}
                />
              </div>
            </motion.div>

            <motion.h1 
              className="font-spicy text-4xl md:text-6xl lg:text-7xl font-bold"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-[#647C9F] via-[#E77C96] to-[#97CEC8] bg-clip-text text-transparent">
                Educational Support
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FBD66E] via-[#EEA27B] to-[#E77C96] bg-clip-text text-transparent">
                That Makes a Difference
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-[#647C9F]/80 leading-relaxed max-w-3xl mx-auto"
              variants={itemVariants}
            >
              At Hero Brain, we provide specialized educational services that help children build confidence,
              develop essential skills, and achieve academic success through personalized support.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              variants={itemVariants}
            >
              <Link
                to="/services"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-[#97CEC8] to-[#647C9F] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-[#E77C96] text-[#E77C96] rounded-full font-semibold hover:bg-[#E77C96] hover:text-white transition-all duration-200"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#97CEC8]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-6">
              Our Educational Services
            </h2>
            <p className="text-xl text-[#647C9F]/70 max-w-2xl mx-auto">
              We offer comprehensive support to help children thrive academically and socially.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon
                    className="w-8 h-8"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="font-spicy text-xl font-semibold text-[#647C9F] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#647C9F]/70 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  to="/services"
                  className="inline-block mt-4 text-[#E77C96] hover:text-[#647C9F] font-semibold transition-colors"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#97CEC8] via-[#FBD66E] to-[#EEA27B]"
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
            Ready to Help Your Child Succeed?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's work together to build your child's confidence and academic skills.
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
              className="inline-block px-10 py-5 bg-white text-[#647C9F] rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="inline-block px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#647C9F] transition-all duration-200"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;