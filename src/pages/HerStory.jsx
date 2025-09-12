import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // <-- added useLocation + useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images for each section
import HeroImage from '../assets/her-story/journey-pic.png';
import EarlyLifeImage from '../assets/her-story/journey-pic.png';
import InspirationImage from '../assets/her-story/journey-pic.png';
import FoundingVyominiImage from '../assets/her-story/journey-pic.png';
import BreakingTaboosImage from '../assets/her-story/journey-pic.png';
import EconomicEmpowermentImage from '../assets/her-story/journey-pic.png';
import CommunityImpactImage from '../assets/her-story/journey-pic.png';
import ConclusionImage from '../assets/her-story/journey-pic.png';

// Sticky Navigator Component
// Sticky Navigator Component
const StickyNav = ({ sections, activeSection }) => {
  // Check if we are in the last section
  const isOnConclusion = activeSection === "conclusion";

  return (
    <nav className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-end space-y-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`flex items-center justify-end satoshi-medium transition-all duration-300 ${
              activeSection === section.id
                ? isOnConclusion
                  ? "text-secondary text-lg" // ✅ White when active on conclusion
                  : "text-primary text-lg"
                : isOnConclusion
                ? "text-white/60 hover:text-white text-sm" // ✅ Faded white for inactive links
                : "text-gray-400 hover:text-gray-600 text-sm"
            }`}
          >
            <span className="mr-2">{section.name}</span>
            <div
              className={`h-0.5 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? isOnConclusion
                    ? "w-8 bg-secondary" // ✅ White active underline
                    : "w-8 bg-primary"
                  : isOnConclusion
                  ? "w-4 bg-secondary" // ✅ White faded inactive underline
                  : "w-4 bg-secondary"
              }`}
            />
          </a>
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
        className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 text-heading-md"
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
  const [activeSection, setActiveSection] = useState('page-hero');
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
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY, windowHeight]);

  // ---------- Robust programmatic scroll effect (updated) ----------
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Helper to detect navbar height — try a few selectors
    const getNavHeight = () => {
      const selectors = [
        'header',
        'nav',
        '.navbar',
        '.site-nav',
        '.main-nav',
        '#navbar',
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el) return el.getBoundingClientRect().height;
      }
      // fallback value
      return 80;
    };

    // Scroll to an element id with a computed offset
    const scrollToId = (id, { behavior = 'auto', offsetAdjustment = -50 } = {}) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = getNavHeight();
      const rectTop = el.getBoundingClientRect().top + window.scrollY;
      // desired top: element top minus navbar minus additional adjustment
      const top = Math.max(0, Math.round(rectTop - navHeight + offsetAdjustment + 75));
      window.scrollTo({ top, behavior });
    };

    // Determine target from either location.state.scrollTo or location.hash
    const stateId = location.state && location.state.scrollTo;
    const hashId = location.hash ? location.hash.replace('#', '') : null;
    const targetId = stateId || hashId;
    if (!targetId) return;

    // We'll try multiple times (layout/images might still be loading).
    let attempts = 0;
    const maxAttempts = 12;
    const attemptDelay = 80; // ms between retries

    const doAttempt = () => {
      attempts += 1;
      const el = document.getElementById(targetId);
      if (el) {
        // If you want smooth when clicked from same page, choose 'smooth' here.
        scrollToId(targetId, { behavior: 'auto', offsetAdjustment: -20 });
        // Optional: clean up hash/state so it doesn't re-trigger on history pop
        // navigate(location.pathname, { replace: true, state: {} });
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(doAttempt, attemptDelay);
      }
    };

    // Start attempts after a small delay so initial layout finishes
    const starter = setTimeout(doAttempt, 60);
    return () => clearTimeout(starter);
  }, [location, navigate]);
  // ----------------------------------------------------------------

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

      {/* Page Hero with Background Image */}
      <section
        id="page-hero"
        ref={sectionRefs['page-hero']}
        className="min-h-[60vh] md:min-h-[80vh] bg-secondary flex items-center justify-center rounded-bl-[8rem] px-4 md:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            alt="Prachi Kaushik - Social Entrepreneur"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
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
        className="h-screen py-12 md:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Early Life & Challenges"
            subtitle="Humble beginnings and the struggle for education"
          />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-lg max-w-none satoshi-regular text-gray-700"
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
              <p className="satoshi-medium italic border-l-4 border-primary pl-4 py-2 my-6">
                "For a long time, my goal was simply to exist on my own terms in a world that didn't seem to want me to."
              </p>
            </motion.div>
          </div>
          <motion.div
            className="prose prose-lg max-w-none satoshi-regular text-gray-700 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              But, she had other plans. She resisted every expectation and objection, firmly said no to early marriage and yes to her own future. With no financial support, she started taking tuition classes to fund her college education. She graduated with a degree in Political Science from Rajdhani College, Delhi, and later pursued her Master's through the Faculty of Open Learning at Delhi University.
            </p>
            <p>
              As the eldest sibling, the burden of supporting her family also fell on her shoulders. After college, though she dreamed of pursuing UPSC or even a PhD, financial responsibilities pulled her into the workforce. She took up jobs to support her younger siblings' education while continuing her own studies whenever possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Inspiration & Turning Point */}
      <section
        id="inspiration"
        ref={sectionRefs['inspiration']}
        className="h-screen py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tl-[8rem] rounded-bl-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="The Inspiration & Turning Point"
            subtitle="From survival to transformation"
          />
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-lg max-w-none satoshi-regular text-gray-700"
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
                She observed that when a woman has no financial support, when she's denied education and exposure, she becomes more vulnerable to exploitation and abuse. That experience became her mission.
              </p>
              <p>
                She chose to focus on two critical areas: women's health and economic empowerment. This pivotal moment shifted her path from personal survival to creating systemic change for countless other women.
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
        className="h-screen py-16 md:py-20 px-4 md:px-8 bg-white rounded-tr-[8rem] rounded-br-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Founding Vyomini"
            subtitle="The philosophy of sustainability through enterprise"
          />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                In 2015, she considered appearing for the UPSC exams. Until then, circumstances hadn't allowed her to think in that direction. But once the situation improved, she decided to give it a shot. By then, she was eligible for just one attempt due to age criteria.
              </p>
              <p>
                However, after completing that one attempt, she realized if she truly wanted to reach more people and bring meaningful change, she would have to take a different path. That's when she decided to create something of her own that would allow her to work closely with communities, empower others, and scale her impact.
              </p>
              <p className="satoshi-medium italic border-l-4 border-primary pl-4 py-2 my-6">
                "The organization focuses on creating products, promoting grassroots entrepreneurship, and fostering a circular economy to ensure that communities can earn and grow through their own efforts."
              </p>
            </motion.div>
          </div>
          <motion.div
            className="prose prose-lg max-w-none satoshi-regular text-gray-700 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              In 2017, she left her government sector job and founded Vyomini Social Foundation, also known as Vivomni Social Enterprise. Unlike conventional NGOs that rely heavily on grants, Vyomini was built on the idea of sustainability through enterprise.
            </p>
            <p>
              Vyomini is a purpose-driven initiative aimed at building a strong ecosystem for women-led entrepreneurship and leadership in emerging, high-impact sectors such as clean energy, sustainable agriculture, nutrition, health, and sanitation. The foundation actively supports women from low-income, climate-vulnerable communities across ten states in India. Through its programs, Vyomini inspires, educates, and nurtures socially conscious women entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Breaking Taboos */}
      <section
        id="breaking-taboos"
        ref={sectionRefs['breaking-taboos']}
        className="h-screen py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tl-[8rem] rounded-bl-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Breaking Taboos"
            subtitle="Menstrual Health Management program, scale, and impact"
          />
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                The first project launched by VYOMINI was 'Menstrual Health Management program' at Jhajjar District of Haryana and Delhi Slums with a 360-degree approach with 3As that is Awareness, Accessibility and Affordability of the MHM.
              </p>
              <p>
                She started speaking, researching, and educating women about their bodies, their rights, and the importance of menstrual hygiene. She travelled to villages across the country and reached over 25 lakhs women under the MHM program. She conducted awareness sessions in local languages and spoke directly to women, breaking cultural taboos, giving them comprehensive knowledge about menstrual hygiene, sexually transmitted infections, reproductive tract infections, HIV-Aids awareness, family planning, and more.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="prose prose-lg max-w-none satoshi-regular text-gray-700 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Till now, she has conducted over 15,000 menstrual health awareness workshops in rural and urban communities including Haryana, Odisha, Rajasthan, Jharkhand, Bihar, Uttarakhand, Uttar Pradesh and more 15 states in India.
            </p>
            <p className="satoshi-medium">
              Her research revealed that modern society had twisted ancient practices into superstition. In Vedic times, menstruating women were encouraged to slow down and focus inward, not shamed or isolated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Economic Empowerment */}
      <div className='bg-secondary'>
        <section
        id="economic-empowerment"
        ref={sectionRefs['economic-empowerment']}
        className="h-screen py-16 md:py-20 px-4 md:px-8 bg-white rounded-tr-[8rem] rounded-br-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Economic Empowerment"
            subtitle="The philosophy of sustainability through enterprise"
          />
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                In 2015, she considered appearing for the UPSC exams. Until then, circumstances hadn't allowed her to think in that direction. But once the situation improved, she decided to give it a shot. By then, she was eligible for just one attempt due to age criteria.
              </p>
              <p>
                However, after completing that one attempt, she realized if she truly wanted to reach more people and bring meaningful change, she would have to take a different path. That's when she decided to create something of her own that would allow her to work closely with communities, empower others, and scale her impact.
              </p>
              <p className="satoshi-medium italic border-l-4 border-primary pl-4 py-2 my-6">
                "The organization focuses on creating products, promoting grassroots entrepreneurship, and fostering a circular economy to ensure that communities can earn and grow through their own efforts."
              </p>
            </motion.div>
          </div>
          <motion.div
            className="prose prose-lg max-w-none satoshi-regular text-gray-700 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              In 2017, she left her government sector job and founded Vyomini Social Foundation, also known as Vivomni Social Enterprise. Unlike conventional NGOs that rely heavily on grants, Vyomini was built on the idea of sustainability through enterprise.
            </p>
            <p>
              Vyomini is a purpose-driven initiative aimed at building a strong ecosystem for women-led entrepreneurship and leadership in emerging, high-impact sectors such as clean energy, sustainable agriculture, nutrition, health, and sanitation. The foundation actively supports women from low-income, climate-vulnerable communities across ten states in India. Through its programs, Vyomini inspires, educates, and nurtures socially conscious women entrepreneurs.
            </p>
          </motion.div>
        </div>
      </section>
      </div>

      {/* Community Impact */}
      <section
        id="community-impact"
        ref={sectionRefs['community-impact']}
        className="h-screen py-16 md:py-20 px-4 md:px-8 bg-secondary rounded-tl-[8rem]"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Community Impact"
            subtitle="Health camps, Vyomini Suvidha Kendra, and special projects"
          />
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-3/5 prose prose-lg max-w-none satoshi-regular text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                Ms. Prachi has been raising awareness and empowering communities through Vyomini Facilitation Centre for Social Security Schemes. This centre aims to bridge the gap between marginalized individuals and essential government welfare schemes.
              </p>
              <p>
                She has been instrumental in organizing health camps and offering monthly medical consultations in collaboration with gynaecologists. During her training sessions, she conducted both pre- and post-assessments to identify common health concerns in the community. If recurring infections or specific health problems were found during the post-assessments in women, she organizes gynaecology camps to meet those needs.
              </p>
              <p>
                Over the past 10 years, Ms. Prachi has consistently organized two to three health camps every month, totalling over 400 camps to date. Each of these camps typically serves between 400 to 500 women, and at times, even up to 1,000.
              </p>
            </motion.div>
          </div>
          
          {/* Impact Statistics within Community Impact Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="satoshi-bold text-xl text-primary mb-3">Health Camps</h3>
              <p className="satoshi-regular text-gray-700">
                <span className="text-2xl font-bold text-primary">400+</span> camps organized<br />
                Serving <span className="text-primary">500-1000</span> women per camp<br />
                <span className="text-primary">10 years</span> of consistent service
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="satoshi-bold text-xl text-primary mb-3">Special Projects</h3>
              <p className="satoshi-regular text-gray-700">
                • Water crisis intervention in Mathura<br />
                • Prisoner reform programs<br />
                • Youth skill development in Bahraich<br />
                • Anganwadi worker training
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section
        id="conclusion"
        ref={sectionRefs['conclusion']}
        className="py-16 md:py-20 px-4 md:px-8 bg-primary text-secondary"
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
        <Footer />
    </div>
  );
};

export default HerStory;
