import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

const ImpactStatistics = () => {
  const stats = [
    {
      value: 2500000,
      label: "Women Educated",
      description: "On menstrual health and hygiene awareness"
    },
    {
      value: 10000,
      label: "Entrepreneurs Created",
      description: "Through Vyomini's training programs"
    },
    {
      value: 400,
      label: "Health Camps Organized",
      description: "Serving thousands of women and families"
    },
    {
      value: 15,
      label: "States Reached",
      description: "Across India with sustainable programs"
    }
  ];

  return (
      <section className="bg-secondary min-h-screen rounded-tl-[8rem] rounded-bl-[8rem] py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className="h-1 bg-primary rounded-full mx-auto mb-5"
            style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
          ></div>

          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2
              className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 text-heading-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Measurable Impact
            </motion.h2>

            <motion.p
              className="satoshi-regular text-base max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transforming lives through sustainable initiatives and community empowerment
            </motion.p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl border border-primary shadow-lg bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >

                {/* Animated Number */}
                <div className="satoshi-bold text-2xl md:text-3xl text-primary mb-3">
                  <AnimatedCounter end={stat.value} duration={2} />
                </div>

                {/* Label */}
                <h3 className="satoshi-medium text-sm md:text-base mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="satoshi-regular text-xs md:text-sm leading-tight">
                  {stat.description}
                </p>

                {/* Subtle white accent line */}
                <div className="w-8 h-0.5 bg-white/50 rounded-full mx-auto mt-4 group-hover:w-12 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-center mt-12 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="satoshi-regular text-sm mb-4">
              Each number represents a life transformed
            </p>

          </motion.div>
          {/* Bottom CTA */}
          {/* Progress Overview */}
<motion.div
  className="text-center mt-12 pt-8 border-t border-gray-300/30"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
>
  <div className="max-w-md mx-auto">
    <p className="satoshi-regular text-gray-600 text-sm mb-4">
      Journey towards empowering 5 million women by 2030
    </p>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div 
        className="bg-primary h-2 rounded-full transition-all duration-1000"
        style={{ width: '50%' }} // 2.5M/5M = 50%
      ></div>
    </div>
    <p className="satoshi-medium text-primary text-xs">
      50% Progress • 2.5M of 5M Goal
    </p>
  </div>
</motion.div>

        </div>
      </section>
  );
};

export default ImpactStatistics;