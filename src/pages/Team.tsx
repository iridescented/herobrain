// Team.tsx
import { useState, useRef, useEffect } from 'react';
import { Linkedin, Mail, Phone, ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Team = () => {
  const [modalMember, setModalMember] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalMember(null);
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
        setModalMember(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const teamMembers = [
    {
      name: 'Melissa Yap',
      role: 'Founder & Inclusive Education Specialist',
      bio: 'Melissa is a dedicated educator with a Master\'s in Inclusive Education and 10+ years of experience in international schools.',
      detailedBio: 'Hi, I\'m Melissa Yap, the founder of Hero Brain. I\'ve always considered myself a lifelong learner — starting as a part-time teacher during high school, later earning my Master\'s in Inclusive Education, and now continuing my growth through training in evidence-based methods. Over the past 10+ years of working in international schools in Johor, I\'ve seen how powerful it can be when children are given the right support and encouragement to learn. I believe that every child can learn — but they need to want to learn, love learning, and enjoy the process. Too often, children lose confidence, become frustrated, or even develop behavioural and emotional challenges simply because the way they are taught doesn\'t suit them. That\'s why I focus on tapping into each child\'s interests, strengths, and learning style, making learning meaningful and accessible. I also believe strongly in collaboration. A child learns best when their "village" — parents, teachers, and support professionals — works together. That\'s why I make it a priority to partner closely with families and schools, so that every child experiences consistency and encouragement across all environments. At Hero Brain, my goal is to help learners build confidence, motivation, and joy through support in literacy, math, social-emotional learning, social skills, and school readiness. With the right strategies, challenges can be transformed into heroic strengths that lead to success in school and beyond. My vision is simple: to nurture growth, empower strengths, and remind every individual that everyone can succeed.',
      image: '/path/to/melissa-photo.jpg',
      color: '#97CEC8',
      qualifications: [
        'Master\'s in Inclusive Education',
        'Trained in Play Therapy',
        'Trained in Orton-Gillingham approach',
        '10+ years experience in international schools'
      ],
      socials: [
        { icon: Linkedin, href: 'https://linkedin.com' },
        { icon: Mail, href: 'mailto:melissa@herobrain.com' }
      ]
    },
    {
      name: 'Tan Chee Ching',
      role: 'Clinical Psychologist',
      bio: 'MAHPC(CP) 00358; CP1-0472. Specializes in psychological assessments and interventions for children with special needs, teenagers, adolescents, and adults.',
      detailedBio: 'As a clinical psychologist, I specialize in providing psychological assessments and interventions for children with special needs, as well as for teenagers, adolescents, and adults. Besides, I also share my knowledge through talks and workshops with the intention of raising awareness about mental health. I earned my Bachelor of Arts in Psychology from Help College and went on to complete my Master\'s in Clinical Psychology at the University of Cyberjaya. I graduated in the year of 2022 and started working as a clinical psychologist. Prior to my graduate study, I worked for two years as a Montessori tutor and clinic assistant, which allowed me to understand and learn to interact with children as well as support diverse learning needs. My areas of expertise include psychological evaluation, cognitive-behavioral therapy, and family support, all aimed at promoting mental health and well-being across various age groups. Since becoming a mother in 2023, I have begun to navigate the profound emotional and role transitions associated with motherhood. This journey has opened my eyes to the challenges that many new parents may face, and I intend to specialise in family therapies such as postpartum depression, family communication, maintaining a healthy and balanced relationship (couple or spouses) and different parenting styles. My hope is to foster a supportive dialogue that can help create healthier family dynamics.',
      image: '/path/to/tan-photo.jpg',
      color: '#FBD66E',
      qualifications: [
        'MAHPC(CP) 00358; CP1-0472',
        'Master in Clinical Psychology - University of Cyberjaya',
        'Bachelor of Arts in Psychology - Southern New Hampshire University',
        'Specializes in psychological assessments and interventions'
      ],
      specialties: [
        'Psychological Assessments & Interventions for Children with Special Needs',
        'Psychotherapy for Teens & Adults',
        'Family Support Strategies',
        'Workshops on Mental Health, Parenting, and Postpartum Wellness'
      ],
      contact: {
        phone: '+60 16-3043113',
        email: 'cheeching95@yahoo.com'
      },
      socials: [
        { icon: Phone, href: 'tel:+60163043113' },
        { icon: Mail, href: 'mailto:cheeching95@yahoo.com' }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#97CEC8]/20 to-[#FBD66E]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="font-spicy text-3xl md:text-5xl lg:text-6xl font-bold text-[#647C9F] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-[#647C9F]/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Our dedicated team of professionals is passionate about helping children and families
            achieve their full potential through specialized educational and psychological support.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 flex flex-col"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-[#97CEC8]/30 to-[#FBD66E]/30 flex items-center justify-center relative">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundColor: member.color }}
                    />
                    <div className="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center shadow-md z-10">
                      <span className="text-gray-500 text-sm">Photo</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex space-x-3">
                      {member.socials.map((social, socialIndex) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={socialIndex}
                            href={social.href}
                            className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#647C9F] hover:bg-white transition-colors shadow-md"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <IconComponent size={18} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: member.color }}
                    />
                    <span
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: member.color }}
                    >
                      {member.role}
                    </span>
                  </div>

                  <h3 className="font-spicy text-xl md:text-2xl font-semibold text-[#647C9F] mb-4">
                    {member.name}
                  </h3>

                  <p className="text-[#647C9F]/70 leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Qualifications preview */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#647C9F] mb-3">Key Qualifications:</h4>
                    <ul className="text-[#647C9F]/70 space-y-2">
                      {member.qualifications.slice(0, 2).map((qual, i) => (
                        <li key={i} className="flex">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: member.color }}></span>
                          <span>{qual}</span>
                        </li>
                      ))}
                      {member.qualifications.length > 2 && (
                        <li className="text-[#647C9F]/70 italic">
                          +{member.qualifications.length - 2} more qualifications
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <motion.button
                      onClick={() => setModalMember(index)}
                      className="w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:opacity-80"
                      style={{
                        backgroundColor: `${member.color}20`,
                        color: member.color
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Full Profile
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal for full profile */}
      <AnimatePresence>
        {modalMember !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              ref={modalRef}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={() => setModalMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-[#647C9F] hover:bg-gray-100 transition-colors shadow-md"
                aria-label="Close modal"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <X size={24} />
              </motion.button>

              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-r from-[#97CEC8]/30 to-[#FBD66E]/30 flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundColor: teamMembers[modalMember].color }}
                  />
                  <div className="w-40 h-40 rounded-full bg-white/80 flex items-center justify-center shadow-lg z-10">
                    <span className="text-gray-500">Photo</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="flex space-x-3">
                    {teamMembers[modalMember].socials.map((social, socialIndex) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={socialIndex}
                          href={social.href}
                          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#647C9F] hover:bg-white transition-colors shadow-md"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: teamMembers[modalMember].color }}
                  />
                  <span
                    className="text-sm font-semibold uppercase tracking-wide"
                    style={{ color: teamMembers[modalMember].color }}
                  >
                    {teamMembers[modalMember].role}
                  </span>
                </div>

                <h3 className="font-spicy text-2xl md:text-3xl font-semibold text-[#647C9F] mb-4">
                  {teamMembers[modalMember].name}
                </h3>

                <p className="text-[#647C9F]/70 leading-relaxed mb-6">
                  {teamMembers[modalMember].bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#647C9F] mb-3">Qualifications:</h4>
                  <ul className="text-[#647C9F]/70 space-y-2">
                    {teamMembers[modalMember].qualifications.map((qual, i) => (
                      <li key={i} className="flex">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2" style={{ backgroundColor: teamMembers[modalMember].color }}></span>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {teamMembers[modalMember].specialties && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#647C9F] mb-3">Specialties:</h4>
                    <ul className="text-[#647C9F]/70 space-y-2">
                      {teamMembers[modalMember].specialties.map((specialty, i) => (
                        <li key={i} className="flex">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2" style={{ backgroundColor: teamMembers[modalMember].color }}></span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {teamMembers[modalMember].contact && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#647C9F] mb-3">Contact:</h4>
                    <div className="text-[#647C9F]/70 space-y-2">
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        <span>{teamMembers[modalMember].contact.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        <span>{teamMembers[modalMember].contact.email}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-[#647C9F]/20">
                  <h4 className="font-semibold text-[#647C9F] mb-4">About Me:</h4>
                  <p className="text-[#647C9F]/70 leading-relaxed">
                    {teamMembers[modalMember].detailedBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#97CEC8]/10 to-[#FBD66E]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-spicy text-2xl md:text-4xl lg:text-5xl font-bold text-[#647C9F] mb-4 md:mb-6">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-[#647C9F]/70 max-w-3xl mx-auto">
              We believe in a holistic approach to education and mental health that focuses on the whole child.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: 'Individualized Support',
                description: 'We tailor our approach to each child\'s unique needs, strengths, and learning style, ensuring personalized growth and development.',
                color: '#97CEC8'
              },
              {
                title: 'Collaborative Care',
                description: 'We work closely with families, schools, and other professionals to create a consistent support system across all environments.',
                color: '#FBD66E'
              },
              {
                title: 'Evidence-Based Methods',
                description: 'We use research-backed approaches and continuously update our skills to provide the most effective support possible.',
                color: '#E77C96'
              }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="text-center px-4"
                variants={itemVariants}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center mb-4 md:mb-6"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: value.color }}
                  />
                </div>
                <h3 className="font-spicy text-xl md:text-2xl font-semibold text-[#647C9F] mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-[#647C9F]/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>
        {`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Team;