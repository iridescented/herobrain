// Services.tsx
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Calculator, Users, Brain, School, Clock, Home, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: BookOpen,
      title: 'Literacy Support',
      short: 'Reading, writing, spelling, and comprehension support using evidence-based methods.',
      detailed: 'We use structured, evidence-based methods like Orton-Gillingham to guide learners through phonics, fluency, comprehension, and written expression. Sessions are multisensory and tailored to each child\'s learning style, making literacy feel achievable and enjoyable.',
      who: 'Children who want stronger reading, writing, and spelling skills.',
      color: '#E77C96'
    },
    {
      icon: Calculator,
      title: 'Math Intervention & Life Skills',
      short: 'Building math confidence and real-world application skills.',
      detailed: 'We strengthen number sense, operations, and problem-solving using concrete→pictorial→abstract steps. Math becomes meaningful through practical examples like money, time, and measurement. We help children build both school skills and everyday math life skills confidently.',
      who: 'Learners needing clarity, confidence, or real-world math application.',
      color: '#97CEC8'
    },
    {
      icon: Brain,
      title: 'Social-Emotional Learning (SEL)',
      short: 'Tools to understand emotions, cope with changes, and stay resilient.',
      detailed: 'We teach emotion recognition, self-regulation, positive self-talk, and resilience strategies through interactive games and scenarios. These skills help children thrive socially and academically, both in the classroom and beyond.',
      who: 'Children who need tools to understand emotions, cope with changes, and stay resilient.',
      color: '#FBD66E'
    },
    {
      icon: Users,
      title: 'Social Skills Development',
      short: 'Helping children connect better with friends and peers.',
      detailed: 'Through modelling, practice, and role-play, we help kids develop conversation skills, teamwork, turn-taking, and empathy. These social interactions become second nature and support positive peer relationships.',
      who: 'Children wanting to connect better with friends and peers.',
      color: '#EEA27B'
    },
    {
      icon: School,
      title: 'School Readiness',
      short: 'Preparing young learners to start school confidently.',
      detailed: 'We build early literacy, numeracy, fine motor, attention span, and independence. By establishing routines and skills like following instructions and managing belongings, children step into school more prepared and excited.',
      who: 'Young learners preparing to start school confidently.',
      color: '#647C9F'
    },
    {
      icon: Clock,
      title: 'Homework & Study Support',
      short: 'Help staying on track with assignments and building study habits.',
      detailed: 'From task organization to time management and motivation, we guide kids to break work into manageable steps, understand key concepts, and build study habits that reduce stress and boost confidence.',
      who: 'Children and teens who need help staying on track with assignments.',
      color: '#E77C96'
    },
    {
      icon: Home,
      title: 'Parent & School Collaboration',
      short: 'Consistent support across home and school environments.',
      detailed: 'We share practical strategies with parents and, when appropriate, coordinate with schools to ensure learning strategies are reinforced consistently. This collaborative approach strengthens a child\'s support system—and enhances lasting progress.',
      who: 'Families and teachers committed to consistent support across home and school.',
      color: '#97CEC8'
    }
  ];

  // Modal animation variants
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setActiveModal(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
            Our Educational Services
          </motion.h1>
          {/* Tagline */}
          <motion.p
            className="text-sm uppercase tracking-wide text-[#647C9F]/70 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            Nurturing growth, Empowering strength
          </motion.p>
          <motion.p 
            className="text-xl text-[#647C9F]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            We offer comprehensive educational support designed to help children build confidence,
            develop essential skills, and achieve academic success through personalized approaches.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-8 flex flex-col h-full"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon
                    className="w-8 h-8"
                    style={{ color: service.color }}
                  />
                </div>

                <h3 className="font-spicy text-2xl font-semibold text-[#647C9F] mb-4">
                  {service.title}
                </h3>

                <div className="mb-4 flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: service.color }}></div>
                  <p className="text-[#647C9F] font-medium">
                    <span className="font-semibold">Who it's for:</span> {service.who}
                  </p>
                </div>

                <p className="text-[#647C9F]/70 leading-relaxed mb-6 flex-grow">
                  {service.short}
                </p>

                <motion.button
                  onClick={() => setActiveModal(index)}
                  className="mt-auto flex items-center space-x-2 text-[#E77C96] hover:text-[#647C9F] transition-colors font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Learn More</span>
                  <ChevronDown className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for service details */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              ref={modalRef}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${services[activeModal].color}20` }}
                  >
                    {(() => {
                      const Icon = services[activeModal].icon;
                      return <Icon className="w-8 h-8" style={{ color: services[activeModal].color }} />;
                    })()}
                  </div>
                  <motion.button
                    onClick={() => setActiveModal(null)}
                    className="text-gray-500 hover:text-gray-700"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <h3 className="font-spicy text-3xl font-semibold text-[#647C9F] mb-6">
                  {services[activeModal].title}
                </h3>

                <div className="mb-6 flex items-start">
                  <div className="w-3 h-3 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: services[activeModal].color }}></div>
                  <p className="text-[#647C9F] font-medium text-lg">
                    <span className="font-semibold">Who it's for:</span> {services[activeModal].who}
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <p className="text-[#647C9F] italic mb-2">
                    "{services[activeModal].short}"
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-[#647C9F]">
                  <p className="leading-relaxed">
                    {services[activeModal].detailed}
                  </p>
                </div>

                <motion.button
                  onClick={() => setActiveModal(null)}
                  className="mt-8 px-6 py-3 bg-[#E77C96] text-white rounded-full font-semibold hover:bg-[#d46a83] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-[#97CEC8]/10 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-spicy text-3xl md:text-5xl font-bold text-[#647C9F] mb-4">FAQs</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="space-y-4">
              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">1. What is Hero Brain?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We’re a holistic education centre that provides intervention and support in literacy, math, social-emotional learning, social skills, and school readiness. We believe every child can learn — with the right strategies, support, and encouragement.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">2. Who do you support?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We support learners as young as 3 years old up to adults. Every individual has their own unique strengths and challenges, and we personalise learning to meet them where they are.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">3. Do you only support children with special needs?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  No. Our programmes are inclusive — that means we work with any learner who may benefit from extra support, whether or not they have a diagnosis. We also provide intervention for children who simply want to strengthen their foundational skills in literacy and math.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">4. How do I know if my child needs intervention?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  If your child struggles with schoolwork, focusing in class, low self-confidence, has difficulty keeping up with peers, or shows frustration towards learning, intervention may help. We usually recommend an initial screening or trial session so we can better understand your child’s needs.
                </p>
              </details>

              <h4 className="font-spicy text-xl text-[#647C9F] mt-6">📌 Programmes & Classes</h4>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">5. What kind of programmes do you offer?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We provide intervention in literacy, math, social-emotional learning, social skills, and school readiness. We also run workshops and parent support programmes.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">6. Are your programmes the same as therapy?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We provide <strong>educational interventions</strong> (not clinical therapy). However, we collaborate with therapists and other professionals (e.g., clinical psychologist, speech therapists, etc.) to give children holistic support.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">7. How big are the classes?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Most of our sessions are <strong>one-to-one</strong> to ensure personalised attention. We also offer small group sessions (2–8 students) for social skills, social-emotional learning, and certain interventions.
                </p>
              </details>

              <h4 className="font-spicy text-xl text-[#647C9F] mt-6">📌 Practical Matters</h4>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">8. How often should my child attend sessions?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  It depends on your child’s needs and goals. Most children attend 1–2 times per week, but we can discuss a plan that works best for your family.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">9. How much do your programmes cost?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  Our prices vary depending on the programme and frequency. Please reach out to us directly and we’ll share a customised plan.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">10. Can parents sit in during sessions?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We usually encourage children to work independently during sessions, but we provide feedback and updates to parents after each class. For certain programmes, parent involvement is part of the process.
                </p>
              </details>

              <h4 className="font-spicy text-xl text-[#647C9F] mt-6">📌 Impact & Progress</h4>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">11. How will I know if my child is progressing?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  We provide regular updates and reviews with parents, highlighting both achievements and areas to keep working on. Our focus is on <strong>confidence, motivation, and lasting skills</strong>, not just academic results.
                </p>
              </details>

              <details className="group rounded-xl border border-[#647C9F]/20 p-4 open:bg-white/60">
                <summary className="cursor-pointer font-semibold text-[#647C9F]">12. How does intervention here help in school?</summary>
                <p className="mt-2 text-[#647C9F]/80">
                  By building foundational skills, self-confidence, and social-emotional regulation, children are better equipped to handle challenges in school — academically, socially, and emotionally. Also, the skills we teach — whether in literacy, math, social-emotional learning, or social skills — are designed to support success in school and beyond. We also work closely with parents to encourage practice at home, and we’re open to collaborating with schools to ensure consistency and generalisation of skills across environments.
                </p>
              </details>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#647C9F] to-[#97CEC8]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="font-spicy text-3xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Let's discuss how our educational services can help your child succeed.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-[#647C9F] rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Contact Us Today
            </a>
            <a
              href="/contact"
              className="inline-block px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#647C9F] transition-all duration-200"
            >
              <span className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Request Consultation
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;