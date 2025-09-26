import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import CommunityDevelopmentImage from '../../../assets/initiatives/FB_IMG_1535990631609.jpg';

const CommunityDevelopment = ({ sectionRef }) => {
  return (
    <section
      id="community-development"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-60 bg-secondary rounded-tr-[8rem] rounded-bl-[8rem]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Community Development"
          subtitle="Health camps, education, and holistic community support"
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
                Through Vyomini Suvidha Kendra, we bridge the gap between marginalized communities and essential government welfare schemes. Thousands of families have gained access to documentation, pensions, and healthcare services.
              </p>
              <p>
                We also organize regular health camps, each serving 400–500 women, with some reaching up to 1,000 participants. Over the last decade, we have conducted more than 400 health camps, providing critical healthcare to underserved communities.
              </p>
              <div>
                <p className="font-medium mb-2">Special Projects:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Water Crisis Intervention in Mathura</li>
                  <li>Prisoner Reform Programs for rehabilitation</li>
                  <li>Youth Skill Development in Bahraich</li>
                  <li>Anganwadi Worker Training across Haryana</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={CommunityDevelopmentImage}
              alt="Community health camp"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityDevelopment;