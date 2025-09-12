import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './Sectionheader';
import CommunityDevelopmentImage from '../../../assets/initiatives/scroll-pic6.jpg';

const CommunityDevelopment = ({ sectionRef }) => {
  return (
    <section
      id="community-development"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tr-[8rem] rounded-bl-[8rem]"
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
                Through Vyomini Suvidha Kendra, we bridge the gap between marginalized communities and essential 
                government welfare schemes. We've helped thousands access documentation, pensions, and healthcare services.
              </p>
              <p>
                Our health camps serve 400-500 women each, with some reaching up to 1,000 participants. Over 400 camps 
                conducted in the past 10 years provide critical healthcare access to underserved communities.
              </p>
              <p>
                Special projects include water crisis intervention in Mathura, prisoner reform programs, youth skill 
                development in Bahraich, and Anganwadi worker training across Haryana.
              </p>
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