import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import frontPic from '../../assets/solo-pic.png';

const HeroSection = () => {
  const navigate = useNavigate();

  // Function to handle "Learn More" button click
  const handleLearnMoreClick = () => {
    navigate('/her-story');
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
    <div className="bg-white">
      <section className="bg-secondary min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-16 rounded-bl-[8rem] overflow-hidden">

      <div className="w-7xl rounded-bl-[3rem] flex flex-col-reverse md:flex-row items-center justify-center mt-12 mx-auto px-4 md:px-8 lg:px-10">

        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="satoshi-bold leading-tight mb-4 drop-shadow-md"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            <span className="block">
              Empowering <span className="text-primary">Women</span>
            </span>
            <span className="block">
           <span className="text-primary">Empowering</span> Communities 
            </span>
          </motion.h1>

          <motion.h2
            className="satoshi-medium text-gray-700 mb-4"
            style={{
              fontSize: 'clamp(1rem, 3vw, 2rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            The Story of a Changemaker
          </motion.h2>

          <motion.p
            className="satoshi-regular mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            Ms. Prachi Kaushik is a social entrepreneur dedicated to transforming women’s lives through menstrual health awareness, economic empowerment, and grassroots development. As the Founder of Vyomini social enterprise, she has educated over 3 million women and nurtured more than 10,000 women entrepreneurs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
          >
            <motion.button
              onClick={handleLearnMoreClick}
              className="bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg text-center w-50"
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
              className="border-2 border-primary text-primary satoshi-medium py-3 px-8 rounded-lg text-center w-50"
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
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
              width: 'clamp(18rem, 40vw, 32rem)',
              height: 'clamp(24rem, 60vw, 36rem)'
            }}
          
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
    </div>
  );
};

export default HeroSection;