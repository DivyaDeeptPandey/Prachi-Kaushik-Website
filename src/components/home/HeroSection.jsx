import React from 'react';
import { motion } from 'framer-motion';
import frontPic from '../../assets/solo-pic.png';

const HeroSection = () => {
  return (
    <section className="bg-secondary pt-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-10 py-12 gap-x-12">
        
        {/* Left: Heading with fade + slide-in */}
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="satoshi-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-tight drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Empowering Millions
          </motion.h1>

          <motion.h2
            className="satoshi-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-text mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            The Story of a Changemaker
          </motion.h2>

          <motion.p
            className="satoshi-medium md:text-xl text-text mt-6 mr-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            Ms. Prachi Kaushik is a fearless changemaker empowering millions of women in India through education, dignity, and self-reliance. Fighting for menstrual health, entrepreneurship, and sanitation, she has transformed lives in slums and rural areas, guiding thousands from silence to strength through grassroots action and modern innovation.
          </motion.p>
        </motion.div>

        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.img
            src={frontPic}
            alt="Prachi Kaushik"
            className="w-80 h-100 md:w-110 md:h-150 rounded-sm customShadow object-cover mx-auto"
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div> 

      </div>
    </section>
  );
};

export default HeroSection;
