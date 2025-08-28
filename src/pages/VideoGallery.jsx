import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Search, Filter, Calendar, Youtube, Podcast, Monitor } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VideoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample video data - replace with actual videos
  const videos = [
    {
      id: 1,
      title: "Women Empowerment & Social Entrepreneurship",
      description: "Prachi Kaushik discusses her journey of empowering women through sustainable business models and social initiatives.",
      date: "2023-11-15",
      type: "interview",
      platform: "YouTube",
      thumbnail: "/api/placeholder/400/250",
      duration: "24:18",
      url: "https://youtube.com/embed/example1"
    },
    {
      id: 2,
      title: "Breaking Menstrual Taboos in Rural India",
      description: "An in-depth conversation about the challenges and successes in menstrual health education across Indian villages.",
      date: "2023-10-22",
      type: "podcast",
      platform: "Spotify",
      thumbnail: "/api/placeholder/400/250",
      duration: "42:05",
      url: "https://open.spotify.com/embed/example2"
    },
    {
      id: 3,
      title: "Vyomini Foundation: From Idea to Impact",
      description: "The story behind founding Vyomini Social Foundation and its journey to impacting over 100,000 women.",
      date: "2023-09-05",
      type: "interview",
      platform: "YouTube",
      thumbnail: "/api/placeholder/400/250",
      duration: "31:47",
      url: "https://youtube.com/embed/example3"
    },
    {
      id: 4,
      title: "Community Response During COVID-19",
      description: "How Prachi mobilized women networks to produce and distribute essential supplies during the pandemic.",
      date: "2023-08-18",
      type: "talk",
      platform: "Conference",
      thumbnail: "/api/placeholder/400/250",
      duration: "18:32",
      url: "https://vimeo.com/embed/example4"
    },
    {
      id: 5,
      title: "The 3A Framework for Menstrual Health",
      description: "Detailed discussion on the Awareness, Accessibility, Affordability framework for menstrual health initiatives.",
      date: "2023-07-12",
      type: "podcast",
      platform: "Apple Podcasts",
      thumbnail: "/api/placeholder/400/250",
      duration: "38:14",
      url: "https://podcasts.apple.com/embed/example5"
    },
    {
      id: 6,
      title: "Building Ecosystems for Women Entrepreneurs",
      description: "Strategies for creating sustainable support systems for women micro-entrepreneurs in rural areas.",
      date: "2023-06-28",
      type: "webinar",
      platform: "Zoom",
      thumbnail: "/api/placeholder/400/250",
      duration: "52:21",
      url: "https://vimeo.com/embed/example6"
    },
    {
      id: 7,
      title: "Education as a Tool for Empowerment",
      description: "The role of education in transforming communities and empowering women for leadership roles.",
      date: "2023-05-15",
      type: "interview",
      platform: "YouTube",
      thumbnail: "/api/placeholder/400/250",
      duration: "27:43",
      url: "https://youtube.com/embed/example7"
    },
    {
      id: 8,
      title: "Sustainable Development Goals in Action",
      description: "How grassroots initiatives contribute to achieving UN Sustainable Development Goals.",
      date: "2023-04-10",
      type: "talk",
      platform: "TEDx",
      thumbnail: "/api/placeholder/400/250",
      duration: "15:09",
      url: "https://youtube.com/embed/example8"
    }
  ];

  const categories = [
    { id: "all", name: "All Videos", icon: <Monitor className="w-4 h-4" /> },
    { id: "interview", name: "Interviews", icon: <Youtube className="w-4 h-4" /> },
    { id: "podcast", name: "Podcasts", icon: <Podcast className="w-4 h-4" /> },
    { id: "talk", name: "Talks", icon: <Monitor className="w-4 h-4" /> },
    { id: "webinar", name: "Webinars", icon: <Monitor className="w-4 h-4" /> }
  ];

  // Filter videos based on category and search query
  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === "all" || video.type === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Function to get platform icon
  const getPlatformIcon = (platform) => {
    switch(platform.toLowerCase()) {
      case 'youtube': return <Youtube className="w-4 h-4" />;
      case 'spotify': return <Podcast className="w-4 h-4" />;
      case 'apple podcasts': return <Podcast className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-secondary min-h-screen pt-20 pb-16">
        <Navbar />
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Video Gallery
          </h1>
          <p className="satoshi-regular text-lg md:text-xl text-text max-w-3xl mx-auto">
            Watch interviews, podcasts, talks, and webinars featuring Prachi Kaushik sharing her insights on women empowerment, social entrepreneurship, and community development.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div 
          className="bg-white rounded-2xl customShadow p-6 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter - Mobile */}
            <div className="md:hidden w-full">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 satoshi-medium rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-text hover:bg-gray-200"
                  }`}
                    style={activeCategory === category.id ? { color: 'white'} : {}} 
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                variants={fadeUp}
                custom={index}
                className="bg-white rounded-2xl customShadow overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Video Thumbnail with Play Button */}
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 p-4 rounded-full">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded satoshi-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Video Content */}
                <div className="p-6">
                  {/* Video Type and Platform */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1 satoshi-medium">
                      {getPlatformIcon(video.platform)}
                      {video.platform}
                    </span>
                    <span className="inline-block px-2 py-1 satoshi-medium text-xs bg-primary/10 text-primary rounded-full">
                      {video.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="satoshi-bold text-xl text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h2>

                  {/* Description */}
                  <p className="satoshi-regular text-gray-600 mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(video.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/button relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg"
                    >
                      {/* Background element that slides in on hover */}
                      <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 z-0"></span>
                      
                      {/* Text */}
                      <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
                        Watch Video
                      </span>
                      
                      {/* Play icon */}
                      <Play className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300 relative z-10" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // No results state
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center py-16"
          >
            <div className="bg-white rounded-2xl customShadow p-12">
              <h3 className="satoshi-bold text-2xl text-text mb-4">No videos found</h3>
              <p className="satoshi-regular text-gray-600 mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="group/clear relative overflow-hidden px-6 py-3 satoshi-bold rounded-lg"
              >
                {/* Background element that slides in on hover */}
                <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover/clear:translate-x-0 transition-transform duration-300 z-0"></span>
                
                {/* Text */}
                <span className="relative z-10 transition-colors duration-300 group-hover/clear:text-white">
                  Clear Filters
                </span>
              </button>
            </div>
          </motion.div>
        )}

      </section>
        <Footer />
    </div>
  );
};

export default VideoGallery;