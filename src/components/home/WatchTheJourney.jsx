import React from 'react';
import { motion } from 'framer-motion';

const WatchTheJourney = () => {
  return (
    <section className="bg-secondary py-6 md:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        
        {/* Section Header with Decorative Elements */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Decorative Line */}
          <div 
            className="h-1 bg-primary rounded-full mx-auto mb-6"
            style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
          ></div>
          
          {/* Heading */}
          <motion.h2
            className="satoshi-bold text-primary mb-6 drop-shadow-sm"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            Watch the Journey
          </motion.h2>

          {/* Description */}
          <motion.p
            className="satoshi-regular mx-auto text-gray-600"
            style={{ 
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              maxWidth: 'clamp(18rem, 80vw, 36rem)'
            }}
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
          className="relative mx-auto rounded-xl overflow-hidden customShadow"
          style={{
            maxWidth: 'clamp(18rem, 90vw, 50rem)',
            width: '100%'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Video Player */}
          <div className="aspect-video bg-gray-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SB_hbvyFWZs?rel=0"
              loading='lazy'
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WatchTheJourney;