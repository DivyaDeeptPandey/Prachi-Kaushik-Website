import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const VyominiModel = ({ sectionRef }) => {
  return (
    <section
      id="vyomini-model"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="The Vyomini Model"
          subtitle="Sustainability through enterprise and community empowerment"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="satoshi-bold text-2xl text-primary mb-6">Our Philosophy</h3>
            <div className="prose prose-lg max-w-none satoshi-regular text-gray-700 space-y-6">
              <p>
                Unlike conventional NGOs that rely heavily on grants, Vyomini was founded on the principle of sustainability through enterprise. We focus on creating products, promoting grassroots entrepreneurship, and fostering a circular economy, enabling communities to earn, grow, and thrive through their own efforts.
              </p>
              <p className="satoshi-medium italic border-l-4 border-primary pl-4 py-2">
                "We don't give fish, we teach fishing - and then we help build the fishing industry."
              </p>
              <p>
                Our model ensures that every initiative is self-sustaining, scalable, and community-owned, creating long-term impact that continues to grow even after our direct involvement.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-primary/10 p-8 rounded-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="satoshi-bold text-xl text-primary mb-6">Our Approach</h4>
            <div className="space-y-4">
              {[
                { title: 'Awareness', desc: 'Educating communities about their rights, health, and opportunities.' },
                { title: 'Accessibility', desc: 'Ensuring resources, products, and opportunities reach everyone' },
                { title: 'Affordability', desc: 'Designing solutions that are economically viable for all.' },
                { title: 'Sustainability', desc: 'Building programs that continue independently without external dependency' }
              ].map((item, index) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="satoshi-bold text-white text-sm text-secondary">{index + 1}</span>
                  </div>
                  <div>
                    <h5 className="satoshi-medium text-primary">{item.title}</h5>
                    <p className="satoshi-regular text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VyominiModel;