import React from 'react';
import { motion } from 'framer-motion';

// Import images - you'll need to add these to your assets
import entrepreneurshipImage from '../../assets/initiatives/scroll-pic6.jpg';
import CommunityDevelopmentImg from '../../assets/initiatives/community_dev.jpg';
import voiceAgainstViolenceImg from '../../assets/initiatives/voice_against_voilence.jpg';
import menstrualHealthImg from '../../assets/initiatives/menstrual_health.jpg';
import youthEmpowermentImg from '../../assets/initiatives/youth_empowerment.jpg';
import advocacyImage from '../../assets/initiatives/avocacy_&_policy.jpg';

const InitiativesPreview = () => {
  const initiatives = [
    {
      title: "Menstrual Health & Hygiene",
      description: "Breaking taboos and ensuring access to safe, affordable sanitary products for millions of women.",
      image: menstrualHealthImg,
      link: "/initiatives#menstrual-health",
      stats: "3 M+ Women Educated",
      alt: "Prachi Kaushik conducting a menstrual health workshop with rural women"
    },
    {
      title: "Women Entrepreneurship",
      description: "Creating financially independent women through incubation, training, and sustainable business models.",
      image: entrepreneurshipImage,
      link: "/initiatives#economic-empowerment",
      stats: "10 K+ Entrepreneurs Created",
      alt: "Prachi Kaushik training women entrepreneurs at a Vyomini incubation center"
    },
    {
      title: "Community Development",
      description: "Organizing on-ground health camps, sanitation drives, and holistic community development programs.",
      image: CommunityDevelopmentImg,
      link: "/initiatives#community-development",
      stats: "15 K+ Workshops Conducted",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    },
    {
      title: "Youth Empowerment",
      description: "Under campus connect program youth engaged in positive thinking and nation building, thorugh field activities and awareness campaigns.",
      image: youthEmpowermentImg,
      link: "/initiatives#community-development",
      stats: "20 K+ Youth Empowered",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    },
    {
      title: "Voice against violence",
      description: "Legal aid , counselling and confidence building activities organised to support women facing violence.",
      image: voiceAgainstViolenceImg,
      link: "/initiatives#community-development",
      stats: "5,500 Women Supported",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    },
    {
      title: "Advocacy and policy changes",
      description: "Events and conference organized to make policies, people friendly with concerned stakeholders",
      image: advocacyImage,
      link: "/initiatives#community-development",
      stats: "50 Seminars Organized",
      alt: "Prachi Kaushik at a community health camp with medical staff and beneficiaries"
    }
  ];

  return (
    <div className="bg-secondary">
      <section className="bg-white rounded-tr-[4rem] md:rounded-tr-[8rem] rounded-br-[4rem] md:rounded-br-[8rem] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="h-1 bg-primary rounded-full mx-auto mb-6"
            style={{ width: 'clamp(3rem, 8vw, 6rem)' }}
          ></div>

          {/* Section Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2
              className="satoshi-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Key Initiatives
            </motion.h2>

            <motion.p
              className="satoshi-medium text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Driving change through focused, sustainable programs that create lasting impact at the grassroots level.
            </motion.p>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="bg-secondary border-b-4 border-primary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                  <img
                    src={initiative.image}
                    alt={initiative.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="satoshi-bold text-lg sm:text-xl md:text-2xl text-primary mb-3">
                    {initiative.title}
                  </h3>

                  <p className="satoshi-regular text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
                    {initiative.description}
                  </p>

                  <div className="border-t-2 w-full border-primary mb-4 sm:mb-5"></div>

                  <div className="mb-4 sm:mb-6">
                    <p className="satoshi-medium text-primary text-xs sm:text-sm md:text-base">
                      {initiative.stats}
                    </p>
                  </div>
                  {/* disabled learn more button for now
                  <a
                    href={initiative.link}
                    className="mt-auto inline-flex items-center satoshi-regular text-sm sm:text-base bg-primary text-secondary px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md 
             transition-all duration-300 group/button
             hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
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
                  </a>*/}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-12 sm:mt-14 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/initiatives"
              className="inline-flex items-center satoshi-medium bg-primary text-secondary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm sm:text-base"
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
