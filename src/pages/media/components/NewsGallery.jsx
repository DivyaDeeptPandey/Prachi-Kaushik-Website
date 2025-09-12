import React from 'react';
import { motion } from 'framer-motion';

const NewsGallery = () => {
  const newsItems = [
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
        },
        {
            id: 22,
            title: "Menstrual Health Experience Matters in Every System",
            excerpt: "Insightful article highlighting why menstrual health matters across all systems and policies.",
            date: "2024-02-15",
            publisher: "CX Quest",
            url: "https://cxquest.com/menstrual-health-experience-matters-in-every-system/",
            readTime: "6 min read",
            highlights: ["MHM", "Health", "Policy"]
        },
        {
            id: 23,
            title: "How Far Has India Come in Ensuring Menstrual Hygiene?",
            excerpt: "Hindustan Times deep dive on the progress and challenges of menstrual hygiene in India.",
            date: "2024-04-22",
            publisher: "Hindustan Times",
            url: "https://www.hindustantimes.com/ht-insight/public-health/how-far-has-india-come-in-ensuring-menstrual-hygiene-101756618648410.html",
            readTime: "8 min read",
            highlights: ["MHM", "India", "Public Health"]
        },
        {
            id: 24,
            title: "Breaking the Cloth Barrier: Encouraging Safe Menstrual Practices in Rural India",
            excerpt: "Hindustan Times (Telugu) story on promoting safe menstrual practices in rural regions.",
            date: "2024-05-12",
            publisher: "Hindustan Times Telugu",
            url: "https://telugu.hindustantimes.com/lifestyle/breaking-the-cloth-barrier-encouraging-safe-menstrual-practices-in-rural-india-121748433649425.html",
            readTime: "7 min read",
            highlights: ["MHM", "Rural Health", "Awareness"]
        },
        {
            id: 25,
            title: "Prachi Kaushik: Vyomini and Menstrual Health",
            excerpt: "Exclusive interview with Prachi Kaushik on her work in menstrual health and Vyomini’s mission.",
            date: "2024-03-18",
            publisher: "SheThePeople",
            url: "https://www.shethepeople.tv/interviews/prachi-kaushik-vyomini-menstrual-health-2472939",
            readTime: "6 min read",
            highlights: ["MHM", "Interview", "Women Empowerment"]
        },
        {
            id: 26,
            title: "Prachi Kaushik: Ending Period Stigma and Empowering Millions",
            excerpt: "Her Zindagi feature on breaking menstrual stigma and empowering women through education.",
            date: "2024-03-25",
            publisher: "Her Zindagi",
            url: "https://www.herzindagi.com/inspiration/prachi-kaushik-ending-period-stigma-and-empowering-millions-article-274504",
            readTime: "6 min read",
            highlights: ["MHM", "Stigma", "Women Empowerment"]
        },
        {
            id: 27,
            title: "Prachi Kaushik on Menstrual Hygiene Day",
            excerpt: "SheThePeople Hindi interview on menstrual hygiene awareness and challenges.",
            date: "2024-05-28",
            publisher: "SheThePeople Hindi",
            url: "https://hindi.shethepeople.tv/interview/prachi-kaushik-on-menstrual-hygiene-day-4650847",
            readTime: "5 min read",
            highlights: ["MHM", "Awareness", "Interview"]
        },
        {
            id: 28,
            title: "Chinna Golconda Women Show the Way in Menstrual Hygiene and Entrepreneurship",
            excerpt: "Deccan Chronicle highlights women leading menstrual health and entrepreneurship initiatives.",
            date: "2024-06-02",
            publisher: "Deccan Chronicle",
            url: "https://www.deccanchronicle.com/news/chinna-golconda-women-show-the-way-in-menstrual-hygiene-and-entrepreneurship-896033",
            readTime: "7 min read",
            highlights: ["MHM", "Entrepreneurship", "Health"]
        },
        {
            id: 29,
            title: "Your Hygiene Regime Can Impact Your Periods",
            excerpt: "The Daily Guardian explores how personal hygiene practices affect menstrual health.",
            date: "2024-04-05",
            publisher: "The Daily Guardian",
            url: "https://thedailyguardian.com/your-hygiene-regime-can-impact-your-periods/",
            readTime: "5 min read",
            highlights: ["MHM", "Health", "Awareness"]
        },
        {
            id: 30,
            title: "Celebrating Menstruation and Puberty: A Guide to Menstrual Hygiene",
            excerpt: "HealthWire feature bridging knowledge gaps in menstrual health and puberty education.",
            date: "2024-04-12",
            publisher: "HealthWire",
            url: "https://healthwire.co/latest-news/celebrating-menstruation-and-puberty-a-guide-to-menstrual-hygiene-by-bridging-the-knowledge-gap/",
            readTime: "6 min read",
            highlights: ["MHM", "Education", "Awareness"]
        },

        // --- Media Coverage articles ---
        {
            id: 31,
            title: "Prachi Kaushik Champions Rural Empowerment at IIT Delhi’s BioEnviroCon 2025",
            excerpt: "Coverage of Prachi Kaushik’s impactful participation at IIT Delhi’s BioEnviroCon 2025.",
            date: "2025-02-20",
            publisher: "India Education Diary",
            url: "https://indiaeducationdiary.in/prachi-kaushik-enlightens-panel-on-rural-development-and-community-outreach-at-iit-delhis-bioenvirocon-2025/",
            readTime: "6 min read",
            highlights: ["Media Coverage", "Rural Development", "IIT Delhi"]
        },
        {
            id: 32,
            title: "Prachi Kaushik Champions Rural Empowerment at IIT Delhi’s BioEnviroCon 2025",
            excerpt: "Pni News coverage of Prachi Kaushik’s rural empowerment initiatives at IIT Delhi.",
            date: "2025-02-22",
            publisher: "Pni News",
            url: "https://www.pninews.com/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/",
            readTime: "6 min read",
            highlights: ["Media Coverage", "Rural Empowerment", "IIT Delhi"]
        },
        {
            id: 33,
            title: "Prada Sandal Scandal Lays Bare India’s Small Player Labour Woes",
            excerpt: "Business World analysis on labour challenges with mention of grassroots enterprises.",
            date: "2024-07-12",
            publisher: "Business World",
            url: "https://www.businessworld.in/article/prada-sandal-scandal-lays-bare-indias-small-player-labour-woes-564090",
            readTime: "7 min read",
            highlights: ["Media Coverage", "Labour Issues", "Business"]
        },
        {
            id: 34,
            title: "Top 5 Women-Founded Startups Empowering the E-commerce Landscape",
            excerpt: "Silicon India highlights women-founded startups making waves, including Vyomini.",
            date: "2024-08-05",
            publisher: "Silicon India",
            url: "https://www.siliconindia.com/news/startups/top-5-womenfounded-established-startups-largely-empowering-ecommerce-landscape-nid-235721-cid-19.html",
            readTime: "7 min read",
            highlights: ["Media Coverage", "Startups", "E-commerce"]
        },
        {
            id: 35,
            title: "Prachi Kaushik Champions Rural Empowerment at IIT Delhi’s BioEnviroCon 2025",
            excerpt: "Business News This Week feature on community empowerment at IIT Delhi’s BioEnviroCon.",
            date: "2025-02-24",
            publisher: "Business News This Week",
            url: "https://businessnewsthisweek.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/",
            readTime: "6 min read",
            highlights: ["Media Coverage", "Community", "IIT Delhi"]
        },
        {
            id: 36,
            title: "Prachi Kaushik Champions Rural Empowerment at IIT Delhi’s BioEnviroCon 2025",
            excerpt: "National Biz News story on rural empowerment initiatives by Prachi Kaushik.",
            date: "2025-02-25",
            publisher: "National Biz News",
            url: "https://nationalbiznews.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/",
            readTime: "6 min read",
            highlights: ["Media Coverage", "Rural Development", "IIT Delhi"]
        },
        {
            id: 37,
            title: "Prachi Kaushik Champions Rural Empowerment at IIT Delhi’s BioEnviroCon 2025",
            excerpt: "Business News For Profit coverage of BioEnviroCon 2025 and Prachi Kaushik’s contributions.",
            date: "2025-02-26",
            publisher: "Business News For Profit",
            url: "https://businessnewsforprofit.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/",
            readTime: "6 min read",
            highlights: ["Media Coverage", "Empowerment", "IIT Delhi"]
        },
        {
            id: 38,
            title: "Prachi Kaushik: Super Woman Awardee",
            excerpt: "The Glitz recognizes Prachi Kaushik as a Super Woman for her entrepreneurial and social impact.",
            date: "2025-03-01",
            publisher: "The Glitz Media",
            url: "https://theglitz.media/theglitz-super-woman-prachi-kaushik-founder-director-vyomini-social-enterprise/",
            readTime: "5 min read",
            highlights: ["Media Coverage", "Recognition", "Women Leadership"]
        }
    ];
    

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((news, index) => (
        <motion.article
          key={news.id}
          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -3 }}
        >
          {/* Publisher and Date */}
          <div className="flex items-center justify-between mb-3">
            <span className="satoshi-medium text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
              {news.publisher}
            </span>
            <span className="satoshi-regular text-xs text-gray-500">
              {formatDate(news.date)}
            </span>
          </div>

          {/* Title */}
          <h3 className="satoshi-bold text-lg text-gray-900 mb-3 line-clamp-3 leading-tight">
            {news.title}
          </h3>

          {/* Excerpt */}
          <p className="satoshi-regular text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {news.excerpt}
          </p>

          {/* Highlights/Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {news.highlights.slice(0, 3).map((highlight, i) => (
              <span
                key={i}
                className="satoshi-medium text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
              >
                #{highlight}
              </span>
            ))}
          </div>

          {/* Read Time and Link */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="satoshi-regular text-xs text-gray-500">
              {news.readTime}
            </span>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center satoshi-medium text-primary hover:text-primary-80 transition-colors duration-300 text-sm"
            >
              Read Article
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default NewsGallery;