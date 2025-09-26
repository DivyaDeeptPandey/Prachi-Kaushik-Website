import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import Img1 from "../../assets/testimonials/1.jpg";
import Img2 from "../../assets/testimonials/2.jpg";
import Img3 from "../../assets/testimonials/3.jpg";
import Img4 from "../../assets/testimonials/4.jpg";
import Img5 from "../../assets/testimonials/5.jpg";
import Img6 from "../../assets/testimonials/certificate.jpg";
import Img7 from "../../assets/testimonials/7.jpg";
import Img8 from "../../assets/testimonials/8.jpg";
import Img9 from "../../assets/testimonials/9.jpg";
import Img10 from "../../assets/testimonials/10.jpg";
import Img11 from "../../assets/testimonials/11.jpg";

const Recognitions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const recognitions = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
    { id: 5, image: Img5 },
    { id: 6, image: Img6 },
    { id: 7, image: Img7 },
    { id: 8, image: Img8 },
    { id: 9, image: Img9 },
    { id: 10, image: Img10 },
    { id: 11, image: Img11 },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const getVisibleRecognitions = () => {
    const length = recognitions.length;
    const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    return [
      recognitions[prevIndex],
      recognitions[currentIndex],
      recognitions[nextIndex],
    ];
  };

  // autoplay
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === recognitions.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, recognitions.length]);

  const nextRecognition = () => {
    setCurrentIndex((prev) =>
      prev === recognitions.length - 1 ? 0 : prev + 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevRecognition = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recognitions.length - 1 : prev - 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const visibleRecognitions = getVisibleRecognitions();

  return (
    <div className="bg-secondary">
      <section className="bg-white rounded-tr-[8rem] rounded-br-[8rem] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div
              className="h-1 bg-primary rounded-full mx-auto mb-5"
              style={{ width: "clamp(4rem, 10vw, 6rem)" }}
            ></div>
            <motion.h2
              className="satoshi-bold text-3xl md:text-4xl text-primary mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Recognitions & Certificates
            </motion.h2>
            <motion.p
              className="satoshi-regular text-gray-600 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Celebrating the awards and certifications that recognize our impactful work
            </motion.p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Buttons */}
            <button
              onClick={prevRecognition}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
                bg-primary rounded-full p-3 shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextRecognition}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
                bg-primary rounded-full p-3 shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Cards */}
            <div className="relative flex items-center justify-center gap-6 md:gap-10 px-4">
              {/* Left */}
              <motion.figure
                className="hidden md:block flex-shrink-0 w-[280px] md:w-[360px] opacity-50 scale-90 cursor-pointer"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => openModal(visibleRecognitions[0].image)}
              >
                <div className="rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={visibleRecognitions[0].image}
                    alt="Recognition"
                    className="w-full h-[300px] object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.figure>

              {/* Center */}
              <AnimatePresence mode="wait">
                <motion.figure
                  key={currentIndex}
                  className="flex-shrink-0 w-[360px] md:w-[500px] z-10 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1.1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  onClick={() => openModal(visibleRecognitions[1].image)}
                >
                  <div className="rounded-2xl shadow-2xl overflow-hidden relative bg-secondary">
                    <img
                      src={visibleRecognitions[1].image}
                      alt="Recognition"
                      className="w-full h-[400px] md:h-[450px] object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black/20">
                      <ZoomIn className="text-white" size={40} />
                    </div>
                  </div>
                </motion.figure>
              </AnimatePresence>

              {/* Right */}
              <motion.figure
                className="hidden md:block flex-shrink-0 w-[280px] md:w-[360px] opacity-50 scale-90 cursor-pointer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => openModal(visibleRecognitions[2].image)}
              >
                <div className="rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={visibleRecognitions[2].image}
                    alt="Recognition"
                    className="w-full h-[300px] object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.figure>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {recognitions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <motion.div
                  className="relative max-w-5xl max-h-full"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  transition={{ type: "spring", damping: 15 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
                  >
                    &times;
                  </button>
                  <img
                    src={modalImage}
                    alt="Enlarged recognition"
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Recognitions;
