import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ArrowRight, Award, Mic, Calendar, MapPin } from 'lucide-react';

// Images
import pic1 from '../../assets/scroll-pic1.jpg';
import pic2 from '../../assets/scroll-pic2.jpg';
import pic3 from '../../assets/scroll-pic3.jpg';
import pic4 from '../../assets/scroll-pic4.jpg';
import pic5 from '../../assets/scroll-pic5.jpg';
import pic6 from '../../assets/scroll-pic6.jpg';
import pic7 from '../../assets/scroll-pic7.jpg';
import pic8 from '../../assets/scroll-pic8.jpg';

// Award Logos
import nitiAayogLogo from '../../assets/logos/NITI_Aayog_logo.png';
import rexLogo from '../../assets/logos/rex.png';
import bricsLogo from '../../assets/logos/brics.png';
import bwLogo from '../../assets/logos/Bw.png';

// Speaking Engagement Logos
import tedxLogo from '../../assets/logos/TEDx.png';
import iitLogo from '../../assets/logos/logo-iit.png';

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
  >
    ❮
  </div>
);

const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        } 
      },
    ],
  };

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Women Transforming India Award",
      organization: "NITI Aayog",
      year: "2023",
      description: "Awarded as part of India's 75th Independence celebration, recognizing 75 women from across the nation who are playing pivotal roles in transforming India.",
      logo: nitiAayogLogo
    },
    {
      id: 2,
      title: "Rex Karamveer Global Fellowship & Rex Karamveer Chakra Award",
      organization: "International Confederation of NGOs in Partnership with the UN",
      year: "2023",
      description: "Global recognition for social entrepreneurship and contributions to women's empowerment.",
      logo: rexLogo
    },
    {
      id: 3,
      title: "BW Businessworld Women Social Entrepreneur of the Year",
      organization: "BW Businessworld",
      year: "2024",
      description: "Awarded for outstanding leadership in social entrepreneurship and women's empowerment initiatives.",
      logo: bwLogo
    },
    {
      id: 4,
      title: "BRICS Chamber of Commerce Award",
      organization: "BRICS CCI",
      year: "2023",
      description: "International recognition for contributions to economic development and social entrepreneurship.",
      logo: bricsLogo
    }
  ];

  // Speaking engagements data
  const speakingEngagements = [
    {
      event: "TEDx Talk",
      topic: "Breaking Taboos: Menstrual Health and Women's Empowerment",
      date: "2023",
      location: "New Delhi, India",
      logo: tedxLogo
    },
    {
      event: "IIT Delhi BioEnviroCon 2025",
      topic: "Sustainable Solutions for Rural Development",
      date: "2025",
      location: "New Delhi, India",
      logo: iitLogo
    }
  ];

  return (
    <section
      className="relative py-16 md:py-20 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{
        background: `linear-gradient(270deg, var(--color-secondary), #fff7f7, var(--color-secondary))`,
        backgroundSize: '400% 400%',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Accent line */}
        <div className="w-50 h-1 bg-primary rounded-full mx-auto mb-6"></div>

        {/* Heading */}
        <motion.h1
          className="satoshi-bold text-primary text-3xl md:text-4xl lg:text-5xl text-center mb-4 md:mb-5 drop-shadow-sm"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ lineClamp: 2 }}
        >
          Awards & Speaking Engagements
        </motion.h1>

        {/* Description */}
        <motion.div
          className="max-w-3xl mx-auto mb-10 md:mb-12 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="satoshi-medium text-gray-600 text-center text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose">
            Ms. Prachi Kaushik has been recognized with numerous prestigious awards for her 
            outstanding contributions to women's empowerment and social change. Her thought 
            leadership has been featured at national and international platforms including TEDx.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 md:mb-12 border-b border-gray-200">
          <button
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-base md:text-lg flex items-center gap-2 ${activeTab === 'awards' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('awards')}
          >
            <Award size={18} className="hidden sm:block" />
            <Award size={16} className="sm:hidden" />
            Awards
          </button>
          <button
            className={`px-4 md:px-6 py-2 md:py-3 font-medium text-base md:text-lg flex items-center gap-2 ${activeTab === 'speaking' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('speaking')}
          >
            <Mic size={18} className="hidden sm:block" />
            <Mic size={16} className="sm:hidden" />
            Speaking
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'awards' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {awards.map((award) => (
                <motion.div
                  key={award.id}
                  className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-5 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-50 rounded-xl p-2 md:p-3 border border-gray-100">
                    <img 
                      src={award.logo} 
                      alt={`${award.organization} logo`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="satoshi-bold text-lg md:text-xl text-primary mb-2 line-clamp-2" style={{ lineClamp: 2 }}>
                      {award.title}
                    </h3>
                    <p className="satoshi-medium text-gray-700 text-sm md:text-base mb-2">
                      {award.organization} • {award.year}
                    </p>
                    <p className="satoshi-regular text-gray-600 text-sm md:text-base leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'speaking' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-12"
          >
            <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-2xl mx-auto">
              {speakingEngagements.map((engagement, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-5 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gray-50 rounded-xl p-2 md:p-3 border border-gray-100">
                    <img 
                      src={engagement.logo} 
                      alt={`${engagement.event} logo`} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="satoshi-bold text-lg md:text-xl text-primary mb-2">
                      {engagement.event}
                    </h3>
                    <p className="satoshi-medium text-gray-700 text-sm md:text-base mb-2">
                      {engagement.topic}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center text-gray-500 text-xs md:text-sm gap-3 mt-3">
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <Calendar size={14} className="text-primary" />
                        <span>{engagement.date}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                        <MapPin size={14} className="text-primary" />
                        <span>{engagement.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Carousel for visual elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mb-10 md:mb-12"
        >
          <h3 className="satoshi-bold text-xl md:text-2xl text-primary text-center mb-5 md:mb-6">Gallery</h3>
          <div className="relative px-2 md:px-4">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="px-2 md:px-3 py-3 md:py-4 h-64 md:h-80 lg:h-96 grid place-items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <motion.img
                      src={img}
                      alt={`Award gallery image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="text-white text-sm satoshi-medium">Award Ceremony {idx + 1}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* See More Link */}
        <motion.div 
          className="text-center mt-6 md:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/archives"
            className="inline-flex items-center gap-2 satoshi-bold bg-primary text-secondary px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-red-600 transition-all duration-300 group text-sm md:text-base shadow-md hover:shadow-lg"
          >
            View Full Archive
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;