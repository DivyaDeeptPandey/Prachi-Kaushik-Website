import React from 'react';
import { motion } from 'framer-motion';
import Vyomini from './vyomini';

const HerOrg = () => {
  return (
    <section className="bg-secondary py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Section Divider */}
      <div className="w-50 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
        {/* Heading */}
        <motion.h1
          className="satoshi-bold text-primary text-4xl md:text-5xl text-center mb-14 drop-shadow-sm"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Organization
        </motion.h1>

        {/* Description */}
        <motion.p
          className="satoshi-regular text-base md:text-lg lg:text-xl text-text leading-8 max-w-2xl"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="satoshi-bold block text-center text-primary text-xl md:text-2xl mb-2">
            VYOMINI SOCIAL FOUNDATION
          </span>
          was founded by Ms. Prachi Kaushik, a social activist, to provide
          solutions to social, economic, and environmental challenges.
        </motion.p>

        {/* Organization Content */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Vyomini />
        </motion.div>
      </div>
    </section>
  );
};

export default HerOrg;
