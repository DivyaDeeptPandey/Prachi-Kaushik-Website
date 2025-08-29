import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Award, Newspaper, Image, Video, Download, Users, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WallmartImg from '../assets/archivesWallmart.jpg';
import InvitationImg from '../assets/ArchivesInvitation.jpg';
import Svavlambiimg from '../assets/ArchivesSvavlambi.jpg';
const Archives = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated data based on the photos shared
  const archiveItems = [
    {
      id: 1,
      type: 'award',
      title: 'Women Transforming India Award',
      description: 'Awarded by NITI Aayog for outstanding contributions to social change and women empowerment',
      image: '',
      date: '2022',
      category: 'awards'
    },
    {
      id: 2,
      type: 'media',
      title: 'Walmart India - Boldly Courageous #IWD2020',
      description: 'Featured as a courageous woman entrepreneur for International Women\'s Day 2020',
      image: WallmartImg,
      date: '2020',
      category: 'media',
      content: 'My social enterprise Vyomini Enterprises works on a complete menstrual health solution for women deprived of awareness and access. Active in 10 states across India, we have engaged 500 women in manufacturing, 1000 health trainers and have reached 10 lakh women through reproductive health awareness workshops.'
    },
    {
      id: 3,
      type: 'event',
      title: 'SWAVIambi DESIRE Lecture',
      description: 'Keynote speaker on Women Entrepreneurship organized by Meity, Govt. of India',
      image: Svavlambiimg,
      date: 'Nov 18, 2022',
      category: 'events',
      details: {
        time: '03:00 - 04:00 PM',
        organizer: 'Meity, Govt. of India Project (IGNTU- Central University)',
        location: 'Amarkantak (M.P.)'
      }
    },
    {
      id: 4,
      type: 'recognition',
      title: 'Government of Haryana Invitation',
      description: 'Invited by Additional Chief Secretary for interaction with Hon\'ble Chief Minister',
      image: InvitationImg,
      date: 'Jun 19, 2019',
      category: 'recognition',
      content: 'Invitation to interact with Hon\'ble Chief Minister of Haryana at Apparel House, Sector 44, Gurugram for industry partnership in skill development initiatives.'
    },
    {
      id: 5,
      type: 'media',
      title: 'Start-up Insights Feature',
      description: 'Sharing entrepreneurial wisdom and business philosophy',
      image: '/api/placeholder/300/200',
      date: '2023',
      category: 'media',
      content: 'Key insights: Self-disruption is key, Competitiveness is a mindset, Work-life balance, Discipline is motivation, Focus on product quality first.'
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Vyomini Social Enterprise Launch',
      description: 'Founded in 2017 to solve social, economic, and environmental challenges',
      image: '/api/placeholder/300/200',
      date: '2017',
      category: 'achievements',
      content: 'Vyomini aspires to build a robust ecosystem that enables women-led entrepreneurship in emerging high impact sectors like clean energy, agriculture, nutrition, health and sanitation.'
    },
    {
      id: 7,
      type: 'media',
      title: 'GreenRakshak Social Media Feature',
      description: 'Social enterprise working to tackle socio-economic & environmental problems',
      image: '/api/placeholder/300/200',
      date: '2023',
      category: 'media',
      socialHandle: '@greenrakshak'
    },
    {
      id: 8,
      type: 'award',
      title: 'Rex Karamveer Global Fellowship',
      description: 'International recognition for social entrepreneurship',
      image: '/api/placeholder/300/200',
      date: '2023',
      category: 'awards'
    },
    {
      id: 9,
      type: 'impact',
      title: '10 Lakh Women Reached',
      description: 'Milestone achievement in reproductive health awareness',
      image: '/api/placeholder/300/200',
      date: '2020',
      category: 'achievements',
      stats: {
        womenReached: '10,00,000+',
        statesCovered: '10',
        womenTrained: '1000+',
        manufacturers: '500+'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Archives', icon: Newspaper },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'media', label: 'Media Coverage', icon: Newspaper },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Users },
    { id: 'recognition', label: 'Recognition', icon: Award }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
  };

  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    setCurrentIndex(newIndex);
    setSelectedItem(filteredItems[newIndex]);
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'award': return <Award className="w-5 h-5" />;
      case 'media': return <Newspaper className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      case 'achievement': return <Users className="w-5 h-5" />;
      case 'recognition': return <Award className="w-5 h-5" />;
      case 'impact': return <Users className="w-5 h-5" />;
      default: return <Newspaper className="w-5 h-5" />;
    }
  };

  const renderLightboxContent = (item) => {
    switch (item.type) {
      case 'event':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="satoshi-medium">Date: {item.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="satoshi-medium">Time: {item.details.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="satoshi-medium">Location: {item.details.location}</span>
              </div>
            </div>
            <p className="satoshi-regular text-gray-600">{item.content}</p>
          </div>
        );
      
      case 'impact':
        return (
          <div className="space-y-6">
            <h4 className="satoshi-bold text-lg text-gray-900">Impact Statistics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.womenReached}</div>
                <div className="satoshi-regular text-sm">Women Reached</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.statesCovered}</div>
                <div className="satoshi-regular text-sm">States Covered</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.womenTrained}</div>
                <div className="satoshi-regular text-sm">Health Trainers</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="satoshi-bold text-2xl text-primary">{item.stats.manufacturers}</div>
                <div className="satoshi-regular text-sm">Women in Manufacturing</div>
              </div>
            </div>
          </div>
        );
      
      case 'media':
        return (
          <div className="space-y-4">
            {item.socialHandle && (
              <div className="flex items-center gap-2">
                <span className="satoshi-medium text-primary">Social Handle:</span>
                <span className="satoshi-regular">{item.socialHandle}</span>
              </div>
            )}
            <p className="satoshi-regular text-gray-600 leading-relaxed">
              {item.content}
            </p>
          </div>
        );
      
      default:
        return (
          <p className="satoshi-regular text-gray-600 leading-relaxed">
            {item.content || item.description}
          </p>
        );
    }
  };

  return (
    <section className="bg-secondary py-16">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="satoshi-bold text-3xl md:text-4xl lg:text-5xl text-primary drop-shadow-md mb-4 mt-10">
            Archives & Recognition
          </h2>
          <p className="satoshi-regular text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Prachi Kaushik's journey through awards, media features, speaking engagements, 
            and milestones in women empowerment and social entrepreneurship.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full satoshi-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-secondary shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary hover:text-white border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Archive Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-full">
                  {getIconForType(item.type)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm satoshi-medium">{item.date}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="satoshi-bold text-xl text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="satoshi-regular text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-sm satoshi-medium rounded-full">
                    {item.type.toUpperCase()}
                  </span>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {lightboxOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative h-64 md:h-96">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-sm satoshi-medium rounded-full">
                      {selectedItem.type.toUpperCase()}
                    </span>
                    <span className="text-gray-500 satoshi-regular">{selectedItem.date}</span>
                  </div>
                  
                  <h3 className="satoshi-bold text-2xl text-gray-900 mb-4">
                    {selectedItem.title}
                  </h3>
                  
                  {renderLightboxContent(selectedItem)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Archives;