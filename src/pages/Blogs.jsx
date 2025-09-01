import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Filter } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Empowering Rural Women Through Sustainable Entrepreneurship",
      excerpt: "How we're creating sustainable business models that allow women in rural communities to become self-reliant while driving local economic growth.",
      date: "2023-11-15",
      author: "Prachi Kaushik",
      category: "social-enterprise",
      image: "/api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Breaking Menstrual Taboos: A Journey of Dignity and Health",
      excerpt: "The challenges and triumphs in our mission to educate millions about menstrual hygiene and break deep-rooted cultural taboos.",
      date: "2023-10-22",
      author: "Prachi Kaushik",
      category: "menstrual-health",
      image: "/api/placeholder/400/250",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "From Survival to Transformation: The Vyomini Story",
      excerpt: "The founding journey of Vyomini Social Foundation and how we've impacted over 100,000 women across India.",
      date: "2023-09-05",
      author: "Prachi Kaushik",
      category: "social-enterprise",
      image: "/api/placeholder/400/250",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Community Leadership During COVID-19: Lessons Learned",
      excerpt: "How our network of women leaders pivoted to produce and distribute essential supplies during the pandemic.",
      date: "2023-08-18",
      author: "Prachi Kaushik",
      category: "community",
      image: "/api/placeholder/400/250",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The 3A Framework: Awareness, Accessibility, Affordability in Menstrual Health",
      excerpt: "Our comprehensive approach to tackling menstrual health issues through education, product access, and economic models.",
      date: "2023-07-12",
      author: "Prachi Kaushik",
      category: "menstrual-health",
      image: "/api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Building Ecosystems for Women Entrepreneurs",
      excerpt: "How we're creating complete support systems—from training to market access—for women micro-entrepreneurs.",
      date: "2023-06-28",
      author: "Prachi Kaushik",
      category: "entrepreneurship",
      image: "/api/placeholder/400/250",
      readTime: "9 min read"
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "social-enterprise", name: "Social Enterprise" },
    { id: "menstrual-health", name: "Menstrual Health" },
    { id: "community", name: "Community Development" },
    { id: "entrepreneurship", name: "Entrepreneurship" }
  ];

  // Filter blog posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
            Writings by Prachi Kaushik
          </h1>
          <p className="satoshi-regular text-lg md:text-xl text-text max-w-3xl mx-auto">
            Insights, experiences, and perspectives from the forefront of women's empowerment, 
            social entrepreneurship, and community development.
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
                placeholder="Search articles..."
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
                  className={`px-4 py-2 satoshi-medium rounded-full transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-text hover:bg-gray-200"
                  }`}
                  style={activeCategory === category.id ? { color: 'white' } : {}}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                custom={index}
                className="bg-white rounded-2xl customShadow overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 satoshi-medium text-xs bg-primary/10 text-primary rounded-full mb-4">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>

                  {/* Title */}
                  <h2 className="satoshi-bold text-xl text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="satoshi-regular text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="satoshi-medium text-sm text-text">{post.author}</span>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={`/blog/${post.id}`}
                      className="group/button relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg"
                    >
                      {/* Background element that slides in on hover */}
                      <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 z-0"></span>
                      
                      {/* Text */}
                      <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
                        Read More
                      </span>
                      
                      {/* Arrow icon */}
                      <ArrowRight className="w-4 h-4 transform group-hover/button:text-white transition-transform duration-300 relative z-10" />
                    </a>
                  </div>
                </div>
              </motion.article>
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
              <h3 className="satoshi-bold text-2xl text-text mb-4">No articles found</h3>
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

export default BlogShowcase;