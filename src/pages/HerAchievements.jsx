import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import img2 from '../assets/awards/WhatsApp Image 2025-09-20 at 13.14.25_494977aa.jpg';
import womenOfSubstance from '../assets/awards/women-of-substance-award.jpg';
import img4 from '../assets/awards/DSC_4284.JPG';
import aabhyaBraveryAward from '../assets/awards/aabhya-bravery-award.png';
import img6 from '../assets/awards/498240778_2553430855004247_7248568481183000218_n.jpg';
import womennovatorAward from '../assets/awards/32207690_620188498328502_1393491539207913472_n.jpg';
import womenSocialEntrepreneurBW from '../assets/awards/women_social_enterprenour_oftheYear.jpg';
import socialWomenEnterpreneur from '../assets/awards/social-women-of -the-year-award.jpg';
import womenLeaderAward from '../assets/awards/women-leader-award.jpg';
import womenExcellenceAwardWIEF from '../assets/awards/women-excellence-and-leadership-award.JPG';
import womenSocialEntrepreneurHerZindagi from '../assets/awards/women-social-enterprenour-award.jpg';
import nitiAyogAward from '../assets/awards/niti-ayog-award.jpg';
import tedTalk from '../assets/awards/ted-talk.jpg';
import womenExcellenceAwardIndoEuropean from '../assets/awards/women-excellence-award-indo-euro.jpg';
import bestSocialEnterpriseAward from '../assets/awards/best-social-enterprise-award.jpg';

const Awards = () => {
  const location = useLocation();
  const awardsData = [
    {
      id: "abhaya-award",
      title: "Abhaya Bravery Award",
      organization: "Team Abhaya",
      year: "2025",
      description: "Celebrating acts of extraordinary courage and resilience, and marking the launch of the Rape-Free India campaign.",
      image: aabhyaBraveryAward,
      category: "National",
      link: "https://newskarnataka.com/karnataka/bengaluru/abhaya-bravery-awards-2025-honours-courageous-individuals-and-promotes-a-rape-free-india-movement/08032025/"
    },
    {
      id: 'rex-karamveer-award',
      title: "Rex Karamveer Global Fellowship & Chakra Award",
      organization: "International Confederation of NGOs with UN",
      year: "2024-25",
      description: "This global recognition was awarded for exceptional social entrepreneurship and unwavering commitment to women's empowerment. The award honours Prachi's groundbreaking work in breaking taboos around menstruation.",
      image: img2,
      category: "International",
      link: "https://startupsuccessstories.in/vyomini-founder-prachi-kaushik-honored-with-rex-karmaveer-global-fellowship-for-grassroots-impact/"
    },
    {
      id: "mahila-award",
      title: "Mahila Shiromani Samman",
      organization: "Voluntary Health Association of Delhi",
      year: "2024",
      description: "Recognized for exceptional contributions to women's empowerment and social entrepreneurship.",
      image: img6,
      category: "National",
      link: "https://drugtodayonline.com/medical-news/news-topic/20490-vyomini-social-enter#google_vignette"
    },
    {
      id: "WEISA-award",
      title: "Women BW Disrupt WEISA Social Enterpreneur of the Year",
      organization: "BW Business World",
      year: "2024",
      description: "Prachi Kaushik was honoured as one of 75 extraordinary women from across India driving transformative change in their communities. Selected from thousands of nominations nationwide, this prestigious award recognizes her innovative approach of combining sustainable business models with deep social impact.",
      image: womenSocialEntrepreneurBW,
      category: "National",
      link: "https://startupsuccessstories.in/prachi-kaushik-receives-social-women-entrepreneur-award-for-empowering-women-in-menstrual-hygiene-management/"
    },
    {
      id: "women-social-entrepreneur-award",
      title: "Women Social Enterpreneur of the Year",
      organization: "Her Zindagi",
      year: "2024",
      description: "She was honoured for creating employment opportunities and entrepreneurship among underprivileged community for the year 2024 by Jagran Media Her Zindagi.",
      image: womenSocialEntrepreneurHerZindagi,
      category: "National"
    },
    {
      id: "phenomenal-she-award",
      title: "Phenomenoal She",
      organization: "Indian National Bar Association",
      year: "2023",
      description: "Recognised as Phenomenal She by Legal association for her work on women empowerment",
      image: img4,
      category: "National"
    },
    {
      id: "women-leader-award",
      title: "Women Leader Award",
      organization: "Lead India, LIMCA book of records",
      year: "2022",
      description: "Prachi Kaushik was honoured by LIMCA book of records London among 100 power women by LEAD India Karnataka for her work on enterpreneurship development and economic empowerment. ",
      image: womenLeaderAward,
      category: "National"
    },
    {
      id: "NITI-ayog-award",
      title: "Women Transforming India Award",
      organization: "NITI Aayog",
      year: "2021",
      description: "An initiative by NITI Aayog to recognize and celebrate the achievements of India's leading women change-makers and entrepreneurs. This awards focus on women who have demonstrated exceptional leadership and made a positive impact in various sectors, often breaking stereotypes and challenging norms",
      image: nitiAyogAward,
      category: "National",
      link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1808751&s=09"
    },
    {
      id: "best-social-enterprise-award",
      title: "Best Social Enterprise Award",
      organization: "Exhibition Council ",
      year: "2020",
      description: "Exhibition Council recognized Vyomini as best Social Enterprise in the leadership of Ms Prachi for sustainable manufacturing and ethical business practices.",
      image: bestSocialEnterpriseAward,
      category: "National"
    },
    {
      id: "leadership-award",
      title: "Women of Excellence and Leadership Award",
      organization: "Women Innovation and Enterprenurship Foundation",
      year: "2019",
      description: "The awards focused on honoring Women Entrepreneurs all across India who have set a standard in a male Dominating Industry.",
      image: womenExcellenceAwardWIEF,
      category: "National"
    },
    {
      id: "brics-award",
      title: "Women of Substance Award",
      organization: "BRICS Chamber of Commerce",
      year: "2019",
      description: "Awarded for outstanding contributions to women's economic empowerment and innovative social entrepreneurship within the BRICS nations framework.",
      image: womenOfSubstance,
      category: "International"
    },
    {
      id: "social-women-award-2018",
      title: "Social Women of The Year",
      organization: "Recent Advanced in Science Engineering and Management ",
      year: "2018",
      description: "Recognizing outstanding leadership in social entrepreneurship and community development.",
      image: socialWomenEnterpreneur,
      category: "National"
    },
    {
      id: "women-excellence-award",
      title: "Women of Excellence Award",
      organization: "Indo European Chamber of Small and Medium Enterprise",
      year: "2018",
      description: "Honored for her leadership and women empowerment initiatives.",
      image: womenExcellenceAwardIndoEuropean,
      category: "National"
    },
    {
      id: "women-innovator-award",
      title: "Womennovator Award",
      organization: "Womennovator",
      year: "2018",
      description: "Awarded for innovative approaches to solving social challenges through entrepreneurship.",
      image: womennovatorAward,
      category: "National"
    },
    {
      id: "tedx-speaker",
      title: "TedX Speaker",
      organization: "TedX",
      year: "2018",
      description: "Ms Prachi deliverd her Ted talk on 'Period Poverty' and 'Menstrual Hygiene Management' status at global level",
      image: tedTalk,
      category: "National",
      link: "https://www.youtube.com/watch?v=XlAE822D0Pk"
    },
  ];

  // Create refs for each award section
  const awardRefs = useRef({});

  // Handle hash-based scrolling
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && awardRefs.current[hash]) {
      setTimeout(() => {
        awardRefs.current[hash]?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location.hash]);

  // Function to handle external link click
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
              Awards & Recognitions
            </h1>
            <p className="satoshi-medium text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Celebrating national and international recognition for transformative work in women's empowerment and social entrepreneurship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          {/* All Awards Grid */}
          <div>
            <motion.h2 
              className="satoshi-bold text-3xl md:text-4xl text-primary mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Awards & Recognitions
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {awardsData.map((award, index) => (
                <motion.div
                  key={award.id}
                  ref={(el) => (awardRefs.current[award.id] = el)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -10 }}
                  onClick={() => award.link && handleExternalLink(award.link)}
                >
                  {/* Image Container with Aspect Ratio Handling */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-4 right-4">
                      <span className="satoshi-bold text-xs bg-primary text-secondary px-3 py-1 rounded-full">
                        {award.category}
                      </span>
                    </div>

                    {/* External Link Indicator */}
                    {award.link && (
                      <div className="absolute top-4 left-4">
                        <span className="satoshi-bold text-xs bg-white text-primary px-3 py-1 rounded-full flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {award.id === "tedx-speaker" ? "Watch Video" : "Read More"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="satoshi-medium text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                      <span className="satoshi-regular text-gray-500 text-sm">
                        {award.organization}
                      </span>
                    </div>
                    
                    <h3 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4 leading-tight group-hover:text-primary/80 transition-colors">
                      {award.title}
                      {award.link && (
                        <svg className="w-4 h-4 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </h3>
                    
                    <p className="satoshi-regular text-gray-700 text-base md:text-lg leading-relaxed">
                      {award.description}
                    </p>

                    {/* Link Button for awards with links */}
                    {award.link && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button 
                          className="satoshi-medium text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExternalLink(award.link);
                          }}
                        >
                          {award.id === "tedx-speaker" ? "Watch TedX Talk on YouTube" : "Read more about this award"}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
                className="bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Partner With Us
              </motion.button>
              
              <Link to="/initiatives">
                <motion.button
                  className="border-2 border-primary text-primary satoshi-medium py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors duration-300 text-lg"
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