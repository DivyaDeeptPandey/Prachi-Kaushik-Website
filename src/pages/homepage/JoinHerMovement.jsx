import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  // The four ways to contribute
  const contributionMethods = [
    {
      title: "Become a Change Maker",
      description: "Become a MHM advocate educator and trainer.",
      icon: ( 
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      ),
      link: "/contact?subject=role-model",
      linkText: "Share Your Influence"
    },
    {
      title: "Join Her Campaign",
      description: "Impart your valuable skills in entrepreneurship, digital literacy, or soft skills to empower women at the grassroots level.",
      icon: ( 
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "/contact?subject=trainer",
      linkText: "Empower Through Skills"
    },
    {
      title: "Share Your Story",
      description: "Inspire others by sharing your journey of overcoming challenges. Your story can light the path for someone else.",
      icon: ( 
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      link: "/contact?subject=story",
      linkText: "Amplify Voices"
    },
    {
      title: "Volunteer",
      description: "Dedicate your time and energy to health camps, awareness drives, or training sessions. Every hour counts.",
      icon: ( 
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      link: "/contact?subject=volunteer",
      linkText: "Donate Your Time"
    },
  ];

  // Variants for section header
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Variants for cards container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white" id="join-campaign">
      <section className="bg-primary py-16 md:py-24 px-4 md:px-8 text-secondary">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2
              className="satoshi-bold text-3xl md:text-4xl mb-6 text-heading-md text-secondary"
              variants={childVariants}
            >
              Join Her Movement
            </motion.h2>
            <motion.p
              className="satoshi-regular text-xl max-w-3xl mx-auto opacity-90 text-secondary"
              variants={childVariants}
            >
              The journey to empower millions continues, and it needs you. Find your role in this transformative mission.
            </motion.p>
          </motion.div>

          {/* Contribution Methods Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contributionMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-secondary backdrop-blur-sm p-6 rounded-xl border border-primary flex flex-col items-center text-center group hover:bg-primary-20 transition-all duration-500"
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="satoshi-bold text-lg mb-3">{method.title}</h3>
                <p className="satoshi-regular text-sm mb-5 flex-grow opacity-90">
                  {method.description}
                </p>
                <Link
                  to={method.link}
                  className="satoshi-medium text-sm border border-secondary bg-primary text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  {method.linkText}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinalCTA;
