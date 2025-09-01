import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import frontPic from '../../assets/solo-pic.png';

const HeroSection = () => {
  const navigate = useNavigate();

  // Function to handle "Learn More" button click
  const handleLearnMoreClick = () => {
    navigate('/her-early-life');
  };

  // Function to handle "Contact" button click
  const handleContactClick = () => {
    // Scroll to the "Join Her Campaign" section
    const joinCampaignSection = document.getElementById('join-campaign');
    if (joinCampaignSection) {
      joinCampaignSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-secondary min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-13">
        
        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="satoshi-bold text-gray-900 leading-tight mb-4 drop-shadow-md"
            style={{ 
              fontSize: 'clamp(1.75rem, 5vw, 2.75rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            Empowering <br className="hidden sm:block" /> <span className="text-primary">Millions</span> of Women
          </motion.h1>

          <motion.h2
            className="satoshi-medium text-gray-700 mb-4"
            style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.75rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            The Story of a Changemaker
          </motion.h2>

          <motion.p
            className="satoshi-regular text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
            style={{ 
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            Ms. Prachi Kaushik is a social entrepreneur transforming women's lives through menstrual health awareness, economic empowerment, and grassroots development. Founder of Vyomini, she has educated over 2.5 million women and created 10,000+ women entrepreneurs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8 w-full max-w-md md:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
          >
            <motion.button
              onClick={handleLearnMoreClick}
              className="bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-primary-dark flex-1 text-center"
              style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>

            <motion.button
              onClick={handleContactClick}
              className="border-2 border-primary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-primary hover:text-secondary flex-1 text-center"
              style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 w-full max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="text-center md:text-left">
              <p 
                className="satoshi-bold text-gray-900"
                style={{ 
                  fontSize: 'clamp(1.5rem, 1.55vw, 2rem)'
                }}
              >
                2.5M+
              </p>
              <p 
                className="satoshi-regular text-gray-600 mt-1"
                style={{ 
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'
                }}
              >
                Women Educated
              </p>
            </div>
            <div className="text-center md:text-left">
              <p 
                className="satoshi-bold text-gray-900"
                style={{ 
                  fontSize: 'clamp(1.5rem, 1.55vw, 2rem)'
                }}
              >
                10K+
              </p>
              <p 
                className="satoshi-regular text-gray-600 mt-1"
                style={{ 
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)'
                }}
              >
                Entrepreneurs Created
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl"
            style={{
              width: 'clamp(18rem, 40vw, 24rem)',
              height: 'clamp(24rem, 60vw, 35rem)'
            }}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={frontPic}
              alt="Prachi Kaushik - Social Entrepreneur"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;