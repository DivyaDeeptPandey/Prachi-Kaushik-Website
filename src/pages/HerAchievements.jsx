import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import img1 from '../assets/awards/scroll-pic1.jpg';
import img2 from '../assets/awards/scroll-pic1.jpg';
import img3 from '../assets/awards/scroll-pic1.jpg';
import img4 from '../assets/awards/scroll-pic1.jpg';
import img5 from '../assets/awards/scroll-pic1.jpg';
import img6 from '../assets/awards/scroll-pic1.jpg';

const Awards = () => {
  const location = useLocation();
  const awardsData = [
    {
      id: "NITI-ayog-award",
      title: "Women Transforming India Award",
      organization: "NITI Aayog",
      year: "2023",
      description: "Prachi Kaushik was honored as one of 75 extraordinary women from across India who are driving transformative change in their communities. This prestigious award recognizes her outstanding contributions to social change and women's empowerment through Vyomini Social Enterprise. The selection was made from thousands of nominations nationwide, highlighting her innovative approach to combining sustainable business models with profound social impact. The award ceremony was attended by government officials, industry leaders, and social change makers, celebrating her work in menstrual health awareness, economic empowerment, and grassroots development.",
      image: img1,
      link: "#",
      category: "National"
    },
    {
      id: 'rex-karamveer-award',
      title: "Rex Karamveer Global Fellowship & Chakra Award",
      organization: "International Confederation of NGOs with United Nations",
      year: "2023",
      description: "This international recognition was awarded for exceptional social entrepreneurship and unwavering commitment to women's empowerment. The Rex Karamveer Award acknowledges Prachi's groundbreaking work in menstrual health and economic independence, particularly her innovative approach to breaking taboos around menstruation while creating sustainable livelihood opportunities. The award celebrates her vision of transforming rural women from beneficiaries to entrepreneurs, creating a ripple effect of empowerment across communities. The global fellowship provides a platform to share her model with international development organizations and scale impact across borders.",
      image: img2,
      link: "#",
      category: "International"
    },
    {
      id: "brics-award",
      title: "BRICS Chamber of Commerce Award",
      organization: "BRICS CCI",
      year: "2023",
      description: "Awarded for exceptional contributions to women's economic empowerment and innovative approaches to social entrepreneurship within the BRICS nations framework. This international recognition highlights the potential for replicating Vyomini's model across developing economies. The award committee praised the sustainable nature of the enterprise and its alignment with the UN Sustainable Development Goals. The recognition comes with opportunities for cross-border collaborations and knowledge exchange with social entrepreneurs from Brazil, Russia, India, China, and South Africa, creating pathways for global impact.",
      image: img4,
      link: "#",
      category: "International"
    },
    {
      id: "bw-award",
      title: "BW Businessworld Women Social Entrepreneur of the Year",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship and transformative work in creating women entrepreneurs across rural India. This award celebrates Prachi's ability to bridge the gap between social impact and business sustainability. The selection committee highlighted her innovative training programs, market linkage initiatives, and the creation of a supportive ecosystem for women entrepreneurs. The award also acknowledges her role in mentoring the next generation of social entrepreneurs and her contributions to policy discussions around women's economic empowerment at national forums.",
      image: img3,
      link: "#",
      category: "National"
    }
  ];

  // Create refs for each award section
  const awardRefs = useRef({});

  // Handle hash-based scrolling
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && awardRefs.current[hash]) {
      // Wait for the page to load and then scroll to the element
      setTimeout(() => {
        awardRefs.current[hash]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white rounded-bl-[8rem] pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="h-1 bg-primary rounded-full mx-auto mb-6" style={{ width: '6rem' }}></div>
            <h1 className="satoshi-bold text-4xl md:text-5xl text-primary mb-6">
              Awards & Recognitions
            </h1>
            <p className="satoshi-medium text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Celebrating the national and international recognition for transformative work in women's empowerment and social entrepreneurship
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Awards - Large Card Format with Bigger Photos */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                ref={(el) => (awardRefs.current[award.id] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-20"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section - Larger */}
                  <div className="lg:w-2/5">
                    <div className="h-80 lg:h-full">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="satoshi-medium text-primary text-sm bg-primary/10 px-4 py-2 rounded-full">
                        {award.category}
                      </span>
                      <span className="satoshi-medium text-gray-600 text-sm">
                        {award.year}
                      </span>
                    </div>
                    
                    <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-6">
                      {award.title}
                    </h2>
                    
                    <p className="satoshi-medium text-lg text-gray-700 mb-8">
                      by {award.organization}
                    </p>
                    
                    {/* Longer Description */}
                    <p className="satoshi-regular text-gray-600 leading-relaxed text-lg mb-8">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-12">
              Impact Behind the Awards
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "6", label: "National Awards" },
                { number: "2", label: "International Honors" },
                { number: "25+", label: "Media Features" },
                { number: "50+", label: "Speaking Engagements" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="satoshi-bold text-4xl md:text-5xl text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="satoshi-regular text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary rounded-tr-[8rem] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-6">
              Join the Movement
            </h2>
            <p className="satoshi-medium text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Be part of the transformation that's empowering women and communities across India
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
              </motion.button>
              
              <Link to="/initiatives">
                <motion.button
                  className="border-2 border-primary text-primary satoshi-medium py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Initiatives
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Awards;