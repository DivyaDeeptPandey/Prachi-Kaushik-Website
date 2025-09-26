import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StockImages = () => {
  const [downloading, setDownloading] = useState(null);

  const stockImages = [
    {
      id: 1,
      image: '/media/stock/portrait-1.jpg',
      downloadLink: '/downloads/portrait-1.jpg',
      aspect: 'square'
    },
    {
      id: 2,
      image: '/media/stock/portrait-2.jpg',
      downloadLink: '/downloads/portrait-2.jpg',
      aspect: 'vertical'
    },
    {
      id: 3,
      image: '/media/stock/portrait-3.jpg',
      downloadLink: '/downloads/portrait-3.jpg',
      aspect: 'horizontal'
    },
    {
      id: 4,
      image: '/media/stock/portrait-4.jpg',
      downloadLink: '/downloads/portrait-4.jpg',
      aspect: 'square'
    },
    {
      id: 5,
      image: '/media/stock/portrait-5.jpg',
      downloadLink: '/downloads/portrait-5.jpg',
      aspect: 'vertical'
    },
    {
      id: 6,
      image: '/media/stock/portrait-6.jpg',
      downloadLink: '/downloads/portrait-6.jpg',
      aspect: 'horizontal'
    },
    {
      id: 7,
      image: '/media/stock/portrait-7.jpg',
      downloadLink: '/downloads/portrait-7.jpg',
      aspect: 'square'
    },
    {
      id: 8,
      image: '/media/stock/portrait-8.jpg',
      downloadLink: '/downloads/portrait-8.jpg',
      aspect: 'vertical'
    },
  ];

  const getAspectClass = (aspect) => {
    switch (aspect) {
      case 'square':
        return 'aspect-square';
      case 'vertical':
        return 'aspect-[3/4]';
      case 'horizontal':
        return 'aspect-[4/3]';
      case 'large':
        return 'aspect-[16/9]';
      default:
        return 'aspect-square';
    }
  };

  const getGridClass = (aspect, index) => {
    if (aspect === 'large') return 'lg:col-span-2 lg:row-span-2';
    if (aspect === 'horizontal') return 'lg:col-span-2';
    if (aspect === 'vertical') return 'lg:row-span-2';
    return '';
  };

  const handleDownload = async (image, event) => {
    event?.stopPropagation();
    setDownloading(image.id);
    
    try {
      // Simulate download process
      const response = await fetch(image.downloadLink);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = image.downloadLink.split('/').pop();
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct download
      const a = document.createElement('a');
      a.href = image.downloadLink;
      a.download = image.downloadLink.split('/').pop();
      a.click();
    }
    
    setTimeout(() => setDownloading(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {stockImages.map((image, index) => (
        <motion.div
          key={image.id}
          className={`relative group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ${getGridClass(image.aspect, index)}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          onClick={(e) => handleDownload(image, e)}
        >
          {/* Image Container */}
          <div className={`relative w-full h-full ${getAspectClass(image.aspect)}`}>
            <img
              src={image.image}
              alt={`Stock image ${image.id}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay with Download Icon */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {downloading === image.id ? (
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                    <svg className="w-8 h-8 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4m8-10h-4M6 12H2m16.364-6.364l-2.828 2.828M7.464 17.536l-2.828 2.828m12.728 0l-2.828-2.828M7.464 6.464L4.636 3.636" />
                    </svg>
                  </div>
                ) : (
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StockImages;