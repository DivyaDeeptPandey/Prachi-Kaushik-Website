import React from 'react';
import { motion } from 'framer-motion';

const PressKit = () => {
  const pressKitItems = [
    {
      title: 'Complete Press Kit',
      description: 'Everything you need for media coverage - bios, photos, fact sheets',
      fileSize: '25.4 MB',
      downloadLink: '/press-kit/vyomini-press-kit.zip',
      includes: ['Biography', 'High-res Photos', 'Fact Sheet', 'Logo Pack']
    }
  ];

  return (
    <motion.div
      className="bg-primary/5 rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="satoshi-bold text-2xl text-primary mb-6">Media Resources</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pressKitItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h4 className="satoshi-bold text-lg text-primary mb-2">{item.title}</h4>
            <p className="satoshi-regular text-gray-600 text-sm mb-4">{item.description}</p>
            <div className="mb-4">
              <span className="satoshi-medium text-sm text-gray-500">Includes:</span>
              <ul className="text-sm text-gray-600 mt-1 space-y-1">
                {item.includes.map((include, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-3 h-3 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {include}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="satoshi-regular text-gray-500 text-sm">{item.fileSize}</span>
            </div>
            <a
              href={item.downloadLink}
              download
              className="w-full bg-primary text-white satoshi-medium py-2 px-4 rounded-lg text-center hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PressKit;