import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, BookOpen, ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WomenEmpowerment = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "Comprehensive programs that empower women with knowledge about health, rights, and opportunities.",
      programs: ["Menstrual health education", "Reproductive health awareness", "Legal rights education", "Digital literacy"]
    },
    {
      icon: Target,
      title: "Economic Empowerment",
      description: "Initiatives that create sustainable livelihoods and financial independence for women.",
      programs: ["Entrepreneurship training", "Skill development", "Micro-enterprise support", "Market access creation"]
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Programs that build confidence, leadership skills, and community influence among women.",
      programs: ["Leadership training", "Community organizing", "Public speaking", "Advocacy skills"]
    }
  ];

  const initiatives = [
    {
      title: "Menstrual Health Management",
      impact: "2.5M+ women educated",
      description: "360-degree approach with 3As: Awareness, Accessibility, and Affordability of menstrual hygiene products",
      locations: ["Jhajjar District, Haryana", "Delhi Slums", "15+ states across India"]
    },
    {
      title: "Entrepreneurship Development",
      impact: "10,000+ women entrepreneurs created",
      description: "End-to-end support from training to market access and financing for women-led businesses",
      locations: ["10 manufacturing units", "Multiple states", "Online marketplaces"]
    },
    {
      title: "Health Access & Camps",
      impact: "5,000+ women treated",
      description: "Regular health camps and medical services focusing on women's health issues",
      locations: ["Rural communities", "Urban slums", "Educational institutions"]
    }
  ];

  const impactStats = [
    { number: "80%", label: "of trained women set up manufacturing units" },
    { number: "2M+", label: "women gained access to sanitary products" },
    { number: "400+", label: "health camps organized" },
    { number: "15K+", label: "menstrual health workshops conducted" }
  ];

  return (
    <div className="min-h-screen bg-secondary pt-20">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary drop-shadow-md mb-6">
              Women Empowerment
            </h1>
            <p className="satoshi-medium text-xl md:text-2xl text-gray-700 mb-8">
              Creating opportunities for women to lead, thrive, and transform communities
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Our Mission
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  We believe that empowered women transform communities. Our comprehensive approach 
                  addresses the multifaceted challenges women face—from health and education to economic 
                  independence and leadership development.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Holistic Approach
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  Our programs are designed to create lasting change by addressing root causes rather 
                  than symptoms. We work across multiple dimensions of empowerment to create 
                  sustainable transformation in women's lives and their communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-primary/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <Heart className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 customShadow">
                  <p className="satoshi-medium text-primary text-center">
                    "When you empower a woman, you empower an entire community and transform generations."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars of Empowerment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Pillars of Empowerment
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Comprehensive approach to women's empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="satoshi-bold text-xl text-gray-900 mb-3">{pillar.title}</h3>
                <p className="satoshi-regular text-gray-700 mb-4">{pillar.description}</p>
                
                <div className="mt-4">
                  <h4 className="satoshi-medium text-gray-900 mb-2">Key Programs:</h4>
                  <ul className="space-y-1">
                    {pillar.programs.map((program, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="satoshi-regular text-gray-700 text-sm">{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Key Initiatives
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Transformative programs creating measurable impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="satoshi-bold text-xl text-primary mb-2">{initiative.title}</h3>
                <p className="satoshi-bold text-gray-900 mb-3">{initiative.impact}</p>
                <p className="satoshi-regular text-gray-700 mb-4">{initiative.description}</p>
                
                <div className="mt-4">
                  <h4 className="satoshi-medium text-gray-900 mb-2">Locations:</h4>
                  <ul className="space-y-1">
                    {initiative.locations.map((location, i) => (
                      <li key={i} className="flex items-start">
                        <MapPin className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="satoshi-regular text-gray-700 text-sm">{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Measurable Impact
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Quantifying the transformation in women's lives
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <p className="satoshi-bold text-3xl text-primary">{stat.number}</p>
                <p className="satoshi-regular text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Transformation Stories
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Real women, real change, real impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="satoshi-bold text-xl text-gray-900">From Trainee to Entrepreneur</h3>
                  <p className="satoshi-regular text-primary">Manufacturing Unit Owner</p>
                </div>
              </div>
              <p className="satoshi-regular text-gray-700">
                "The training program changed my life. I went from being dependent on my family to owning 
                a manufacturing unit that employs 8 other women. Now I can support my children's education 
                and have respect in my community."
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="satoshi-bold text-xl text-gray-900">Health Advocate</h3>
                  <p className="satoshi-regular text-primary">Community Health Worker</p>
                </div>
              </div>
              <p className="satoshi-regular text-gray-700">
                "I used to hide during my periods because of shame and stigma. After attending the menstrual 
                health workshop, I not only gained confidence but became a trainer myself. Now I've educated 
                over 500 women in my district about menstrual hygiene."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-secondary mb-6">
              Empower Women, Transform Communities
            </h2>
            <p className="satoshi-regular text-secondary text-xl mb-8">
              Join us in creating a world where every woman has the opportunity to thrive, lead, and make a difference.
            </p>
            <motion.button
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Support Women's Empowerment
            </motion.button>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

// MapPin component since it was used in the code
const MapPin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default WomenEmpowerment;