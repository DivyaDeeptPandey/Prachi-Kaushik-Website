import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { ArrowRight } from 'lucide-react';

// Images
import pic1 from '../../assets/scroll-pic1.jpg';
import pic2 from '../../assets/scroll-pic2.jpg';
import pic3 from '../../assets/scroll-pic3.jpg';
import pic4 from '../../assets/scroll-pic4.jpg';
import pic5 from '../../assets/scroll-pic5.jpg';
import pic6 from '../../assets/scroll-pic6.jpg';
import pic7 from '../../assets/scroll-pic7.jpg';
import pic8 from '../../assets/scroll-pic8.jpg';

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
  >
    ❮
  </div>
);

const AwardsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="relative py-20 px-4 md:px-10 overflow-hidden"
      style={{
        borderColor: 'var(--color-primary)',
        background: `linear-gradient(270deg, var(--color-secondary), #fff7f7, var(--color-secondary))`,
        backgroundSize: '400% 400%',
        animation: 'gradientShift 12s ease infinite',
      }}
    >

      <div className="max-w-6xl mx-auto">
        {/* Accent line */}
        <div className="w-50 h-1 bg-primary mx-auto mb-8 rounded-full"></div>

        {/* Heading */}
        <motion.h1
          className="satoshi-bold text-primary text-4xl md:text-5xl text-center mb-5 drop-shadow-sm"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Her Awards & Accolades
        </motion.h1>

        {/* Description */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="satoshi-medium text-gray-600 text-center text-base sm:text-lg leading-relaxed">
            Prachi Kaushik, the founder of Vyomini Social Foundation, has been
            recognized with numerous awards for her outstanding contributions to
            women's empowerment and social change. Her work has inspired many and
            continues to make a significant impact in the community.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Slider {...settings}>
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="px-3 py-4 h-[25rem] grid place-items-center"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden hover:shadow-md transition-shadow">


                  <motion.img
                    src={img}
                    alt={`award-pic-${idx + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* optional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

            ))}
          </Slider>
        </motion.div>

        {/* See More Link */}
        <div className="text-end mt-8 mr-4 sm:mr-8 md:mr-0">
          <a
            href="/Archive"
            className="inline-flex items-center gap-2 satoshi-bold text-primary hover:text-text transition-colors duration-300 group text-base md:text-lg"
          >
            See More
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
