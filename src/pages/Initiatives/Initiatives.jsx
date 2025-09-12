import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InitiativesNav from './Components/InitiativesNav';
import VyominiModel from './Components/VyominiModel';
import MenstrualHealth from './Components/MenstrualHealth';
import EconomicEmpowerment from './Components/EconomicEmpowerment';
import CommunityDevelopment from './Components/CommunityDevelopment';
import Partnerships from './Components/Partnerships';
import ImpactSection from './Components/ImpactSection';
import GetInvolved from './Components/GetInvolved';

const Initiatives = () => {
  const [activeSection, setActiveSection] = useState('vyomini-model');
  const sectionRefs = {
    'page-hero': useRef(null),
    'vyomini-model': useRef(null),
    'menstrual-health': useRef(null),
    'economic-empowerment': useRef(null),
    'community-development': useRef(null),
    'partnerships': useRef(null),
    'impact': useRef(null),
    'get-involved': useRef(null),
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
  }, [scrollY, windowHeight]);

  const navSections = [
    { id: 'vyomini-model', name: 'Our Model' },
    { id: 'menstrual-health', name: 'Menstrual Health' },
    { id: 'economic-empowerment', name: 'Economic Empowerment' },
    { id: 'community-development', name: 'Community Development' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'impact', name: 'Impact' },
    { id: 'get-involved', name: 'Get Involved' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <InitiativesNav sections={navSections} activeSection={activeSection} />

      {/* Page Hero */}
      <section
        id="page-hero"
        ref={sectionRefs['page-hero']}
        className="min-h-[50vh] bg-secondary flex items-center justify-center rounded-bl-[8rem] px-4 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Initiatives
          </motion.h1>
          <motion.p
            className="satoshi-medium text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming lives through sustainable, grassroots-led programs
          </motion.p>
        </div>
      </section>

      {/* Section Components */}
      <VyominiModel sectionRef={sectionRefs['vyomini-model']} />
      <MenstrualHealth sectionRef={sectionRefs['menstrual-health']} />
      <EconomicEmpowerment sectionRef={sectionRefs['economic-empowerment']} />
      <CommunityDevelopment sectionRef={sectionRefs['community-development']} />
      <Partnerships sectionRef={sectionRefs['partnerships']} />
      <ImpactSection sectionRef={sectionRefs['impact']} />
      <GetInvolved sectionRef={sectionRefs['get-involved']} />

      <Footer />
    </div>
  );
};

export default Initiatives;