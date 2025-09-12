import React from 'react';
import { motion } from 'framer-motion';

const StockImages = () => {
  const stockImages = [
    {
      id: 1,
      image: '/media/stock/portrait-1.jpg',
      category: 'Portraits',
      downloadLink: '/downloads/portrait-1.jpg',
      size: '4.2 MB'
    },
    {
      id: 2,
      image: '/media/stock/workshop-1.jpg',
      category: 'Workshops',
      downloadLink: '/downloads/workshop-1.jpg',
      size: '3.8 MB'
    },
    {
      id: 3,
      image: '/media/stock/community-1.jpg',
      category: 'Community',
      downloadLink: '/downloads/community-1.jpg',
      size: '5.1 MB'
    },
    {
      id: 4,
      image: '/media/stock/product-1.jpg',
      category: 'Products',
      downloadLink: '/downloads/product-1.jpg',
      size: '4.5 MB'
    },
    {
      id: 5,
      image: '/media/stock/event-1.jpg',
      category: 'Events',
      downloadLink: '/downloads/event-1.jpg',
      size: '6.2 MB'
    },
    {
      id: 6,
      image: '/media/stock/team-1.jpg',
      category: 'Team',
      downloadLink: '/downloads/team-1.jpg',
      size: '4.9 MB'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stockImages.map((image, index) => (
        <motion.div
          key={image.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
            <img
              src={image.image}
              alt={`Stock image - ${image.category}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="satoshi-medium text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">
                {image.category}
              </span>
              <span className="satoshi-regular text-gray-500 text-sm">{image.size}</span>
            </div>
            <a
              href={image.downloadLink}
              download
              className="w-full bg-primary text-white satoshi-medium py-2 px-4 rounded-lg text-center hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Image
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StockImages; 