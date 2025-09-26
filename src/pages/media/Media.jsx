import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MediaFilter from './components/MediaFilter';
import NewsGallery from './components/NewsGallery';
import VideoGallery from './components/VideoGallery';
import PhotoGallery from './components/PhotoGallery';
import StockImages from './components/StockImages';
import PressKit from './components/PressKit';

// Import partner logos for "As Featured In" section
import NitiAyogLogo from '../../assets/logos/niti-aayog-logo.png';
import RexKaramveerLogo from '../../assets/logos/rex-karamveer-logo.png';
import BricsLogo from '../../assets/logos/brics-chamber-logo.png';
import BWLogo from '../../assets/logos/bw-businessworld-logo.png';
import HinduLogo from '../../assets/logos/the-hindu-logo.png';
import HTLogo from '../../assets/logos/ht-logo.png';

const Media = () => {
  const [activeFilter, setActiveFilter] = useState('news');

  const featuredMedia = [
    { logo: NitiAyogLogo, name: 'NITI Aayog', alt: 'NITI Aayog Logo' },
    { logo: RexKaramveerLogo, name: 'Rex Karamveer', alt: 'Rex Karamveer Award' },
    { logo: BricsLogo, name: 'BRICS Chamber', alt: 'BRICS Chamber Logo' },
    { logo: BWLogo, name: 'BW Businessworld', alt: 'BW Businessworld Logo' },
    { logo: HinduLogo, name: 'The Hindu', alt: 'The Hindu Logo' },
    { logo: HTLogo, name: 'Hindustan Times', alt: 'Hindustan Times Logo' }
  ];

  const renderContent = () => {
    switch (activeFilter) {
      case 'news':
        return <NewsGallery />;
      case 'videos':
        return <VideoGallery />;
      case 'photos':
        return <PhotoGallery />;
      case 'stock':
        return <StockImages />;
      default:
        return <NewsGallery />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="min-h-[40vh] bg-secondary flex items-center justify-center rounded-bl-[8rem] px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Media Center
          </motion.h1>
          <motion.p
            className="satoshi-medium text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Press coverage, videos, photos, and resources for media professionals
          </motion.p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <MediaFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dynamic Content based on filter */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>

          { /* disabled press kit for now
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PressKit />
          </motion.div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;