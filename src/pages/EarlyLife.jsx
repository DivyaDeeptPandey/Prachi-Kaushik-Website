import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Sticky Navigator Component
const StickyNav = ({ sections, activeSection }) => {
  return (
    <nav className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-end space-y-4">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={`#${section.id}`}
            smooth="true"
            className={`flex items-center justify-end satoshi-medium transition-all duration-300 ${
              activeSection === section.id
                ? 'text-primary text-lg'
                : 'text-gray-400 hover:text-gray-600 text-sm'
            }`}
          >
            <span className="mr-2">{section.name}</span>
            <div
              className={`h-0.5 rounded-full transition-all duration-300 ${
                activeSection === section.id ? 'w-8 bg-primary' : 'w-4 bg-gray-300'
              }`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
};

// Generic Section Header Component (Reusable)
const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        className="h-1 bg-primary rounded-full mx-auto mb-5"
        style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
      ></div>
      <motion.h2
        className="satoshi-bold text-primary mb-4 text-heading-md"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="satoshi-regular text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

const HerStory = () => {
  const [activeSection, setActiveSection] = useState('early-life');
  const sectionRefs = {
    'page-hero': useRef(null),
    'early-life': useRef(null),
    'inspiration': useRef(null),
    'founding-vyomini': useRef(null),
    'breaking-taboos': useRef(null),
    'economic-empowerment': useRef(null),
    'community-impact': useRef(null),
    'conclusion': useRef(null),
  };

  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const updateActiveSection = () => {
      const scrollPosition = scrollY.get() + windowHeight / 3; // Adjust trigger point

      let newActiveSection = 'page-hero';
      let minDistance = Infinity;

      for (const [sectionId, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const distance = Math.abs(ref.current.offsetTop - scrollPosition);
          if (distance < minDistance) {
            minDistance = distance;
            newActiveSection = sectionId;
          }
        }
      }
      setActiveSection(newActiveSection);
    };

    const unsubscribe = scrollY.on('change', updateActiveSection);
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY, windowHeight]);

  const navSections = [
    { id: 'early-life', name: 'Early Life' },
    { id: 'inspiration', name: 'Inspiration' },
    { id: 'founding-vyomini', name: 'Founding Vyomini' },
    { id: 'breaking-taboos', name: 'Breaking Taboos' },
    { id: 'economic-empowerment', name: 'Economic Empowerment' },
    { id: 'community-impact', name: 'Community Impact' },
    { id: 'conclusion', name: 'Conclusion' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Sticky Navigator */}
      <StickyNav sections={navSections} activeSection={activeSection} />

      {/* Page Hero */}
      <section
        id="page-hero"
        ref={sectionRefs['page-hero']}
        className="min-h-[60vh] md:min-h-[80vh] bg-secondary flex items-center justify-center rounded-bl-[8rem] px-4 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Her Story
          </motion.h1>
          <motion.p
            className="satoshi-medium text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From humble beginnings to founding a movement for women's empowerment.
          </motion.p>
        </div>
      </section>

      {/* Early Life & Challenges */}
      <section
        id="early-life"
        ref={sectionRefs['early-life']}
        className="py-16 md:py-20 px-4 md:px-8 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Early Life & Challenges"
            subtitle="Humble beginnings and the struggle for education"
          />
          <motion.div
            className="prose prose-lg max-w-none satoshi-regular text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Ms. Prachi Kaushik was born on December 05, 1984 in Delhi, close to the Delhi-Haryana border. Being a daughter of a daily wage labourer and a housewife, she grew up in a challenging environment and saw poverty and lack of amenities at every step of her way.
            </p>
            <p>
              She completed her primary and secondary education in a government school. After her 12th standard, there was strong pressure from family and relatives to end her education and settle into an early marriage. No one expected or encouraged her to continue studying. In fact, no woman in her family had pursued higher education before.
            </p>
            <p>
              But, she had other plans. She resisted every expectation and objection, firmly said no to early marriage and yes to her own future. With no financial support, she started taking tuition classes to fund her college education. She graduated with a degree in Political Science from Rajdhani College, Delhi, and later pursued her Master's through the Faculty of Open Learning at Delhi University.
            </p>
            <p className="satoshi-medium italic border-l-4 border-primary pl-4 py-2 my-6">
              "For a long time, my goal was simply to exist on my own terms in a world that didn't seem to want me to."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Inspiration & Turning Point */}
      <section
        id="inspiration"
        ref={sectionRefs['inspiration']}
        className="py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tr-[8rem] rounded-bl-[8rem]"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="The Inspiration & Turning Point"
            subtitle="From survival to transformation"
          />
          <motion.div
            className="prose prose-lg max-w-none satoshi-regular text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Survival had been her only inspiration. Looking for ways to move forward, she started working in an NGO. This is when she encountered a domestic violence case that deeply disturbed her.
            </p>
            <p>
              This situation changed her goal from survival to transformation not just her life but of others like her who become prey of societal misdeeds. She began to see the systemic issues that trapped women in cycles of vulnerability.
            </p>
            <p className="satoshi-medium">
              She observed that when a woman has no financial support, when she’s denied education and exposure, she becomes more vulnerable to exploitation and abuse. That experience became her mission.
            </p>
            <p>
              She chose to focus on two critical areas: women’s health and economic empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Continue with other sections: Founding Vyomini, Breaking Taboos, etc. */}
      {/* ... Pattern repeats for each section ... */}

      {/* Conclusion & CTA */}
      <section
        id="conclusion"
        ref={sectionRefs['conclusion']}
        className="py-16 md:py-20 px-4 md:px-8 bg-primary text-secondary rounded-tr-[8rem]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="A Journey of Transformation"
            subtitle="From one woman's vision to a nationwide movement"
            className="text-secondary"
          />
          <motion.p
            className="satoshi-regular text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prachi Kaushik's story is a testament to the power of resilience, vision, and unwavering commitment to empowering others.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/initiatives"
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg text-center transition-colors duration-300 hover:bg-white"
            >
              Support Initiatives
            </Link>
            <Link
              to="/contact"
              className="border-2 border-secondary text-secondary satoshi-medium py-3 px-8 rounded-lg text-center transition-colors duration-300 hover:bg-white hover:text-primary"
            >
              Explore Ongoing Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HerStory;