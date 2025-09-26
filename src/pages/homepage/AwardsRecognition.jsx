import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NitiAyogLogo from '../../assets/logos/niti-aayog-logo.png';
import RexKaramveerLogo from '../../assets/logos/rex-karamveer-logo.png';
import BricsLogo from '../../assets/logos/brics-chamber-logo.png';
import BWLogo from '../../assets/logos/bw-businessworld-logo.png';

const AwardsRecognition = () => {
  const navigate = useNavigate();

  // Awards logos data with corresponding IDs that match the Achievements page
  const awardsLogos = [
    { 
      id: 'NITI-ayog-award',
      logo: NitiAyogLogo, 
      alt: 'NITI Aayog Award',
      title: 'Women Transforming India Award',
      organization: 'NITI Aayog',
      year: '2023'
    },
    { 
      id: 'rex-karamveer-award',
      logo: RexKaramveerLogo, 
      alt: 'Rex Karamveer Award',
      title: 'Rex Karamveer Global Fellowship',
      organization: 'International Confederation of NGOs',
      year: '2023'
    },
    { 
      id: 'brics-award',
      logo: BricsLogo, 
      alt: 'BRICS Chamber Award',
      title: 'BRICS Chamber Award',
      organization: 'BRICS CCI',
      year: '2023'
    },
    { 
      id: 'WEISA-award',
      logo: BWLogo, 
      alt: 'BW Businessworld Award',
      title: 'Women Social Entrepreneur of the Year',
      organization: 'BW Businessworld',
      year: '2024'
    }
  ];

  // Function to handle award click and navigate to achievements page
  const handleAwardClick = (awardId) => {
    navigate(`/achievements#${awardId}`);
  };

  return (
    <div className="bg-white">
      <section className="bg-secondary py-16 md:py-20 px-4 md:px-8 rounded-tl-[8rem] rounded-bl-[8rem] overflow-hidden">
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
              className="satoshi-bold text-3xl md:text-4xl text-primary mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Prestigious Awards
            </motion.h2>
            <motion.p
              className="satoshi-regular text-xl text-gray-700 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Celebrated by national and international organizations for transformative work in women's empowerment
            </motion.p>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {awardsLogos.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-2xl group relative text-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleAwardClick(award.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Award Logo */}
                <img
                  src={award.logo}
                  alt={award.alt}
                  className="relative z-10 w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 mx-auto object-contain transform group-hover:scale-110 transition-transform duration-500 mb-6"
                  loading="eager"
                />
                
                {/* Award Details */}
                <div className="relative z-10">
                  <h3 className="satoshi-bold text-lg text-primary mb-2">
                    {award.title}
                  </h3>
                  <p className="satoshi-regular text-sm text-gray-600 mb-1">
                    {award.organization}
                  </p>
                  <p className="satoshi-medium text-xs text-primary">
                    {award.year}
                  </p>
                </div>

                {/* Click indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="satoshi-medium text-primary text-xs">
                    Click to view details
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default AwardsRecognition;   