import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import EconomicEmpowermentImage from '../../../assets/initiatives/scroll-pic6.jpg';

const EconomicEmpowerment = ({ sectionRef }) => {
  return (
    <section
      id="economic-empowerment"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Economic Empowerment"
          subtitle="Creating entrepreneurs and sustainable livelihoods"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={EconomicEmpowermentImage}
              alt="Women entrepreneurship training"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none satoshi-regular text-gray-700 space-y-6">
              <p>
                We've trained over 10,000 women and created 5,500+ successful entrepreneurs through our incubation centers 
                and training programs. Our approach focuses on practical, market-ready skills that generate immediate income.
              </p>
              <p>
                Programs include sanitary napkin manufacturing, designer jute products, cloth bags, paper recycling, 
                digital marketing, and handicraft training. Each venture typically breaks even within 3-4 months.
              </p>
              <div className="bg-primary/5 p-6 rounded-xl">
                <h4 className="satoshi-bold text-primary mb-2">Vyomini Udhvami Consortium</h4>
                <p className="text-sm">
                  End-to-end support from training and skill-building to facilitating loans through CSR funding. 
                  We ensure quality through product testing and continuous mentorship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EconomicEmpowerment;