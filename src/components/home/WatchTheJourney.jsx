import React from 'react';
import { motion } from 'framer-motion';

const WatchTheJourney = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="w-50 h-1 bg-primary rounded-full mx-auto mt-3 mb-8"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-10">
        
        {/* Heading */}
        <motion.h2
          className="satoshi-bold text-heading-lg drop-shadow-md text-primary text-center mb-5 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Watch the Journey
        </motion.h2>

        {/* Description */}
        <motion.p
          className="satoshi-medium text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-5 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          Dive into the inspiring journey of Ms. Prachi Kaushik as she empowers communities, 
          transforms lives, and champions education, dignity, and self-reliance for millions.
        </motion.p>

        {/* Video */}
        <motion.div
          className="w-full aspect-video max-w-3xl mx-auto customShadow rounded-sm overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Yk8eHs3U8e4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default WatchTheJourney;
