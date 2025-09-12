import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = "", 
  titleClassName = "", 
  subtitleClassName = "", 
  lineClassName = "" 
}) => {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Line above heading */}
      <div
        className={`h-1 rounded-full mx-auto mb-5 bg-primary ${lineClassName}`}
        style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
      ></div>

      {/* Heading */}
      <motion.h2
        className={`satoshi-bold text-3xl md:text-4xl mb-4 text-heading-md text-primary ${titleClassName}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className={`satoshi-regular text-lg max-w-2xl mx-auto ${subtitleClassName}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
