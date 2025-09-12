import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import PartnerLogo1 from '../../../assets/logos/niti-aayog-logo.png';
import PartnerLogo2 from '../../../assets/logos/Ministry_of_Women_and_Child_Development.svg';
import PartnerLogo3 from '../../../assets/logos/NRLM_logo.png';
import PartnerLogo4 from '../../../assets/logos/SIDBI_LOGO.png';

const Partnerships = ({ sectionRef }) => {
  const partners = [
    { logo: PartnerLogo1, name: 'NITI Aayog', alt: 'NITI Aayog Logo' },
    { logo: PartnerLogo2, name: 'Women & Child Development', alt: 'WCD Logo' },
    { logo: PartnerLogo3, name: 'National Rural Livelihood Mission', alt: 'NRLM Logo' },
    { logo: PartnerLogo4, name: 'SIDBI', alt: 'SIDBI Logo' },
  ];

  return (
    <section
      id="partnerships"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Strategic Partnerships"
          subtitle="Collaborating with government, corporate, and NGO partners for greater impact"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="w-24 h-24 object-contain mx-auto"
              />
              <p className="satoshi-medium text-center text-sm mt-3 text-gray-700">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;