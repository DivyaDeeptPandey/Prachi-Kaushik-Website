import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Home, Shield, BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CommunityDevelopment = () => {
  const programs = [
    {
      icon: Home,
      title: "Vyomini Suvidha Kendra",
      description: "Facilitation centers that bridge the gap between marginalized communities and essential government welfare schemes.",
      impact: "Helping thousands access entitlements, documentation, and social security programs"
    },
    {
      icon: Heart,
      title: "Health Camps & Medical Services",
      description: "Regular health camps and monthly medical consultations in collaboration with gynecologists and healthcare professionals.",
      impact: "Over 400 health camps conducted, serving 400-500 women per camp (sometimes up to 1,000)"
    },
    {
      icon: Shield,
      title: "Counseling Services",
      description: "Comprehensive support including legal consultation, family counseling, and career guidance tailored to community needs.",
      impact: "Providing compassionate and practical support for various challenges faced by community members"
    }
  ];

  const initiatives = [
    {
      title: "Bahraich Skill Development",
      location: "Aspirational District Bahraich",
      description: "Skill & Entrepreneurship Development centre supporting young girls with employment training programs",
      focus: ["Cybercrime awareness", "Digital literacy", "Personality development", "Reproductive health awareness", "Communication skills", "Legal counseling"]
    },
    {
      title: "Urban Slum Development",
      location: "Delhi Slum Areas",
      description: "Training programs offering slum residents opportunities to work and earn livelihood through decent jobs",
      focus: ["Hospitality staff training", "Domestic help training", "Postnatal care training", "General caretaker training"]
    },
    {
      title: "Prisoner Rehabilitation",
      location: "Tihar Jail, Bareilly Prisons",
      description: "Reformation programs for undertrial prisoners through counseling and entrepreneurship development",
      focus: ["Regular jail visits", "Counseling sessions", "Skill development", "Entrepreneurship training"]
    }
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
              Community Development
            </h1>
            <p className="satoshi-medium text-xl md:text-2xl text-gray-700 mb-8">
              Building stronger communities through comprehensive support systems
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
                  Holistic Community Support
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  Our community development initiatives focus on creating sustainable ecosystems of support that 
                  address multiple aspects of community well-being. From healthcare access to skill development 
                  and social security, we work to uplift entire communities through targeted interventions.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Grassroots Impact
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  By working directly with communities and understanding their unique challenges, we've developed 
                  programs that create real, measurable change. Our approach combines immediate support with 
                  long-term development strategies to ensure sustainable progress.
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
                  <Users className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 customShadow">
                  <p className="satoshi-medium text-primary text-center">
                    "We believe in empowering communities to become self-reliant and resilient."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
              Core Community Programs
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Comprehensive initiatives addressing diverse community needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="satoshi-bold text-xl text-gray-900 mb-3">{program.title}</h3>
                <p className="satoshi-regular text-gray-700 mb-4">{program.description}</p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="satoshi-medium text-primary text-sm">{program.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Initiatives */}
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
              Special Development Initiatives
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Targeted programs for vulnerable communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="satoshi-bold text-xl text-primary mb-2">{initiative.title}</h3>
                <p className="satoshi-medium text-gray-600 mb-3">{initiative.location}</p>
                <p className="satoshi-regular text-gray-700 mb-4">{initiative.description}</p>
                
                <div className="mt-4">
                  <h4 className="satoshi-medium text-gray-900 mb-2">Focus Areas:</h4>
                  <ul className="space-y-1">
                    {initiative.focus.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="satoshi-regular text-gray-700 text-sm">{item}</span>
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
              Community Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              className="bg-secondary rounded-2xl p-6 customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="satoshi-bold text-3xl text-primary">1,500+</p>
              <p className="satoshi-regular text-gray-700">Girls trained in Bahraich</p>
            </motion.div>
            
            <motion.div
              className="bg-secondary rounded-2xl p-6 customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="satoshi-bold text-3xl text-primary">100+</p>
              <p className="satoshi-regular text-gray-700">Individuals placed in hospitals as attendants</p>
            </motion.div>
            
            <motion.div
              className="bg-secondary rounded-2xl p-6 customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="satoshi-bold text-3xl text-primary">10,000+</p>
              <p className="satoshi-regular text-gray-700">Anganwadi workers trained as MH educators</p>
            </motion.div>
            
            <motion.div
              className="bg-secondary rounded-2xl p-6 customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="satoshi-bold text-3xl text-primary">1,500+</p>
              <p className="satoshi-regular text-gray-700">Sanitation workers capacity building</p>
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
              Support Community Development
            </h2>
            <p className="satoshi-regular text-secondary text-xl mb-8">
              Join us in creating sustainable change and empowerment at the grassroots level.
            </p>
            <motion.button
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default CommunityDevelopment;