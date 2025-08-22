import React from 'react';
import { motion } from 'framer-motion';

const ScrollText = () => {
  return (
    <section className="bg-secondary py-16 px-4 md:px-10">
      {/* Heading */}
      <motion.h1
        className="satoshi-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Her Awards & Accolades
      </motion.h1>

      {/* Subheading paragraph */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="satoshi-medium text-text text-center text-base sm:text-lg leading-relaxed">
          Prachi Kaushik, the founder of Vyomini Social Foundation, has been
          recognized with numerous awards for her outstanding contributions to
          women's empowerment and social change. Her work has inspired many and
          continues to make a significant impact in the community.
        </p>
      </motion.div>
    </section>
  );
};

export default ScrollText;
