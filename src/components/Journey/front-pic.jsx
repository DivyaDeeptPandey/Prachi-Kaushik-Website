import React from "react";
import { motion } from "framer-motion";
import frontPic from "../../assets/journey-pic.png";
import { ArrowRight } from 'lucide-react';

const journeyItems = [
  {
    title: "Who is She?",
    description: `She is a woman who became a voice for the voiceless, strength for the struggling, 
    and a shining hope for the unheard. Her name is Ms. Prachi Kaushik, a changemaker, 
    a trailblazer, and above all, a fierce believer in the power of women. 
    She has educated over 2.5 million women about menstrual hygiene, breaking taboos 
    and replacing shame with dignity...`,
    img: frontPic,
  },
  {
    title: "Her Early Life",
    description: `Ms Prachi Kaushik was born on December 05, 1984 in Delhi, close to the Delhi-Haryana border. 
    Being a daughter of a daily wage labourer and a housewife, she grew up in a challenging environment 
    and saw poverty and lack of amenities at every step of her way...`,
    img: frontPic,
  },
  {
    title: "Her Inspiration",
    description: `Survival has been her only inspiration. While working in NGOs, she encountered 
    a domestic violence case that deeply disturbed her. This situation changed her goal from survival 
    to transformation — focusing on women's health and empowerment...`,
    img: frontPic,
  },
];

const JourneyPage = () => {
  return (
    <div className="bg-secondary text-text pt-20 pb-16">
      {/* Page Intro Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Heading + Intro */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl satoshi-bold text-primary mb-6 drop-shadow-sm">
              Her Journey
            </h1>
            <p className="satoshi-regular text-lg leading-relaxed text-gray-700">
              From humble beginnings to becoming a changemaker for millions, 
              Ms. Prachi Kaushik’s journey is one of resilience, courage, and 
              transformation. Her life reflects the power of determination and 
              the vision to empower others.
            </p>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="w-full md:w-1/2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.img
              src={frontPic}
              alt="Prachi Kaushik"
              className="w-80 h-100 md:w-110 md:h-150 rounded-sm customShadow object-cover mx-auto"
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-40 h-1 bg-primary/30 mx-auto my-12 rounded-full"></div>

      {/* Journey Sections */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        {journeyItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl customShadow hover:shadow-xl transition-all duration-300 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-primary/50 after:rounded-full">
                {item.title}
              </h2>
              <p className="satoshi-regular text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Image */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover rounded-xl customShadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-8 max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="satoshi-medium text-lg text-text mb-6">
          Discover more about Prachi's inspiring journey and her impact on communities
        </p>
        <a
          href="/her-early-life"
          className="inline-flex items-center gap-2 satoshi-bold text-primary hover:text-text transition-colors duration-300 group text-lg px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20"
        >
          Read Her Full Story
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </div>
  );
};

export default JourneyPage;