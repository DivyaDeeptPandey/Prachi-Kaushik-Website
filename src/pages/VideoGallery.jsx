import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Search, Filter, Calendar, Youtube, Podcast, Monitor } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Helper function to extract YouTube ID
const getYouTubeId = (url) => {
  if (!url) return null;

  // Handle various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Video data with real YouTube thumbnails
  const videos = [
    {
      id: 1,
      title: "Women Transformation India Winner | Prachi Kaushik | SAM Workshops",
      description: "Prachi Kaushik shares her journey as a Women Transforming India award winner and her work with SAM workshops.",
      date: "2023-10-22",
      type: "interview",
      platform: "YouTube",
      duration: "15:30",
      url: "https://youtu.be/SB_hbvyFWZs?si=vwJbYe90-m7nY1dw",
      thumbnail: "https://img.youtube.com/vi/SB_hbvyFWZs/maxresdefault.jpg"
    },
    {
      id: 2,
      title: "Prachi Kaushik, Vyomini Social Enterprise | BW Disrupt WEBS 2024",
      description: "Interview with Prachi Kaushik at BW Disrupt Women Entrepreneurship and Business Summit 2024.",
      date: "2024-03-08",
      type: "interview",
      platform: "YouTube",
      duration: "12:45",
      url: "https://youtu.be/Y8JLI8xu22g?si=SIZ_EUYK85KuiaCA",
      thumbnail: "https://img.youtube.com/vi/Y8JLI8xu22g/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "Episode 2: Prachi Kaushik - Pad Woman of New India",
      description: "In-depth episode featuring Prachi Kaushik as the Pad Woman of New India and her revolutionary work.",
      date: "2023-07-12",
      type: "interview",
      platform: "YouTube",
      duration: "25:40",
      url: "https://youtu.be/Yk8eHs3U8e4?si=miT6hpz5wMq651f_",
      thumbnail: "https://img.youtube.com/vi/Yk8eHs3U8e4/maxresdefault.jpg"
    },
    {
      id: 4,
      title: "Social Entrepreneurship in Rural Development | Prachi Kaushik",
      description: "Discussion on social entrepreneurship approaches to rural development and women empowerment.",
      date: "2023-09-15",
      type: "talk",
      platform: "YouTube",
      duration: "18:17",
      url: "https://youtu.be/QIQTNQypRsg?si=srXr5hrCqt0rkUXf",
      thumbnail: "https://img.youtube.com/vi/QIQTNQypRsg/maxresdefault.jpg"
    },
    {
      id: 5,
      title: "Menstrual Health Awareness Workshop | Vyomini Foundation",
      description: "Complete workshop on menstrual health awareness conducted by Vyomini Foundation in rural communities.",
      date: "2023-08-20",
      type: "workshop",
      platform: "YouTube",
      duration: "32:15",
      url: "https://youtu.be/d2NX83vb27g?si=JbZmuXhmGp2sW8OR",
      thumbnail: "https://img.youtube.com/vi/d2NX83vb27g/maxresdefault.jpg"
    },
    {
      id: 6,
      title: "Begusarai Women Reform | TEDx Talk",
      description: "TEDx talk featuring women's reform initiatives in Begusarai, including Prachi Kaushik's work.",
      date: "2023-09-15",
      type: "talk",
      platform: "YouTube",
      duration: "18:17",
      url: "https://youtu.be/XlAE822D0Pk?si=54IL8LbXipZm5tC3",
      thumbnail: "https://img.youtube.com/vi/XlAE822D0Pk/maxresdefault.jpg"
    },
    {
      id: 7,
      title: "Women Entrepreneurship Development Program | Complete Session",
      description: "Full session from the Women Entrepreneurship Development Program featuring Prachi Kaushik.",
      date: "2024-01-20",
      type: "webinar",
      platform: "YouTube",
      duration: "58:12",
      url: "https://youtu.be/yBZo3cA2LzM?si=aVxJUmueGEAbMXSt",
      thumbnail: "https://img.youtube.com/vi/yBZo3cA2LzM/maxresdefault.jpg"
    },
    {
      id: 8,
      title: "Rex Karamveer Global Fellowship | Prachi Kaushik Acceptance Speech",
      description: "Prachi Kaushik receiving the Rex Karamveer Global Fellowship award and sharing her vision.",
      date: "2023-08-20",
      type: "award",
      platform: "YouTube",
      duration: "7:35",
      url: "https://youtu.be/NjhBa8ZIJPY?si=WjrjTTczKhZVCvx5",
      thumbnail: "https://img.youtube.com/vi/NjhBa8ZIJPY/maxresdefault.jpg"
    },
    {
      id: 9,
      title: "Breaking Barriers in Rural Women Entrepreneurship | Panel Discussion",
      description: "Prachi Kaushik discussing challenges and solutions in rural women entrepreneurship development.",
      date: "2023-12-10",
      type: "panel",
      platform: "YouTube",
      duration: "42:30",
      url: "https://youtu.be/XlqVyY1pQUA?si=hcHnpnRh_-0Pr6Xi",
      thumbnail: "https://img.youtube.com/vi/XlqVyY1pQUA/maxresdefault.jpg"
    },
    {
      id: 10,
      title: "Prachi Kaushik, Vyomini Social Enterprise | BW Disney WEBS 2024",
      description: "Prachi Kaushik speaking at BW Disrupt Women Entrepreneurship and Business Summit 2024.",
      date: "2024-03-08",
      type: "talk",
      platform: "YouTube",
      duration: "10:22",
      url: "https://youtu.be/Ur0xcQQVcis?si=-eJmHsBXI2SoVLAY",
      thumbnail: "https://img.youtube.com/vi/Ur0xcQQVcis/maxresdefault.jpg"
    },
    {
      id: 11,
      title: "Vyomini Social Enterprise: Impact Documentary",
      description: "Comprehensive documentary on Vyomini Social Enterprise's impact and women empowerment initiatives.",
      date: "2024-02-15",
      type: "documentary",
      platform: "YouTube",
      duration: "22:30",
      url: "https://youtu.be/bnXCGSzPsfc?si=tvFaK6z7NirBZjUP",
      thumbnail: "https://img.youtube.com/vi/bnXCGSzPsfc/maxresdefault.jpg"
    },
    {
      id: 12,
      title: "Are Women Safe at Workplaces in India | The Crazy Careers Podcast",
      description: "Prachi Kaushik discusses women's safety in Indian workplaces and shares insights from her work.",
      date: "2023-11-15",
      type: "podcast",
      platform: "YouTube",
      duration: "8:42",
      url: "https://www.youtube.com/watch?v=ox8AagmEmPQ",
      thumbnail: "https://img.youtube.com/vi/ox8AagmEmPQ/maxresdefault.jpg"
    },
    {
      id: 13,
      title: "Social Entrepreneurship Awards 2023 | Prachi Kaushik",
      description: "Prachi Kaushik receiving recognition at the Social Entrepreneurship Awards 2023.",
      date: "2023-12-05",
      type: "award",
      platform: "YouTube",
      duration: "5:18",
      url: "https://www.youtube.com/watch?v=RICpryHCKkM",
      thumbnail: "https://img.youtube.com/vi/RICpryHCKkM/maxresdefault.jpg"
    },
    {
      id: 14,
      title: "Community Development Initiatives | Rural Transformation",
      description: "Documenting community development initiatives and rural transformation projects led by Vyomini.",
      date: "2024-01-10",
      type: "documentary",
      platform: "YouTube",
      duration: "28:45",
      url: "https://www.youtube.com/watch?v=12CMY0_EZl8",
      thumbnail: "https://img.youtube.com/vi/12CMY0_EZl8/maxresdefault.jpg"
    },
    {
      id: 15,
      title: "Social Entrepreneurship in Menstrual Health | Prachi Kaushik",
      description: "Discussion on social entrepreneurship approaches to menstrual health and hygiene in India.",
      date: "2023-06-28",
      type: "webinar",
      platform: "YouTube",
      duration: "42:15",
      url: "https://www.youtube.com/watch?v=WXW75wDGfSg",
      thumbnail: "https://img.youtube.com/vi/WXW75wDGfSg/maxresdefault.jpg"
    }
  ];

  const categories = [
    { id: "all", name: "All Videos", icon: <Monitor className="w-4 h-4" /> },
    { id: "interview", name: "Interviews", icon: <Youtube className="w-4 h-4" /> },
    { id: "podcast", name: "Podcasts", icon: <Podcast className="w-4 h-4" /> },
    { id: "talk", name: "Talks", icon: <Monitor className="w-4 h-4" /> },
    { id: "webinar", name: "Webinars", icon: <Monitor className="w-4 h-4" /> },
    { id: "documentary", name: "Documentaries", icon: <Monitor className="w-4 h-4" /> },
    { id: "award", name: "Awards", icon: <Monitor className="w-4 h-4" /> },
    { id: "panel", name: "Panel Discussions", icon: <Monitor className="w-4 h-4" /> },
    { id: "workshop", name: "Workshops", icon: <Monitor className="w-4 h-4" /> }
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
    switch (platform.toLowerCase()) {
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
          <p className="satoshi-regular text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Watch interviews, podcasts, talks, and webinars featuring Prachi Kaushik sharing her insights on women empowerment, social entrepreneurship, and community development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl customShadow p-6 text-center">
            <div className="satoshi-bold text-3xl text-primary mb-2">{videos.length}</div>
            <div className="satoshi-regular text-gray-700">Videos</div>
          </div>
          <div className="bg-white rounded-2xl customShadow p-6 text-center">
            <div className="satoshi-bold text-3xl text-primary mb-2">6+</div>
            <div className="satoshi-regular text-gray-700">Categories</div>
          </div>
          <div className="bg-white rounded-2xl customShadow p-6 text-center">
            <div className="satoshi-bold text-3xl text-primary mb-2">9</div>
            <div className="satoshi-regular text-gray-700">Video Types</div>
          </div>
          <div className="bg-white rounded-2xl customShadow p-6 text-center">
            <div className="satoshi-bold text-3xl text-primary mb-2">2023-2024</div>
            <div className="satoshi-regular text-gray-700">Coverage Period</div>
          </div>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          className="bg-white rounded-2xl customShadow p-6 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
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
                  className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
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
                  className={`flex items-center gap-2 px-4 py-2 satoshi-medium rounded-full transition-colors ${activeCategory === category.id
                    ? "bg-primary text-secondary"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
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
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/250";
                    }}
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
                  <h2 className="satoshi-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
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
                      className="group relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg text-primary transition-colors duration-300 z-10"
                    >
                      {/* Text */}
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Watch Video
                      </span>

                      {/* Play icon */}
                      <Play className="w-4 h-4 transform group-hover:translate-x-1 group-hover:text-white transition-all duration-300 relative z-10" />

                      {/* Background element - ADDED bg-primary class */}
                      <span className="absolute inset-0 bg-primary origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
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
              <h3 className="satoshi-bold text-2xl text-gray-900 mb-4">No videos found</h3>
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
                <span className="relative z-10 transition-colors duration-300 text-primary group-hover/clear:text-white">
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