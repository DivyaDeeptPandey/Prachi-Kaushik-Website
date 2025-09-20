import React from 'react';
import { motion } from 'framer-motion';

const WatchTheJourney = () => {
  return (
      <section className="bg-secondary py-8 md:py-10 px-4 md:px-8 rounded-tl-[8rem] rounded-bl-[8rem] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div 
        className="h-1 bg-primary rounded-full mx-auto mb-2"
        style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
      ></div>
        {/* Header Section */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="satoshi-bold text-primary mb-2 satoshi-bold text-heading-md"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Witness the Journey
          
          </motion.h2>

          <motion.p
            className="satoshi-medium text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how one woman's vision is transforming millions of lives through empowerment and education.
          </motion.p>
        </motion.div>

        {/* Video Container - Direct Iframe */}
        <motion.div
          className="rounded-lg overflow-hidden mx-auto"
          style={{ maxWidth: '720px' }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SB_hbvyFWZs?rel=0"
              title="The journey of Prachi Kaushik"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WatchTheJourney;