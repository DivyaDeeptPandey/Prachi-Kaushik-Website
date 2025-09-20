import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";

// Import your timeline images
import HumbleBeginningImg from "../../assets/timeline/humble-beginings.jpg";
import EducationImg from "../../assets/timeline/education.jpg";
import AwakeningImg from "../../assets/timeline/awakening.jpg";
import FoundingVyominiImg from "../../assets/timeline/humble-beginings.jpg";
import NationalImpactImg from "../../assets/timeline/national-impact.jpeg";
import GlobalRecognitionImg from "../../assets/timeline/global-recognition.jpg";
import NationalRecognitionImg from "../../assets/timeline/national-recognition.jpg"

const VisualJourneyTimeline = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const milestones = [
    {
      year: "1984",
      title: "Humble Beginnings",
      description:
        "Born in Delhi to a daily wage laborer and housewife, Prachi grew up in challenging circumstances near the Delhi-Haryana border.",
      image: HumbleBeginningImg,
      quote:
        "I wasn't just fighting poverty; I was fighting an entire system that didn't believe in girls' dreams.",
      link: "/her-story#early-life",
    },
    {
      year: "2000s",
      title: "Education Against All Odds",
      description:
        "She resisted family pressure for early marriage, took tuition classes to fund college education.",
      image: EducationImg,
      quote: "Education wasn't a privilege for me; it was my rebellion.",
      link: "/her-story#education",
    },
    {
      year: "2011",
      title: "Government Service & Awakening",
      description:
        "Prachi joined the Women and Child Development Department in Delhi, where she witnessed first-hand the gaps in implementing government schemes.",
      image: AwakeningImg,
      quote:
        "I saw that policies without people's participation remain just beautiful documents.",
      link: "/her-story#government-service",
    },
    {
      year: "2015",
      title: "The Turning Point",
      description:
        "An encounter with a domestic violence case shifted her mission — from survival to transformation — inspiring her to address systemic issues affecting women’s lives.",
      image: FoundingVyominiImg,
      quote:
        "That moment taught me that empowerment without economic freedom is incomplete.",
      link: "/her-story#turning-point",
    },
    {
      year: "2017",
      title: "Founding Vyomini",
      description:
        "In 2017, she founded the Vyomini Social Foundation with the philosophy of sustainability through enterprise, empowering women through health and entrepreneurship.",
      image: NationalImpactImg,
      quote:
        "I wanted to build an ecosystem where women could be creators, not just receivers.",
      link: "/her-story#founding-vyomini",
    },
    {
      year: "2018-2023",
      title: "National Impact & Scale",
      description:
        "Through Vyomini’s Menstrual Health Management program, she has educated 2.5 million+ women and created 10,000+ women entrepreneurs across India.",
      image: GlobalRecognitionImg,
      quote:
        "Every pad we make is not just about hygiene; it's about dignity and economic freedom.",
      link: "/her-story#national-impact",
    },
    {
      year: "2024",
      title: "National Recognition",
      description:
        "Prachi has been honoured with the Women Transforming India Award by NITI Aayog and recognized as a Social Entrepreneur of the Year.",
      image: NationalRecognitionImg,
      quote:
        "The awards are not mine; they belong to every woman who dared to dream with me.",
      link: "/achievements",
    },
  ];

  // IntersectionObserver to set active card based on center of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let closestIndex = null;
        let closestDistance = Infinity;
        const viewportCenter = window.innerHeight / 2;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - elementCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = parseInt(entry.target.getAttribute("data-index"));
            }
          }
        });

        if (closestIndex !== null) {
          setActiveIndex(closestIndex);
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(".timeline-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-secondary" ref={containerRef}>
      <section className="bg-white rounded-tr-[8rem] py-16 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Sticky Left Header */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Sticky Header */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-24">
                <div className="h-1 bg-primary rounded-full mb-6 w-16"></div>
                <h2 className="satoshi-bold text-4xl md:text-5xl text-primary mb-6">
                  The Journey
                </h2>
                <p className="satoshi-medium text-x l text-gray-700 mb-8">
                  From humble beginnings to national recognition - a timeline of
                  resilience and transformation
                </p>

                {/* Progress Indicator */}
                <div className="hidden lg:block">
                  <div className="flex flex-col space-y-3 mb-8">
                    {milestones.map((milestone, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const element = document.getElementById(
                            `milestone-${index}`
                          );
                          element?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                        }}
                        className={`text-left satoshi-medium text-l transition-colors duration-300 p-2 rounded-lg ${
                          index === activeIndex
                            ? "bg-primary text-secondary"
                            : "text-gray-600 hover:text-primary hover:bg-primary-10"
                        }`}
                      >
                        {milestone.year} - {milestone.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="lg:w-2/3">
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-5.5 top-0 bottom-0 w-1 bg-primary-40 hidden lg:block"></div>

                {/* Timeline Items */}
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    id={`milestone-${index}`}
                    data-index={index}
                    className="timeline-card relative mb-12 lg:pl-20"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 lg:left-6 transform -translate-x-1/2 z-10">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-secondary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-xl shadow-2xl p-6">
                      {/* Year */}
                      <div className="satoshi-bold text-primary text-lg mb-2">
                        {milestone.year}
                      </div>

                      {/* Title */}
                      <h3 className="satoshi-bold text-2xl mb-3">
                        {milestone.title}
                      </h3>

                      {/* Image */}
                      <div className="aspect-[16/9] mb-4 rounded-lg overflow-hidden">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Quote */}
                      {milestone.quote && (
                        <blockquote className="satoshi-bold text-primary text-xl italic mb-3 pl-3 border-l-2 border-primary/30">
                          "{milestone.quote}"
                        </blockquote>
                      )}

                      {/* Description */}
                      <p className="satoshi-regular text-gray-700 text-l mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      <Link
                        to={milestone.link}
                        className="inline-flex items-center satoshi-medium text-primary text-md hover:text-primary/80 transition-colors group"
                      >
                        <span>Read more</span>
                        <svg
                          className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform"
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
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Progress Indicator */}
              <div className="lg:hidden mt-8">
                <div className="flex justify-center space-x-2 mb-8">
                  {milestones.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const element = document.getElementById(
                          `milestone-${index}`
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "bg-primary" : "bg-primary/30"
                      }`}
                      aria-label={`Go to ${milestones[index].year}`}
                    />
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center mt-12">
                <Link
                  to="/her-story"
                  className="inline-block bg-primary text-secondary satoshi-medium py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Explore Complete Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualJourneyTimeline;
