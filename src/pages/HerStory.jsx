import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images for each section
import HeroImage from '../assets/her-story/HeroImg.jpg';
import EarlyLifeImage from '../assets/her-story/EarlyLife.jpg';
import InspirationImage from '../assets/her-story/JOURNEY copy.JPG';
import FoundingVyominiImage from '../assets/her-story/LIVLIHOOD.jpg';
import BreakingTaboosImage from '../assets/her-story/MHM01.jpg';
import EconomicEmpowermentImage from '../assets/her-story/WhatsApp Image 2023-09-21 at 23.02.23-3.jpeg';
import CommunityImpactImage from '../assets/her-story/WOMEN EMPP0.jpg';
import JoinHerMovement from '../pages/homepage/JoinHerMovement';

// Mobile Navigator Component
const MobileNav = ({ sections, activeSection, isOpen, setIsOpen }) => {
  const isOnConclusion = activeSection === "conclusion";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg"
        aria-label="Toggle navigation"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-primary transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-primary transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-primary transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Navigation Panel */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-lg shadow-2xl z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <h3 className="satoshi-bold text-lg text-primary mb-6">Navigate Sections</h3>
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                className={`satoshi-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? isOnConclusion
                      ? "bg-secondary text-white"
                      : "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// Sticky Navigator Component (Updated for responsiveness)
const StickyNav = ({ sections, activeSection }) => {
  const isOnConclusion = activeSection === "conclusion";

  return (
    <>
      {/* Desktop Sticky Nav */}
      <nav className="hidden lg:block fixed top-1/2 right-4 xl:right-8 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-end space-y-4 bg-white/80 backdrop-blur-sm shadow-lg p-3 rounded-xl">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`flex items-center justify-end satoshi-medium transition-all duration-300 ${
                activeSection === section.id
                  ? isOnConclusion
                    ? "text-secondary text-lg"
                    : "text-primary text-lg"
                  : isOnConclusion
                  ? "text-white/60 hover:text-white text-sm"
                  : "text-gray-400 hover:text-gray-600 text-sm"
              }`}
            >
              <span className="mr-2 hidden xl:inline">{section.name}</span>
              <span className="mr-2 xl:hidden text-xs">{section.name.split(' ')[0]}</span>
              <div
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? isOnConclusion
                      ? "w-8 bg-secondary"
                      : "w-8 bg-primary"
                    : isOnConclusion
                    ? "w-4 bg-secondary"
                    : "w-4 bg-secondary"
                }`}
              />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

// Generic Section Header Component (Updated for responsiveness)
const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <motion.div
      className={`text-center mb-8 md:mb-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div
        className="h-1 bg-primary rounded-full mx-auto mb-4 md:mb-5"
        style={{ width: 'clamp(3rem, 8vw, 6rem)' }}
      ></div>
      <motion.h2
        className="satoshi-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-3 md:mb-4 leading-tight"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="satoshi-regular text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0"
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
  const [activeSection, setActiveSection] = useState('page-hero');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
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
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const updateActiveSection = () => {
      const scrollPosition = scrollY.get() + windowHeight / 3;

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
    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollY, windowHeight]);

  // Programmatic scroll effect (unchanged)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const getNavHeight = () => {
      const selectors = ['header', 'nav', '.navbar', '.site-nav', '.main-nav', '#navbar'];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el) return el.getBoundingClientRect().height;
      }
      return 80;
    };

    const scrollToId = (id, { behavior = 'auto', offsetAdjustment = -50 } = {}) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = getNavHeight();
      const rectTop = el.getBoundingClientRect().top + window.scrollY;
      const top = Math.max(0, Math.round(rectTop - navHeight + offsetAdjustment + 75));
      window.scrollTo({ top, behavior });
    };

    const stateId = location.state && location.state.scrollTo;
    const hashId = location.hash ? location.hash.replace('#', '') : null;
    const targetId = stateId || hashId;
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 12;
    const attemptDelay = 80;

    const doAttempt = () => {
      attempts += 1;
      const el = document.getElementById(targetId);
      if (el) {
        scrollToId(targetId, { behavior: 'auto', offsetAdjustment: -20 });
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(doAttempt, attemptDelay);
      }
    };

    const starter = setTimeout(doAttempt, 60);
    return () => clearTimeout(starter);
  }, [location, navigate]);

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
    <div className="bg-white">
      <Navbar />
      
      {/* Navigation Components */}
      <StickyNav sections={navSections} activeSection={activeSection} />
      <MobileNav 
        sections={navSections} 
        activeSection={activeSection} 
        isOpen={isMobileNavOpen}
        setIsOpen={setIsMobileNavOpen}
      />

      {/* Page Hero with Background Image */}
      <section
        id="page-hero"
        ref={sectionRefs['page-hero']}
        className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-secondary flex items-center justify-center rounded-bl-[4rem] md:rounded-bl-[8rem] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="satoshi-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Her Story
          </motion.h1>
          <motion.p
            className="satoshi-regular text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From Humble Beginnings to a Movement for Women's Empowerment
          </motion.p>
        </div>
      </section>

      {/* Early Life & Challenges */}
      <section
        id="early-life"
        ref={sectionRefs['early-life']}
        className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Early Life & Challenges"
            subtitle="Humble beginnings and the struggle for education"
          />
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={EarlyLifeImage}
                alt="Early life challenges in Delhi"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                Born on December 24, in Delhi near the Delhi–Haryana border, Ms. Kaushik grew up in a challenging environment as the daughter of a daily wage labourer and a homemaker. Poverty and lack of basic amenities were part of her everyday reality.
              </p>
              <p className="mb-4">
                She completed her primary and secondary education at a government school. After finishing 12th grade, she faced immense pressure from family and relatives to discontinue her studies and accept an early marriage. No one expected her to continue her education; in fact, no woman in her family had ever pursued higher studies.
              </p>
              <div className="satoshi-medium italic border-l-4 border-primary pl-3 md:pl-4 py-2 my-4 md:my-6 text-sm md:text-base">
                "For a long time, my goal was simply to exist on my own terms in a world that didn't seem to want me to."
              </div>
            </motion.div>
          </div>
          <motion.div
            className="prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              But she had other plans. Defying expectations, she firmly said no to early marriage and yes to her future. With no financial backing, she began offering tuition classes to fund her college education. She earned a degree in Political Science from Rajdhani College, Delhi, and later completed her Master's through the Faculty of Open Learning at Delhi University.
            </p>
            <p>
              As the eldest sibling, she also carried the responsibility of supporting her family. Though she aspired to pursue UPSC or even a PhD, financial constraints led her to join the workforce after graduation. While working, she continued to support her younger siblings' education and pursued her own learning whenever possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Inspiration & Turning Point */}
      <section
        id="inspiration"
        ref={sectionRefs['inspiration']}
        className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 bg-secondary rounded-tl-[4rem] md:rounded-tl-[8rem] rounded-bl-[4rem] md:rounded-bl-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The Inspiration & Turning Point"
            subtitle="From survival to transformation"
          />
          <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={InspirationImage}
                alt="NGO work and inspiration"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                Survival had always been her only inspiration. Looking for ways to move forward, she started working with an NGO, where she encountered a domestic violence case that deeply disturbed her.
              </p>
              <p className="mb-4">
                This moment became a turning point. It shifted her focus from simply surviving to transforming not only her own life but also the lives of countless other women who, like her, fell prey to societal injustices. She began to recognize the systemic issues that trapped women in cycles of vulnerability.
              </p>
              <p className="satoshi-medium mb-4">
                She realized that when a woman is denied education, financial independence, and exposure, she becomes more vulnerable to exploitation and abuse. That realization became her mission.
              </p>
              <p>
                She chose to focus on two critical areas: women's health and economic empowerment. This decision marked her journey from personal survival to creating systemic change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Vyomini */}
      <div className='bg-secondary'>
        <section
          id="founding-vyomini"
          ref={sectionRefs['founding-vyomini']}
          className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 bg-white rounded-tr-[4rem] md:rounded-tr-[8rem] rounded-br-[4rem] md:rounded-br-[8rem]"
        >
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Founding Vyomini"
              subtitle="The philosophy of sustainability through enterprise"
            />
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
              <motion.div
                className="w-full lg:w-2/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img
                  src={FoundingVyominiImage}
                  alt="Founding Vyomini Social Enterprise"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                className="w-full lg:w-3/5 prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="mb-4">
                  In 2015, Prachi considered appearing for the UPSC exams. By then, she had only one attempt left due to age restrictions. After completing it, she realized that if she truly wanted to reach more people and bring meaningful change, she needed a different path.
                </p>
                <p className="mb-4">
                  That's when she decided to create something of her own, an initiative that would allow her to work closely with communities, empower others, and scale her impact.
                </p>
                <div className="satoshi-medium italic border-l-4 border-primary pl-3 md:pl-4 py-2 my-4 md:my-6 text-sm md:text-base">
                  "The organization focuses on creating products, promoting grassroots entrepreneurship, and fostering a circular economy to ensure that communities can earn and grow through their own efforts."
                </div>
              </motion.div>
            </div>
            <motion.div
              className="prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700 mt-6 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                In 2017, she left her government sector job and founded Vyomini Social Foundation (also known as Vyomini Social Enterprise). Unlike conventional NGOs that rely heavily on grants, Vyomini was built on the idea of sustainability through enterprise.
              </p>
              <p>
                Vyomini is a purpose-driven initiative aimed at building a strong ecosystem for women-led entrepreneurship and leadership in high-impact sectors such as clean energy, sustainable agriculture, nutrition, health, and sanitation. The foundation actively supports women from low-income, climate-vulnerable communities across ten states in India. Through its programs, Vyomini inspires, educates, and nurtures socially conscious women entrepreneurs.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Breaking Taboos */}
      <section
        id="breaking-taboos"
        ref={sectionRefs['breaking-taboos']}
        className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 bg-secondary rounded-tl-[4rem] md:rounded-tl-[8rem] rounded-bl-[4rem] md:rounded-bl-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Breaking Taboos"
            subtitle="Menstrual Health Management program, scale, and impact"
          />
          <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={BreakingTaboosImage}
                alt="Menstrual health awareness workshop"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                Vyomini's first project was the Menstrual Health Management (MHM) program, launched in Jhajjar district of Haryana and in Delhi's slums. It was designed with a 360-degree approach, the 3As: Awareness, Accessibility, and Affordability.
              </p>
              <p className="mb-4">
                Prachi began speaking, researching, and educating women about their bodies, rights, and the importance of menstrual hygiene. She travelled to villages across India, directly engaging with women in local languages. To date, she has reached over 25 lakh women through the MHM program.
              </p>
              <p>
                Her workshops provided comprehensive knowledge on menstrual hygiene, sexually transmitted infections, reproductive tract infections, HIV/AIDS awareness, family planning, and more, breaking cultural taboos that had silenced women for generations.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              So far, she has conducted more than 15,000 menstrual health awareness workshops across rural and urban communities in states including Haryana, Odisha, Rajasthan, Jharkhand, Bihar, Uttarakhand, and Uttar Pradesh.
            </p>
            <p className="satoshi-medium">
              Her research revealed that modern society had twisted ancient practices into superstition. In Vedic times, menstruating women were encouraged to rest and turn inward, not shamed or isolated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Economic Empowerment */}
      <div className='bg-secondary'>
        <section
          id="economic-empowerment"
          ref={sectionRefs['economic-empowerment']}
          className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 bg-white rounded-tr-[4rem] md:rounded-tr-[8rem] rounded-br-[4rem] md:rounded-br-[8rem]"
        >
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Economic Empowerment"
              subtitle="Building livelihoods through women-led enterprises"
            />
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
              <motion.div
                className="w-full lg:w-2/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img
                  src={EconomicEmpowermentImage}
                  alt="Economic empowerment through women-led enterprises"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                className="w-full lg:w-3/5 prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="mb-4">
                  Vyomini doesn't just stop at health. Its philosophy is rooted in sustainability through enterprise. By promoting women-led entrepreneurship, Vyomini empowers women to generate income, build confidence, and reclaim agency over their lives.
                </p>
                <p>
                  The initiative has created over 10,000 women entrepreneurs across diverse sectors. By fostering a circular economy, it ensures that communities grow through their own efforts rather than depend solely on external aid.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Community Impact */}
      <section
        id="community-impact"
        ref={sectionRefs['community-impact']}
        className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-60 bg-secondary rounded-tl-[4rem] md:rounded-tl-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Community Impact"
            subtitle="Health camps, Vyomini Suvidha Kendra, and special projects"
          />
          <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-8 lg:gap-12 items-center">
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={CommunityImpactImage}
                alt="Community health camp and impact"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover rounded-xl md:rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-sm sm:prose-base md:prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">
                Prachi has also been driving community development through the Vyomini Facilitation Centre for Social Security Schemes, which connects marginalized individuals with essential government welfare programs.
              </p>
              <p className="mb-4">
                She regularly organizes health camps and monthly medical consultations in collaboration with gynecologists. During training sessions, she conducts pre- and post-assessments to identify common health issues. If recurring problems are detected, she organizes special gynecology camps to address them.
              </p>
              <p>
                Over the last decade, she has consistently organized two to three health camps every month, amounting to 400+ camps. Each camp typically serves between 400–500 women, and sometimes even up to 1,000.
              </p>
            </motion.div>
          </div>

          {/* Impact Statistics within Community Impact Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="satoshi-bold text-lg md:text-xl text-primary mb-2 md:mb-3">Health Camps</h3>
              <p className="satoshi-regular text-gray-700 text-sm md:text-base">
                <span className="text-xl md:text-2xl font-bold text-primary">400+</span> camps organized<br />
                Serving <span className="text-primary">500-1000</span> women per camp<br />
                <span className="text-primary">10 years</span> of consistent service
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
              <h3 className="satoshi-bold text-lg md:text-xl text-primary mb-2 md:mb-3">Special Projects</h3>
              <p className="satoshi-regular text-gray-700 text-sm md:text-base">
                • Water crisis intervention in Mathura<br />
                • Prisoner reform programs<br />
                • Youth skill development in Bahraich<br />
                • Anganwadi worker training
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <JoinHerMovement />
      <Footer />
    </div>
  );
};

export default HerStory;