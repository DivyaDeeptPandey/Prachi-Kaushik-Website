import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

import niesbudLogo from '../../../assets/responsibilities/niesbud-logo.png';
import sundeshLogo from '../../../assets/responsibilities/logo.jpg';
import legalAidLogo from '../../../assets/responsibilities/West.png';


const KeyResponsibilities = ({ sectionRef }) => {
  const responsibilities = [
    {
      title: "Registered Mentor at NIESBUD, NOIDA",
      description: "Supporting budding entrepreneurs through guidance and mentorship programs",
      link: "#",
      logo: niesbudLogo
    },
    {
      title: "Executive Member at NGO SUNDESH",
      description: "Initiative by DABUR INDIA FAMILY focusing on community development",
      link: "#",
      logo: sundeshLogo
    },
    {
      title: "Member, West Delhi Legal Aid Association",
      description: "Providing legal assistance and support to underprivileged communities",
      link: "#",
      logo: legalAidLogo
    },
    {
      title: "Core Team Member, Education Institutions Entrepreneurship Cell",
      description: "Mentoring and guiding young entrepreneurs in academic institutions",
      link: "#",
      logo: "https://via.placeholder.com/80"
    },
    {
      title: "Director at VYOMINI",
      description: "Leading the social enterprise focused on women's empowerment and menstrual health",
      link: "#",
      logo: "https://via.placeholder.com/80"
    },
    {
      title: "Rex Karmaveer Global Fellow",
      description: "Recognized for exceptional social entrepreneurship and change-making",
      link: "#",
      logo: "https://via.placeholder.com/80"
    },
    {
      title: "Member at Public Policy NGO",
      description: "Heading women-friendly police station and courts campaign, led by Ex Chief Justice of India",
      link: "#",
      logo: "https://via.placeholder.com/80"
    }
  ];

  return (
    <section
      id="responsibilities"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-60 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Key Responsibilities"
          subtitle="Leadership roles and professional commitments"
        />

        {/* Single row, wide cards */}
        <div className="space-y-6 md:space-y-8">
          {responsibilities.map((responsibility, index) => (
            <motion.a
              key={index}
              href={responsibility.link}
              className="block bg-secondary p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Number + Logo Row */}
              <div className="flex items-center justify-between mb-6">
                {/* Number */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center satoshi-bold text-base">
                    {index + 1}
                  </div>
                  <div className="w-12 h-0.5 bg-primary/30 ml-3"></div>
                </div>

                {/* Logo */}
                <img
                  src={responsibility.logo}
                  alt={`${responsibility.title} logo`}
                  className="w-14 h-14 object-contain rounded-md"
                />
              </div>

              {/* Title */}
              <h3 className="satoshi-bold text-xl text-primary mb-4 group-hover:text-primary/80 transition-colors">
                {responsibility.title}
              </h3>

              {/* Description */}
              <p className="satoshi-regular text-gray-700 text-base leading-relaxed">
                {responsibility.description}
              </p>

              {/* Hover Effect Line */}
              <div className="w-0 h-0.5 bg-primary mt-5 group-hover:w-full transition-all duration-500"></div>
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 p-6 bg-primary/5 rounded-xl border border-primary/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="satoshi-regular text-gray-700 text-center">
            These roles reflect a deep commitment to social entrepreneurship, women's empowerment, 
            and creating sustainable impact through strategic leadership and community engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyResponsibilities;
