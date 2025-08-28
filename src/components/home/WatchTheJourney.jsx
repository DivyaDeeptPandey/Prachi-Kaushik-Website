import React from 'react';
import { motion } from 'framer-motion';

const WatchTheJourney = () => {
  return (
    <section className="bg-secondary min-h-screen py-16 md:py-20 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        
        {/* Section Header with Decorative Elements */}
        <motion.div 
          className="text-center mb-12 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Decorative Line */}
          <div className="w-50 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          
          {/* Heading */}
          <motion.h2
            className="satoshi-bold text-3xl sm:text-4xl md:text-5xl text-primary mb-6 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            Watch the Journey
          </motion.h2>

          {/* Description */}
          <motion.p
            className="w-230 satoshi-regular mx-auto text-base md:text-base lg:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            viewport={{ once: true }}
          >
            Dive into the inspiring journey of Ms. Prachi Kaushik as she empowers communities, 
            transforms lives, and champions education, dignity, and self-reliance for millions.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="relative w-full max-w-[50rem] mx-auto rounded-xl overflow-hidden customShadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Video Player */}
          <div className="aspect-video bg-gray-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Yk8eHs3U8e4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
          viewport={{ once: true }}
        >
          <button className="bg-primary hover:bg-primary-dark text-white satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 text-secondary">
            Explore Full Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WatchTheJourney;