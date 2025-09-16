import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      quote: "Before Vyomini's training, I never imagined I could run my own business. Today, I not only support my family but also employ three other women from my village. This is real empowerment.",
      name: "Sunita Devi",
      role: "Entrepreneur & Workshop Owner",
      location: "Haryana",
      image: "/testimonials/sunita-devi.jpg",
      initials: "SD"
    },
    {
      quote: "Prachi's approach to menstrual health changed everything in our community. The workshops broke generations of silence and shame. Now, our daughters can attend school without fear or hesitation.",
      name: "Rajeshwari Mehta",
      role: "School Principal",
      location: "Rajasthan",
      image: "/testimonials/rajeshwari-mehta.jpg",
      initials: "RM"
    },
    {
      quote: "The health camps organized by Vyomini provided critical care that was otherwise inaccessible. Many women in our village received treatment for conditions they had silently suffered from for years.",
      name: "Dr. Amit Sharma",
      role: "Medical Volunteer",
      location: "Uttar Pradesh",
      image: "/testimonials/dr-amit-sharma.jpg",
      initials: "AS"
    },
    {
      quote: "As a partner organization, we've seen firsthand how Vyomini's sustainable model creates lasting change. They don't just give resources - they build capabilities that transform entire communities.",
      name: "NITI Aayog",
      role: "Government Partner",
      location: "National Level",
      image: "/testimonials/niti-aayog.jpg",
      initials: "NA"
    }
  ];

  // Get visible testimonials (current, previous, next)
  const getVisibleTestimonials = () => {
    const length = testimonials.length;
    const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;

    return [
      testimonials[prevIndex],
      testimonials[currentIndex],
      testimonials[nextIndex]
    ];
  };

  // Auto-advance functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className='bg-secondary'>
      <section className="bg-white rounded-tr-[8rem] rounded-br-[8rem] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="h-1 bg-primary rounded-full mx-auto mb-5"
            style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
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
              className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 text-heading-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Words of Appreciation
            </motion.h2>

            <motion.p
              className="satoshi-regular text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hear from those whose lives have been transformed by Prachi Kaushik's impactful work
            </motion.p>
          </motion.div>

          {/* 3-Card Testimonial Carousel */}
          <div className="relative">
            {/* Prev Button (Left side) */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
             bg-primary rounded-full p-3 shadow-lg 
             hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Next Button (Right side) */}
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
             bg-primary rounded-full p-3 shadow-lg 
             hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>


            {/* Testimonial Cards Container */}
            <div className="relative flex items-center justify-center gap-6 md:gap-8 lg:gap-12 px-4">
              {/* Left Card (Previous) */}
              <motion.figure
                className="flex-shrink-0 w-[280px] md:w-[320px] opacity-60 scale-90 transform"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md h-full ">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="satoshi-bold text-gray-400 text-lg">
                      {visibleTestimonials[0].initials}
                    </span>
                  </div>
                  <h3 className="satoshi-medium text-gray-600 text-sm mb-1">
                    {visibleTestimonials[0].name}
                  </h3>
                  <p className="satoshi-regular text-gray-500 text-xs mb-4">
                    {visibleTestimonials[0].role}
                  </p>
                  <blockquote className="satoshi-regular text-gray-600 text-sm leading-relaxed line-clamp-4">
                    "{visibleTestimonials[0].quote}"
                  </blockquote>
                </div>
              </motion.figure>

              {/* Center Card (Main Focus) */}
              <AnimatePresence mode="wait">
                <motion.figure
                  key={currentIndex} // key is critical for AnimatePresence
                  className="flex-shrink-0 w-[320px] md:w-[380px] z-10"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="rounded-2xl p-8 shadow-xl relative bg-primary">
                    {/* Highlight effect */}
                    <div className="absolute -inset-2 bg-primary-15 rounded-3xl -z-10 blur-md"></div>

                    <div className="w-20 h-20 border-2 border-primary rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center bg-white">
                      <span className="satoshi-bold text-primary text-xl">
                        {visibleTestimonials[1].initials}
                      </span>
                    </div>

                    <figcaption>
                      <h2 className="satoshi-bold text-secondary text-lg md:text-xl mb-2">
                        {visibleTestimonials[1].name}
                      </h2>
                      <h4 className="satoshi-regular text-primary/80 text-sm mb-6 text-secondary">
                        {visibleTestimonials[1].role}
                        {visibleTestimonials[1].location && ` • ${visibleTestimonials[1].location}`}
                      </h4>

                      <blockquote className="satoshi-regular bg-secondary text-gray-800 text-base leading-relaxed py-6 px-8 rounded-lg shadow-inner   relative">
                        <div className="absolute top-2 left-3 text-primary text-3xl">"</div>
                        {visibleTestimonials[1].quote}
                        <div className="absolute bottom-2 right-3 text-primary text-3xl">"</div>
                      </blockquote>
                    </figcaption>
                  </div>
                </motion.figure>
              </AnimatePresence>

              {/* Right Card (Next) */}
              <motion.figure
                className="flex-shrink-0 w-[280px] md:w-[320px] opacity-60 scale-90 transform"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md h-full">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="satoshi-bold text-gray-400 text-lg">
                      {visibleTestimonials[2].initials}
                    </span>
                  </div>
                  <h3 className="satoshi-medium text-gray-600 text-sm mb-1">
                    {visibleTestimonials[2].name}
                  </h3>
                  <p className="satoshi-regular text-gray-500 text-xs mb-4">
                    {visibleTestimonials[2].role}
                  </p>
                  <blockquote className="satoshi-regular text-gray-600 text-sm leading-relaxed line-clamp-4">
                    "{visibleTestimonials[2].quote}"
                  </blockquote>
                </div>
              </motion.figure>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-primary/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="satoshi-regular text-gray-600 text-lg mb-6">
              Ready to create your own success story?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center satoshi-medium border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                Share Your Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;