import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import MenstrualHealthImage from '../../../assets/initiatives/scroll-pic6.jpg';

const MenstrualHealth = ({ sectionRef }) => {
  return (
    <section
      id="menstrual-health"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tr-[8rem] rounded-bl-[8rem]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Menstrual Health & Hygiene"
          subtitle="Breaking taboos through the 3A approach: Awareness, Accessibility, Affordability"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none satoshi-regular text-gray-700 space-y-6">
              <p>
                Our Menstrual Health Management program started in Jhajjar District of Haryana and Delhi slums with a comprehensive 
                360-degree approach. We've reached over 25 lakhs women across 15+ states in India.
              </p>
              <p>
                The program includes awareness sessions in local languages, breaking cultural taboos, and providing comprehensive 
                knowledge about menstrual hygiene, reproductive health, and family planning.
              </p>
              <p className="satoshi-medium">
                We've conducted over 15,000 menstrual health awareness workshops in rural and urban communities, transforming 
                the way women perceive and manage their health.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img
                src={MenstrualHealthImage}
                alt="Menstrual health awareness workshop"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h4 className="satoshi-bold text-lg text-primary mb-2">Rakshak Sanitary Napkins</h4>
              <p className="satoshi-regular text-gray-600 text-sm">
                Our biodegradable, low-cost sanitary napkins made by women, for women. Costing just ₹1.5-2 per piece, 
                they're affordable and eco-friendly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenstrualHealth;