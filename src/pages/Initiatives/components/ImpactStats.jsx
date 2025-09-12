import React from 'react';
import { motion } from 'framer-motion';

const ImpactStats = () => {
  const stats = [
    { value: '25L+', label: 'Women Educated', description: 'On menstrual health and hygiene' },
    { value: '10K+', label: 'Entrepreneurs Created', description: 'Through training programs' },
    { value: '400+', label: 'Health Camps', description: 'Serving thousands of women' },
    { value: '15+', label: 'States Reached', description: 'Across India with sustainable programs' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="satoshi-bold text-3xl md:text-4xl text-primary mb-2">
            {stat.value}
          </div>
          <h3 className="satoshi-medium text-lg mb-2">{stat.label}</h3>
          <p className="satoshi-regular text-gray-600 text-sm">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ImpactStats;