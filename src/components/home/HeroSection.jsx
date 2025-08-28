import React from 'react';
import { motion } from 'framer-motion';
import frontPic from '../../assets/solo-pic.png';

const HeroSection = () => {
  return (
    <section className="bg-secondary min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-13">
        
        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="satoshi-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            Empowering <br className="hidden sm:block" /> <span className="text-primary">Millions</span> of Women
          </motion.h1>

          <motion.h2
            className="satoshi-medium text-xl sm:text-xl md:text-xl lg:text-2xl text-gray-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            The Story of a Changemaker
          </motion.h2>

          <motion.p
            className="satoshi-regular text-base md:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
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
              className="bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-primary-dark flex-1 text-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>

            <motion.button
              className="border-2 border-primary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-primary hover:text-secondary flex-1 text-center"
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
              <p className="satoshi-bold text-3xl md:text-3xl">2.5M+</p>
              <p className="satoshi-regular text-gray-600 mt-1">Women Educated</p>
            </div>
            <div className="text-center md:text-left">
              <p className="satoshi-bold text-3xl md:text-3xl">10K+</p>
              <p className="satoshi-regular text-gray-600 mt-1">Entrepreneurs Created</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.div
            className="w-72 h-96 md:w-80 md:h-112 lg:w-96 lg:h-140 rounded-lg overflow-hidden shadow-xl"
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