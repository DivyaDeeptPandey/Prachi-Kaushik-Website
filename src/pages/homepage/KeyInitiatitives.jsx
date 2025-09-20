import React from 'react';
import { motion } from 'framer-motion';

// Import images - you'll need to add these to your assets
import mhmImage from '../../assets/initiatives/scroll-pic6.jpg';
import entrepreneurshipImage from '../../assets/initiatives/scroll-pic6.jpg';
import communityImage from '../../assets/initiatives/scroll-pic6.jpg';

const InitiativesPreview = () => {
  const initiatives = [
    {
      title: "Menstrual Health & Hygiene",
      description: "Breaking taboos and ensuring access to safe, affordable sanitary products for millions of women.",
      image: mhmImage,
      link: "/initiatives#menstrual-health",
      stats: "2.5M+ Women Educated",
      alt: "Prachi Kaushik conducting a menstrual health workshop with rural women"
    },
    {
      title: "Women Entrepreneurship",
      description: "Creating financially independent women through incubation, training, and sustainable business models.",
      image: entrepreneurshipImage,
      link: "/initiatives#economic-empowerment",
      stats: "10K+ Entrepreneurs Created",
      alt: "Prachi Kaushik training women entrepreneurs at a Vyomini incubation center"
    },
    {
      title: "Community Development",
      description: "Organizing on-ground health camps, sanitation drives, and holistic community development programs.",
      image: communityImage,
      link: "/initiatives#community-development",
      stats: "400+ Health Camps",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    },
    {
      title: "Youth Empowerment",
      description: "Organizing on-ground health camps, sanitation drives, and holistic community development programs.",
      image: communityImage,
      link: "/initiatives#community-development",
      stats: "400+ Health Camps",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    },
    {
      title: "Voice against, violence against women",
      description: "Organizing on-ground health camps, sanitation drives, and holistic community development programs.",
      image: communityImage,
      link: "/initiatives#community-development",
      stats: "400+ Health Camps",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    },
    {
      title: "Community Development",
      description: "Organizing on-ground health camps, sanitation drives, and holistic community development programs.",
      image: communityImage,
      link: "/initiatives#community-development",
      stats: "400+ Health Camps",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    }
  ];

  return (

    <div className='bg-secondary'>
      <section className="bg-white rounded-tr-[8rem] rounded-br-[8rem] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="h-1 bg-primary rounded-full mx-auto mb-4"
            style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
          ></div>
          {/* Section Header */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2
              className="satoshi-bold text-heading-md md:text-5xl text-primary mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Key Initiatives
            </motion.h2>

            <motion.p
              className="satoshi-medium text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Driving change through focused, sustainable programs that create lasting impact at the grassroots level.
            </motion.p>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="bg-secondary border-b-5 border-primary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image - Most important for credibility */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={initiative.image}
                    alt={initiative.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="satoshi-bold text-xl md:text-2xl text-primary mb-4">
                    {initiative.title}
                  </h3>

                  {/* Description */}
                  <p className="satoshi-regular text-gray-600 mb-6 flex-grow">
                    {initiative.description}
                  </p>
                  <div className='border-t-2 w-full border-primary mb-5'></div>
                  {/* Stats */}
                  <div className="mb-6">
                    <p className="satoshi-medium text-primary text-sm md:text-base">
                      {initiative.stats}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <a
                    href={initiative.link}
                    className="mt-auto w-35 inline-flex items-center satoshi-regular text-sm bg-primary text-secondary px-5 py-2.5 rounded-lg shadow-md 
             transition-all duration-300 group/button
             hover:bg-primary-20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>

                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/initiatives"
              className="inline-flex items-center satoshi-medium bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Explore All Initiatives
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default InitiativesPreview;