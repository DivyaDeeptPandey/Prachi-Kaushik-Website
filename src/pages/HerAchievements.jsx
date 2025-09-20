import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import img1 from '../assets/awards/scroll-pic1.jpg';
import img2 from '../assets/awards/scroll-pic1.jpg';
import img3 from '../assets/awards/53323356_822993318048018_8773743481278431232_n.jpg';
import img4 from '../assets/awards/scroll-pic1.jpg';
import img5 from '../assets/awards/WhatsApp Image 2025-09-20 at 13.32.29_9e3a9faf.jpg';
import img6 from '../assets/awards/498240778_2553430855004247_7248568481183000218_n.jpg';

const Awards = () => {
  const location = useLocation();
  const awardsData = [
    {
      id: "NITI-ayog-award",
      title: "Women Transforming India Award",
      organization: "NITI Aayog",
      year: "2023",
      description: "Prachi Kaushik was honoured as one of 75 extraordinary women from across India driving transformative change in their communities. Selected from thousands of nominations nationwide, this prestigious award recognizes her innovative approach of combining sustainable business models with deep social impact. The award celebrated her pioneering work in menstrual health awareness, economic empowerment, and grassroots development, positioning her as a changemaker in the field of women’s empowerment.",
      image: img1,
      link: "#",
      category: "National"
    },
    {
      id: 'rex-karamveer-award',
      title: "Rex Karamveer Global Fellowship & Chakra Award",
      organization: "International Confederation of NGOs with United Nations",
      year: "2023",
      description: "This global recognition was awarded for exceptional social entrepreneurship and an unwavering commitment to women’s empowerment. The award honours Prachi’s groundbreaking work in breaking taboos around menstruation while creating sustainable livelihood opportunities for women. It also acknowledges her vision of transforming rural women from beneficiaries into entrepreneurs, sparking a ripple effect of empowerment across communities. The fellowship provides her with a platform to share Vyomini’s model with international development organizations and expand its impact across borders.",
      image: img2,
      link: "#",
      category: "International"
    },
    {
      id: "brics-award",
      title: "Women of Substance",
      organization: "BRICS Chamber of Commerce",
      year: "2023",
      description: "Awarded for outstanding contributions to women’s economic empowerment and innovative social entrepreneurship within the BRICS nations framework. The recognition highlights the potential to replicate Vyomini’s model across developing economies and aligns with the UN Sustainable Development Goals (SDGs). The award committee praised Vyomini’s sustainable approach and its global relevance. This honour also opens opportunities for cross-border collaborations and knowledge exchange with social entrepreneurs from Brazil, Russia, India, China, and South Africa — paving the way for global impact.",
      image: img3,
      link: "#",
      category: "International"
    },
    {
      id: "bw-award",
      title: "BW Businessworld Women Social Entrepreneur of the Year",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Abhaya Bravery Award",
      organization: "Businessworld",
      year: "2025",
      description: "The Abhaya Bravery Award Ceremony 2025 was held on 7th March at the Alliance Française de Bangalore, celebrating acts of extraordinary courage and resilience. The event also marked the launch of a significant movement aimed at creating a safer, more equitable society — the Rape-Free India campaign by Team Abhaya.",
      image: img5,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Mahila Shiromani Samman",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img6,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Women Social Enterprenour of The Year",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Phenomenal She",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Women Leader Award",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Best Social Enterprise",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Women Excellence and Leadership Award",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },  
    {
      id: "bw-award",
      title: "Social Women of The Year",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Women Excellence Award",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "Womenennovator",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },
    {
      id: "bw-award",
      title: "TedX Speaker",
      organization: "Businessworld",
      year: "2024",
      description: "Recognized for outstanding leadership in social entrepreneurship, Prachi was celebrated for her transformative work in creating women entrepreneurs across rural India. The award commended her innovative training programs, market-linkage initiatives, and the creation of a supportive ecosystem for women-led enterprises. It also highlighted her role in mentoring emerging social entrepreneurs and contributing to policy discussions on women’s economic empowerment at national forums.",
      image: img4,
      link: "#",
      category: "National"
    },

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