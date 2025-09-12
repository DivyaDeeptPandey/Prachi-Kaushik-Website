import React from 'react';
import { motion } from 'framer-motion';
import NitiAyogLogo from '../../assets/logos/niti-aayog-logo.png';
import RexKaramveerLogo from '../../assets/logos/rex-karamveer-logo.png';
import BricsLogo from '../../assets/logos/brics-chamber-logo.png';
import BWLogo from '../../assets/logos/bw-businessworld-logo.png';
import HinduLogo from '../../assets/logos/the-hindu-logo.png';
import HTLogo from '../../assets/logos/ht-logo.png';
import TOILogo from '../../assets/logos/toi-logo.png';
import DDNewsLogo from '../../assets/logos/dd-news-logo.png';

const MediaFeatures = () => {
  // Awards logos data
  const awardsLogos = [
    { logo: NitiAyogLogo, alt: 'NITI Aayog Award' },
    { logo: RexKaramveerLogo, alt: 'Rex Karamveer Award' },
    { logo: BricsLogo, alt: 'BRICS Chamber Award' },
    { logo: BWLogo, alt: 'BW Businessworld Award' }
  ];

  // Media logos data
  const mediaLogos = [
    { logo: HinduLogo, alt: 'The Hindu Newspaper Logo' },
    { logo: HTLogo, alt: 'Hindustan Times Logo' },
    { logo: TOILogo, alt: 'Times of India Logo' },
    { logo: DDNewsLogo, alt: 'DD News Logo' }
  ];

  return (
    <div className="bg-white">
      <section className="bg-secondary py-12 md:py-16 px-4 md:px-8 rounded-tl-[8rem] overflow-hidden">
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
              className="h-1 bg-primary rounded-full mx-auto mb-5"
              style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
            ></div>
            <motion.h2
              className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 text-heading-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Recognition & Media Features
            </motion.h2>
            <motion.p
              className="satoshi-regular text-lg text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Celebrated by prestigious awards and featured in leading media publications
            </motion.p>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="satoshi-bold text-2xl md:text-3xl text-primary mb-6">
              Prestigious Awards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
              {awardsLogos.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-white backdrop-blur-sm p-8 rounded-3xl shadow-2xl group relative"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"></div>
                  <img
                    src={award.logo}
                    alt={award.alt}
                    className="relative z-10 w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 mx-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Features Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="satoshi-bold text-2xl md:text-3xl text-primary ">
              Featured In
            </h3>

            <div className="relative overflow-hidden mt-8">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10"></div>

              {/* Infinite Scroller */}
              <motion.div
                className="flex space-x-12 md:space-x-16 lg:space-x-20"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {[...mediaLogos, ...mediaLogos].map((media, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center py-6"
                    whileHover={{
                      scale: 1.15,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="bg-white backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                      <img
                        src={media.logo}
                        alt={media.alt}
                        className="w-28 h-18 md:w-36 md:h-24 lg:w-44 lg:h-28 object-contain transform group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
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
            <p className="satoshi-regular text-gray-600 mb-6">
              Want to feature our work? Get in touch with our media team.
            </p>
            <motion.a
              href="/contact?subject=media"
              className="inline-block bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg text-center transition-colors duration-300 hover:bg-primary/90"
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
