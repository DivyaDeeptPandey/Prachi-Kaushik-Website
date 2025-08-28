import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, ExternalLink, Grid, List, Image } from 'lucide-react';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const StockImagesGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample stock images data - replace with actual images
  const stockImages = [
    {
      id: 1,
      title: "Professional Headshot",
      description: "High-resolution professional headshot suitable for press releases and official publications.",
      category: "portrait",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/headshot.jpg",
      resolution: "4000 × 6000 px",
      fileSize: "8.2 MB",
      format: "JPEG"
    },
    {
      id: 2,
      title: "Speaking at Conference",
      description: "Prachi Kaushik delivering a keynote address at the National Women's Leadership Summit.",
      category: "event",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/conference.jpg",
      resolution: "5000 × 3333 px",
      fileSize: "6.7 MB",
      format: "JPEG"
    },
    {
      id: 3,
      title: "Community Workshop",
      description: "Engaging with women during a menstrual health awareness workshop in rural India.",
      category: "workshop",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/workshop.jpg",
      resolution: "4500 × 3000 px",
      fileSize: "5.8 MB",
      format: "JPEG"
    },
    {
      id: 4,
      title: "Vyomini Foundation Team",
      description: "Group photo with the Vyomini Social Foundation team and volunteers.",
      category: "team",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/team.jpg",
      resolution: "6000 × 4000 px",
      fileSize: "9.1 MB",
      format: "JPEG"
    },
    {
      id: 5,
      title: "Field Visit - Rural Area",
      description: "On-ground visit to project sites in rural communities.",
      category: "field",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/field.jpg",
      resolution: "4000 × 6000 px",
      fileSize: "7.5 MB",
      format: "JPEG"
    },
    {
      id: 6,
      title: "Media Interaction",
      description: "Engaging with journalists and media representatives.",
      category: "media",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/media.jpg",
      resolution: "5000 × 3333 px",
      fileSize: "6.3 MB",
      format: "JPEG"
    },
    {
      id: 7,
      title: "Award Ceremony",
      description: "Receiving recognition for social entrepreneurship and women empowerment work.",
      category: "award",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/award.jpg",
      resolution: "4500 × 3000 px",
      fileSize: "5.9 MB",
      format: "JPEG"
    },
    {
      id: 8,
      title: "Casual Portrait",
      description: "Informal portrait suitable for website profiles and social media.",
      category: "portrait",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/casual.jpg",
      resolution: "4000 × 6000 px",
      fileSize: "8.0 MB",
      format: "JPEG"
    },
    {
      id: 9,
      title: "Training Session",
      description: "Conducting skill development training for women entrepreneurs.",
      category: "workshop",
      image: "/api/placeholder/600/400",
      downloadUrl: "/download/training.jpg",
      resolution: "5000 × 3333 px",
      fileSize: "6.5 MB",
      format: "JPEG"
    }
  ];

  const categories = [
    { id: "all", name: "All Images", icon: <Image className="w-4 h-4" /> },
    { id: "portrait", name: "Portraits", icon: <Image className="w-4 h-4" /> },
    { id: "event", name: "Events", icon: <Image className="w-4 h-4" /> },
    { id: "workshop", name: "Workshops", icon: <Image className="w-4 h-4" /> },
    { id: "team", name: "Team Photos", icon: <Image className="w-4 h-4" /> },
    { id: "field", name: "Field Visits", icon: <Image className="w-4 h-4" /> },
    { id: "media", name: "Media Interactions", icon: <Image className="w-4 h-4" /> },
    { id: "award", name: "Awards", icon: <Image className="w-4 h-4" /> }
  ];

  // Filter images based on category and search query
  const filteredImages = stockImages.filter(image => {
    const matchesCategory = activeCategory === "all" || image.category === activeCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          image.description.toLowerCase().includes(searchQuery.toLowerCase());
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

  return (
    <div className="bg-secondary min-h-screen pt-20 pb-16">
      <NavBar />
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Stock Images
          </h1>
          <p className="satoshi-regular text-lg md:text-xl text-text max-w-3xl mx-auto">
            High-quality images of Prachi Kaushik available for media use, publications, and promotional materials.
          </p>
        </motion.div>

        {/* Search, Filter and View Controls */}
        <motion.div 
          className="bg-white rounded-2xl customShadow p-6 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:flex-1 lg:max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-primary text-white" : "bg-gray-100 text-text hover:bg-gray-200"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-primary text-white" : "bg-gray-100 text-text hover:bg-gray-200"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter - Mobile */}
            <div className="lg:hidden w-full">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
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
            <div className="hidden lg:flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 satoshi-medium rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-secondary"
                      : "bg-gray-100 text-text hover:bg-gray-200"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Images Grid/List View */}
        {filteredImages.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={fadeUp}
                custom={index}
                className={`bg-white rounded-2xl customShadow overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
              >
                {/* Image */}
                <div className={`overflow-hidden ${viewMode === "list" ? "md:w-1/3" : ""}`}>
                  <img
                    src={image.image}
                    alt={image.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === "list" ? "h-64 md:h-full" : "h-64"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className={`p-6 ${viewMode === "list" ? "md:w-2/3" : ""}`}>
                  {/* Category */}
                  <span className="inline-block px-3 py-1 satoshi-medium text-xs bg-primary/10 text-primary rounded-full mb-4">
                    {categories.find(cat => cat.id === image.category)?.name}
                  </span>

                  {/* Title */}
                  <h2 className="satoshi-bold text-xl text-text mb-3 group-hover:text-primary transition-colors">
                    {image.title}
                  </h2>

                  {/* Description */}
                  <p className="satoshi-regular text-gray-600 mb-4">
                    {image.description}
                  </p>

                  {/* Image Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div>
                      <span className="satoshi-medium">Resolution:</span>
                      <p>{image.resolution}</p>
                    </div>
                    <div>
                      <span className="satoshi-medium">Format:</span>
                      <p>{image.format}</p>
                    </div>
                    <div>
                      <span className="satoshi-medium">File Size:</span>
                      <p>{image.fileSize}</p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="flex gap-3">
                    {/* Download Button */}
                    <a
                      href={image.downloadUrl}
                      download
                      className="group/button relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
                        Download
                      </span>
                      <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                                     transition-transform duration-300 ease-out group-hover/button:scale-x-100"></span>
                      <Download className="w-4 h-4 relative z-10" />
                    </a>
                    
                    {/* Preview Button */}
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="group/view relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg border border-gray-200"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover/view:text-white">
                        Preview
                      </span>
                      <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                                     transition-transform duration-300 ease-out group-hover/view:scale-x-100"></span>
                      <ExternalLink className="w-4 h-4 relative z-10" />
                    </button>
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
              <h3 className="satoshi-bold text-2xl text-text mb-4">No images found</h3>
              <p className="satoshi-regular text-gray-600 mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              {/* Clear Filters Button */}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="group/clear relative overflow-hidden px-6 py-3 satoshi-bold rounded-lg"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover/clear:text-white">
                  Clear Filters
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                             transition-transform duration-300 ease-out group-hover/clear:scale-x-100"></span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredImages.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center mt-12"
          >
            <button className="group/loadmore relative overflow-hidden px-8 py-3 satoshi-bold rounded-lg border-2 border-primary">
              <span className="relative z-10 transition-colors duration-300 group-hover/loadmore:text-white">
                Load More Images
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                           transition-transform duration-300 ease-out group-hover/loadmore:scale-x-100"></span>
            </button>
          </motion.div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="satoshi-bold text-xl text-text mb-2">{selectedImage.title}</h3>
              <p className="satoshi-regular text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex gap-3">
                <a
  href={image.downloadUrl}
  download
  className="group/button relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg border-2 border-primary"
>
  <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
    Download
  </span>
  <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                   transition-transform duration-300 ease-out group-hover/button:scale-x-100"></span>
  <Download className="w-4 h-4 relative z-10" />
</a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default StockImagesGallery;