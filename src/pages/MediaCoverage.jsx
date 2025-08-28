import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Calendar, ExternalLink, Newspaper, Award, TrendingUp } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const MediaCoverage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Sample media coverage data - replace with actual articles
    const mediaArticles = [
        {
            id: 1,
            title: "Prachi Kaushik: Empowering Rural Women Through Social Entrepreneurship",
            excerpt: "An in-depth feature on how Prachi Kaushik is transforming lives through her innovative approaches to women's empowerment and sustainable development.",
            date: "2023-11-15",
            publisher: "The Economic Times",
            category: "feature",
            image: "/api/placeholder/400/250",
            url: "https://economictimes.com/article1",
            readTime: "5 min read",
            highlights: ["Social Entrepreneurship", "Women Empowerment"]
        },
        {
            id: 2,
            title: "Breaking Taboos: How One Woman is Changing Menstrual Health in India",
            excerpt: "Coverage of Prachi's groundbreaking work in menstrual health education and her efforts to eliminate stigma around women's health issues.",
            date: "2023-10-22",
            publisher: "India Today",
            category: "health",
            image: "/api/placeholder/400/250",
            url: "https://indiatoday.com/article2",
            readTime: "7 min read",
            highlights: ["Menstrual Health", "Education"]
        },
        {
            id: 3,
            title: "Vyomini Foundation Recognized for Excellence in Social Innovation",
            excerpt: "News article covering the national award received by Vyomini Foundation for its innovative approaches to community development.",
            date: "2023-09-05",
            publisher: "The Hindu",
            category: "news",
            image: "/api/placeholder/400/250",
            url: "https://thehindu.com/article3",
            readTime: "4 min read",
            highlights: ["Awards", "Social Innovation"]
        },
        {
            id: 4,
            title: "From Grassroots to National Impact: The Prachi Kaushik Story",
            excerpt: "Comprehensive profile tracing Prachi's journey from humble beginnings to becoming a nationally recognized social entrepreneur.",
            date: "2023-08-18",
            publisher: "Forbes India",
            category: "profile",
            image: "/api/placeholder/400/250",
            url: "https://forbesindia.com/article4",
            readTime: "10 min read",
            highlights: ["Profile", "Journey"]
        },
        {
            id: 5,
            title: "COVID-19 Response: How Women Leaders Stepped Up",
            excerpt: "Article highlighting Prachi's leadership during the pandemic and how she mobilized resources to support vulnerable communities.",
            date: "2023-07-12",
            publisher: "Times of India",
            category: "news",
            image: "/api/placeholder/400/250",
            url: "https://timesofindia.com/article5",
            readTime: "6 min read",
            highlights: ["COVID Response", "Leadership"]
        },
        {
            id: 6,
            title: "Innovative Approaches to Rural Women's Entrepreneurship",
            excerpt: "Analysis of Prachi's unique models for creating sustainable entrepreneurship opportunities for women in rural areas.",
            date: "2023-06-28",
            publisher: "Business Standard",
            category: "business",
            image: "/api/placeholder/400/250",
            url: "https://business-standard.com/article6",
            readTime: "8 min read",
            highlights: ["Entrepreneurship", "Rural Development"]
        },
        {
            id: 7,
            title: "Education as a Tool for Social Change: Insights from Prachi Kaushik",
            excerpt: "Coverage of Prachi's views on how education can transform communities and create lasting social impact.",
            date: "2023-05-15",
            publisher: "Education World",
            category: "education",
            image: "/api/placeholder/400/250",
            url: "https://educationworld.com/article7",
            readTime: "5 min read",
            highlights: ["Education", "Social Change"]
        },
        {
            id: 8,
            title: "Award-Winning Social Entrepreneur Shares Vision for Gender Equality",
            excerpt: "Post-event coverage of Prachi's keynote address at the National Women's Leadership Summit.",
            date: "2023-04-10",
            publisher: "SheThePeople",
            category: "event",
            image: "/api/placeholder/400/250",
            url: "https://shethepeople.com/article8",
            readTime: "4 min read",
            highlights: ["Gender Equality", "Leadership"]
        }
    ];

    const categories = [
        { id: "all", name: "All Articles", icon: <Newspaper className="w-4 h-4" /> },
        { id: "news", name: "News", icon: <Newspaper className="w-4 h-4" /> },
        { id: "health", name: "Health", icon: <TrendingUp className="w-4 h-4" /> },
        { id: "business", name: "Business", icon: <TrendingUp className="w-4 h-4" /> },
        { id: "education", name: "Education", icon: <TrendingUp className="w-4 h-4" /> },
        { id: "event", name: "Events", icon: <Award className="w-4 h-4" /> }
    ];

    // Filter articles based on category and search query
    const filteredArticles = mediaArticles.filter(article => {
        const matchesCategory = activeCategory === "all" || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.highlights.some(highlight =>
                highlight.toLowerCase().includes(searchQuery.toLowerCase()));
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
                        Media Coverage
                    </h1>
                    <p className="satoshi-regular text-lg md:text-xl text-text max-w-3xl mx-auto">
                        Featured articles, interviews, and news coverage highlighting Prachi Kaushik's work in women empowerment, social entrepreneurship, and community development.
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
                        <div className="satoshi-bold text-3xl text-primary mb-2">{mediaArticles.length}+</div>
                        <div className="satoshi-regular text-text">Articles</div>
                    </div>
                    <div className="bg-white rounded-2xl customShadow p-6 text-center">
                        <div className="satoshi-bold text-3xl text-primary mb-2">15+</div>
                        <div className="satoshi-regular text-text">Publications</div>
                    </div>
                    <div className="bg-white rounded-2xl customShadow p-6 text-center">
                        <div className="satoshi-bold text-3xl text-primary mb-2">5+</div>
                        <div className="satoshi-regular text-text">Categories</div>
                    </div>
                    <div className="bg-white rounded-2xl customShadow p-6 text-center">
                        <div className="satoshi-bold text-3xl text-primary mb-2">2020-2025</div>
                        <div className="satoshi-regular text-text">Coverage Period</div>
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
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Input - Now takes full width on mobile, constrained on larger screens */}
                        <div className="relative w-full lg:flex-1 lg:max-w-xl">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles, publications, or topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
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
                                    className={`flex items-center gap-2 px-4 py-2 satoshi-medium rounded-full transition-colors ${activeCategory === category.id
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

                {/* Articles Grid */}
                {filteredArticles.length > 0 ? (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                variants={fadeUp}
                                custom={index}
                                className="bg-white rounded-2xl customShadow overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Article Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Article Content */}
                                <div className="p-6">
                                    {/* Category and Publisher */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="inline-block px-2 py-1 satoshi-medium text-xs bg-primary/10 text-primary rounded-full">
                                            {categories.find(cat => cat.id === article.category)?.name}
                                        </span>
                                        <span className="satoshi-medium">{article.publisher}</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="satoshi-bold text-xl text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="satoshi-regular text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {article.highlights.map((highlight, i) => (
                                            <span key={i} className="inline-block px-2 py-1 satoshi-medium text-xs bg-secondary text-text rounded-full">
                                                #{highlight}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Meta Information */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(article.date).toLocaleDateString()}</span>
                                        </div>
                                        <span>{article.readTime}</span>
                                    </div>

                                    {/* Read Article Button */}
                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/button relative inline-flex items-center gap-2 satoshi-bold overflow-hidden px-4 py-2 rounded-lg"
                                        >
                                            {/* Background element that slides in on hover */}
                                            <span className="absolute inset-0 bg-primary transform -translate-x-full group-hover/button:translate-x-0 transition-transform duration-300 z-0"></span>

                                            {/* Text */}
                                            <span className="relative z-10 transition-colors duration-300 group-hover/button:text-white">
                                                Read Article
                                            </span>

                                            {/* External link icon */}
                                            <ExternalLink className="w-4 h-4 transform group-hover/button:translate-x-1 transition-transform duration-300 relative z-10" />
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

export default MediaCoverage;