import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Calendar, ExternalLink, Newspaper } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MediaCoverage = () => {
    const [activeYear, setActiveYear] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Real media coverage data with all the articles you provided
    const mediaArticles = [
        {
            id: 1,
            title: "Top 5 Women-Founded Startups Empowering E-commerce Landscape",
            excerpt: "Prachi Kaushik's Vyomini featured among top women-founded startups transforming the e-commerce and social entrepreneurship space.",
            date: "2023-11-15",
            publisher: "Silicon India",
            url: "https://www.siliconindia.com/news/startups/top-5-womenfounded-established-startups-largely-empowering-ecommerce-landscape-nid-235721-cid-19.html",
            readTime: "5 min read",
            highlights: ["Startups", "E-commerce", "Women Entrepreneurship"]
        },
        {
            id: 2,
            title: "Breaking the Cloth Barrier: Encouraging Safe Menstrual Practices in Rural India",
            excerpt: "Coverage of Prachi's groundbreaking work in eliminating stigma and promoting safe menstrual practices in rural communities.",
            date: "2023-10-22",
            publisher: "Hindustan Times Telugu",
            url: "https://telugu.hindustantimes.com/lifestyle/breaking-the-cloth-barrier-encouraging-safe-menstrual-practices-in-rural-india-121748433649425.html",
            readTime: "7 min read",
            highlights: ["Menstrual Health", "Rural India", "Hygiene"]
        },
        {
            id: 3,
            title: "Menstrual Health Experience Matters in Every System",
            excerpt: "Insightful article on how menstrual health impacts various systems and Prachi's approach to creating comprehensive solutions.",
            date: "2023-09-05",
            publisher: "CX Quest",
            url: "https://cxquest.com/menstrual-health-experience-matters-in-every-system/",
            readTime: "6 min read",
            highlights: ["Systemic Change", "Health Equity", "Awareness"]
        },
        {
            id: 4,
            title: "Prachi Kaushik Champions Rural Empowerment at IIT Delhi's BioEnviroCon 2025",
            excerpt: "Coverage of Prachi's impactful presentation on rural development and community outreach at prestigious IIT Delhi conference.",
            date: "2024-03-08",
            publisher: "Business News This Week",
            url: "https://businessnewsthisweek.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/",
            readTime: "4 min read",
            highlights: ["IIT Delhi", "Rural Development", "Conference"]
        },
        {
            id: 5,
            title: "Ending Period Stigma and Empowering Millions: Prachi Kaushik's Journey",
            excerpt: "Comprehensive feature on Prachi's journey to eliminate menstrual stigma and empower women across India.",
            date: "2023-12-10",
            publisher: "HerZindagi",
            url: "https://www.herzindagi.com/inspiration/prachi-kaushik-ending-period-stigma-and-empowering-millions-article-274504",
            readTime: "10 min read",
            highlights: ["Journey", "Stigma Elimination", "Women Empowerment"]
        },
        {
            id: 6,
            title: "Social Entrepreneur Prachi Kaushik on Menstrual Health and Women Empowerment",
            excerpt: "In-depth interview with Prachi Kaushik discussing her work in menstrual health and broader women empowerment initiatives.",
            date: "2022-10-15",
            publisher: "YourStory",
            url: "https://yourstory.com/socialstory/2022/10/social-entrepreneur-prachi-kaushik-menstrual-health-women-empowerment",
            readTime: "8 min read",
            highlights: ["Interview", "Social Entrepreneurship", "Impact"]
        },
        {
            id: 7,
            title: "Vyomini Distributes Hygiene Kits to 1000 Women, Strengthening Health and Dignity",
            excerpt: "Coverage of Vyomini's initiative to distribute hygiene kits to 1000 women, promoting health and dignity.",
            date: "2024-02-28",
            publisher: "BW Healthcare World",
            url: "https://www.bwhealthcareworld.com/article/vyomini-social-enterprise-distributes-hygiene-kits-to-1000-women-strengthening-health-and-dignity-551591",
            readTime: "3 min read",
            highlights: ["Hygiene Kits", "Health", "Dignity"]
        },
        {
            id: 8,
            title: "How Can Women Enter Male-Dominated Jobs in 2025",
            excerpt: "Insightful article featuring Prachi's perspectives on breaking gender barriers in traditionally male-dominated fields.",
            date: "2024-03-05",
            publisher: "Silicon India Startups",
            url: "https://startup.siliconindia.com/startup_talks/how-can-women-enter-maledominated-jobs-in-2025-nwid-48737.html",
            readTime: "7 min read",
            highlights: ["Gender Equality", "Employment", "2025 Trends"]
        },
        {
            id: 9,
            title: "Project Swabhimaan: Empowering Women in Unorganized Sector on Menstrual Hygiene Day",
            excerpt: "Coverage of Project Swabhimaan launch aimed at empowering women working in the unorganized sector.",
            date: "2024-05-28",
            publisher: "MedGate Today",
            url: "https://medgatetoday.com/vyomini-social-enterprise-launches-project-swabhimaan-to-empower-women-working-in-unorganized-sector-on-menstrual-hygiene-day/",
            readTime: "5 min read",
            highlights: ["Project Swabhimaan", "Unorganized Sector", "Menstrual Hygiene Day"]
        },
        {
            id: 10,
            title: "Women Supporting Women: The Importance of Female-Led Enterprises",
            excerpt: "Feature article discussing the significance of female-led enterprises with insights from Prachi Kaushik.",
            date: "2024-03-10",
            publisher: "OpedMoped",
            url: "https://opedmoped.com/business/women-supporting-women-the-importance-of-female-led-enterprises/",
            readTime: "6 min read",
            highlights: ["Female Leadership", "Enterprise", "Women Support"]
        },
        {
            id: 11,
            title: "Prachi Kaushik Receives Social Women Entrepreneur Award",
            excerpt: "News coverage of Prachi receiving the Social Women Entrepreneur Award for her work in menstrual hygiene management.",
            date: "2023-11-20",
            publisher: "Startup Success Stories",
            url: "https://startupsuccessstories.in/prachi-kaushik-receives-social-women-entrepreneur-award-for-empowering-women-in-menstrual-hygiene-management/",
            readTime: "4 min read",
            highlights: ["Award", "Recognition", "Achievement"]
        },
        {
            id: 12,
            title: "Resources and Training Opportunities for Women Entrepreneurs in Social Enterprises",
            excerpt: "Comprehensive guide featuring Vyomini's programs and resources for women entrepreneurs in social enterprises.",
            date: "2024-01-15",
            publisher: "Startup Talky",
            url: "https://startuptalky.com/resources-training-opportunities-women-entrepreneurs-in-social-enterprises/",
            readTime: "9 min read",
            highlights: ["Resources", "Training", "Entrepreneurship"]
        },
        {
            id: 13,
            title: "Prachi Kaushik on Menstrual Hygiene Day",
            excerpt: "Interview with Prachi Kaushik discussing the importance of Menstrual Hygiene Day and ongoing initiatives.",
            date: "2024-05-28",
            publisher: "SheThePeople Hindi",
            url: "https://hindi.shethepeople.tv/interview/prachi-kaushik-on-menstrual-hygiene-day-4650847",
            readTime: "6 min read",
            highlights: ["Interview", "Menstrual Hygiene Day", "Awareness"]
        },
        {
            id: 14,
            title: "Women Show the Way in Menstrual Hygiene and Entrepreneurship",
            excerpt: "Feature on women entrepreneurs making strides in menstrual hygiene products and services.",
            date: "2024-04-20",
            publisher: "Deccan Chronicle",
            url: "https://www.deccanchronicle.com/news/chinna-golconda-women-show-the-way-in-menstrual-hygiene-and-entrepreneurship-896033",
            readTime: "7 min read",
            highlights: ["Entrepreneurship", "Success Stories", "Community Impact"]
        },
        {
            id: 15,
            title: "Your Hygiene Regime Can Impact Your Periods",
            excerpt: "Educational article on how hygiene practices affect menstrual health, featuring insights from Prachi Kaushik.",
            date: "2024-03-25",
            publisher: "The Daily Guardian",
            url: "https://thedailyguardian.com/your-hygiene-regime-can-impact-your-periods/",
            readTime: "5 min read",
            highlights: ["Health Education", "Hygiene Practices", "Women's Health"]
        },
        {
            id: 16,
            title: "Prachi Kaushik is Fostering Economic Sustainability",
            excerpt: "Feature on Prachi Kaushik's work in creating sustainable economic opportunities through social entrepreneurship.",
            date: "2024-01-25",
            publisher: "BW Disrupt",
            url: "https://bwdisrupt.com/article/vyomini-social-enterprises-prachi-kaushik-is-fostering-economic-sustainability-518849",
            readTime: "6 min read",
            highlights: ["Economic Sustainability", "Social Entrepreneurship", "Impact"]
        },

        {
            id: 17,
            title: "The Glitz Super Woman: Prachi Kaushik, Founder & Director of Vyomini Social Enterprise",
            excerpt: "Profile feature on Prachi Kaushik as a recognized super woman in social entrepreneurship.",
            date: "2024-03-15",
            publisher: "The Glitz",
            url: "https://theglitz.media/theglitz-super-woman-prachi-kaushik-founder-director-vyomini-social-enterprise/",
            readTime: "8 min read",
            highlights: ["Profile", "Recognition", "Women Leadership"]
        },
        {
            id: 18,
            title: "Abhaya Bravery Awards 2025 Honours Courageous Individuals",
            excerpt: "Coverage of the Abhaya Bravery Awards where Prachi Kaushik was honored for her courageous work in social entrepreneurship.",
            date: "2025-03-08",
            publisher: "News Karnataka",
            url: "https://newskarnataka.com/karnataka/bengaluru/abhaya-bravery-awards-2025-honours-courageous-individuals-and-promotes-a-rape-free-india-movement/08032025/",
            readTime: "5 min read",
            highlights: ["Award", "Recognition", "Bravery"]
        }
    ];

    // Extract unique years from articles
    const years = ["all", ...new Set(mediaArticles.map(article => 
        new Date(article.date).getFullYear().toString()
    ))].sort((a, b) => b - a);

    // Filter articles based on year and search query
    const filteredArticles = mediaArticles.filter(article => {
        const articleYear = new Date(article.date).getFullYear().toString();
        const matchesYear = activeYear === "all" || articleYear === activeYear;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.highlights.some(highlight =>
                highlight.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesYear && matchesSearch;
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
                    <p className="satoshi-regular text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
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
                        <div className="satoshi-bold text-3xl text-primary mb-2">{mediaArticles.length}</div>
                        <div className="satoshi-regular text-gray-700">Articles</div>
                    </div>
                    <div className="bg-white rounded-2xl customShadow p-6 text-center">
                        <div className="satoshi-bold text-3xl text-primary mb-2">20+</div>
                        <div className="satoshi-regular text-gray-700">Publications</div>
                    </div>
                    <div className="bg-white rounded-2xl customShadow p-6 text-center">
                        <div className="satoshi-bold text-3xl text-primary mb-2">{years.length - 1}</div>
                        <div className="satoshi-regular text-gray-700">Years</div>
                    </div>
                    <div className="bg-white rounded-2xl customShadow p-6 text-center">
                        <div className="satoshi-bold text-3xl text-primary mb-2">2022-2025</div>
                        <div className="satoshi-regular text-gray-700">Coverage Period</div>
                    </div>
                </motion.div>

                {/* Search and Year Filter Section */}
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
                                placeholder="Search articles, publications, or topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        {/* Year Filter - Mobile */}
                        <div className="lg:hidden w-full">
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                                <select
                                    value={activeYear}
                                    onChange={(e) => setActiveYear(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 satoshi-regular border border-gray-200 rounded-lg appearance-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                                >
                                    {years.map(year => (
                                        <option key={year} value={year}>
                                            {year === "all" ? "All Years" : year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Year Filter - Desktop */}
                        <div className="hidden lg:flex flex-wrap gap-2">
                            {years.map(year => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    className={`flex items-center gap-2 px-4 py-2 satoshi-medium rounded-full transition-colors ${activeYear === year
                                            ? "bg-primary text-secondary"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>{year === "all" ? "All Years" : year}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Yearly Article Count */}
                {activeYear === "all" && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mb-8"
                    >
                        <div className="bg-primary/5 rounded-2xl p-6">
                            <h3 className="satoshi-bold text-xl text-primary mb-4">Articles by Year</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {years.filter(year => year !== "all").map(year => {
                                    const count = mediaArticles.filter(article => 
                                        new Date(article.date).getFullYear().toString() === year
                                    ).length;
                                    return (
                                        <div key={year} className="text-center">
                                            <div className="satoshi-bold text-2xl text-primary">{count}</div>
                                            <div className="satoshi-regular text-gray-700">{year}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}

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
                                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                        <Newspaper className="w-12 h-12 text-primary/50" />
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="p-6">
                                    {/* Year and Publisher */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <span className="inline-block px-2 py-1 satoshi-medium text-xs bg-primary/10 text-primary rounded-full">
                                            {new Date(article.date).getFullYear()}
                                        </span>
                                        <span className="satoshi-medium">{article.publisher}</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="satoshi-bold text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="satoshi-regular text-gray-600 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {article.highlights.map((highlight, i) => (
                                            <span key={i} className="inline-block px-2 py-1 satoshi-medium text-xs bg-secondary text-gray-700 rounded-full">
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
                                            <span className="relative z-10 transition-colors duration-300 text-primary group-hover/button:text-white">
                                                Read Article
                                            </span>

                                            {/* External link icon */}
                                            <ExternalLink className="w-4 h-4 text-primary transform group-hover/button:translate-x-1 group-hover/button:text-white transition-all duration-300 relative z-10" />
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
                            <h3 className="satoshi-bold text-2xl text-gray-900 mb-4">No articles found</h3>
                            <p className="satoshi-regular text-gray-600 mb-6">
                                Try adjusting your search or year filter to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveYear("all");
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

export default MediaCoverage;