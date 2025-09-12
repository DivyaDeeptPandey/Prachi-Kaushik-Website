import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './Sectionheader';
import ImpactStats from './ImpactStats';

const ImpactSection = ({ sectionRef }) => {
  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tr-[8rem] rounded-bl-[8rem]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Measurable Impact"
          subtitle="Transforming lives through data-driven results"
        />
        
        <ImpactStats />
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="satoshi-regular text-gray-600 mb-4">
            Journey towards empowering 5 million women by 2030
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 max-w-md mx-auto">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: '50%' }}
            ></div>
          </div>
          <p className="satoshi-medium text-primary text-sm">
            50% Progress • 2.5M of 5M Goal
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;