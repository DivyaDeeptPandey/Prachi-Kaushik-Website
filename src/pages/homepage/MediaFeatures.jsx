import React from 'react';
import { motion } from 'framer-motion';
import HinduLogo from '../../assets/logos/the-hindu-logo.png';
import HTLogo from '../../assets/logos/ht-logo.png';
import TOILogo from '../../assets/logos/toi-logo.png';
import DDNewsLogo from '../../assets/logos/dd-news-logo.png';
import IndiaTodayLogo from '../../assets/logos/india-today-logo.png';
import EconomicTimesLogo from '../../assets/logos/economic-times.png';

const MediaFeatures = () => {
  // Media logos data
  const mediaLogos = [
    { 
      logo: HinduLogo, 
      alt: 'The Hindu Newspaper',
      name: 'The Hindu',
      type: 'National Daily'
    },
    { 
      logo: HTLogo, 
      alt: 'Hindustan Times',
      name: 'Hindustan Times',
      type: 'National Daily'
    },
    { 
      logo: TOILogo, 
      alt: 'Times of India',
      name: 'Times of India',
      type: 'National Daily'
    },
    { 
      logo: DDNewsLogo, 
      alt: 'DD News',
      name: 'DD News',
      type: 'National Broadcast'
    },
    { 
      logo: IndiaTodayLogo, 
      alt: 'India Today',
      name: 'India Today',
      type: 'News Magazine'
    },
    { 
      logo: EconomicTimesLogo, 
      alt: 'Economic Times',
      name: 'Economic Times',
      type: 'Business Daily'
    }
  ];

  return (
    <div className="bg-secondary">
      <section className=" bg-white py-16 md:py-20 px-4 md:px-8 rounded-tr-[8rem] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div
              className="h-1 bg-primary rounded-full mx-auto mb-6"
              style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
            ></div>
            <motion.h2
              className="satoshi-bold text-4xl md:text-4xl text-primary mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Media Features & Coverage
            </motion.h2>
            <motion.p
              className="satoshi-regular text-xl text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured in leading national media publications and news channels
            </motion.p>
          </motion.div>

          {/* Media Features Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >

            {/* Media Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
              {mediaLogos.map((media, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -4,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={media.logo}
                    alt={media.alt}
                    className="w-20 h-12 md:w-24 md:h-16 lg:w-28 lg:h-18 mx-auto object-contain transform group-hover:scale-110 transition-transform duration-300 mb-3"
                    loading="lazy"
                  />
                  <div>
                    <p className="satoshi-medium text-sm text-gray-800 mb-1">
                      {media.name}
                    </p>
                    <p className="satoshi-regular text-xs text-gray-600">
                      {media.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Infinite Scroller for Mobile */}
          <motion.div
            className="lg:hidden mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary to-transparent z-10"></div>

              <motion.div
                className="flex space-x-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {[...mediaLogos, ...mediaLogos].map((media, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="bg-white p-4 rounded-xl shadow-lg w-32">
                      <img
                        src={media.logo}
                        alt={media.alt}
                        className="w-20 h-12 mx-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center pt-12 border-t border-gray-300/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="satoshi-regular text-gray-600 mb-6 text-lg">
              Interested in featuring our work? Connect with our media team.
            </p>
            <motion.a
              href="/contact?subject=media"
              className="inline-block bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg text-center transition-colors duration-300 hover:bg-primary/90 text-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Media Inquiry
            </motion.a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default MediaFeatures;