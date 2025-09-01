import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import media1 from '../../assets/media1.png';
import media2 from '../../assets/media2.png';
import media3 from '../../assets/media3.png';
import media4 from '../../assets/media4.png';

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div 
    onClick={onClick} 
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
  >
    ❯
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div 
    onClick={onClick} 
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
  >
    ❮
  </div>
);

const newsItems = [
  {
    id: 1,
    title: "Women in India Are Creating the Menstrual Products They Need",
    description: "Across India, women still face period taboos and lack hygiene products—now female entrepreneurs are making them themselves.",
    image: media1,
    siteLink: "https://globalpressjournal.com/asia/india/women-india-creating-menstrual-products-need/",
    publisher: "Global Press Journal"
  },
  {
    id: 2,
    title: "How Prachi Kaushik's Vyomini promotes menstrual health & empowerment",
    description: "Women's empowerment should be at the root of a nation's roadmap. Prachi Kaushik, Founder of Vyomini, lives by the motto 'Woman first – Prosperity for All'.",
    image: media2,
    siteLink: "https://yourstory.com/herstory/2019/05/women-prachi-kaushik-vyomini-menstruation",
    publisher: "YourStory"
  },
  {
    id: 3,
    title: "This social entrepreneur brings menstrual health, women's empowerment to the forefront",
    description: "Prachi has long battled the stigma associated with periods, enabling women to be healthy, financially independent, and entrepreneurs in their own right.",
    image: media3,
    siteLink: "https://yourstory.com/socialstory/2022/10/social-entrepreneur-prachi-kaushik-menstrual-health-women-empowerment",
    publisher: "Social Story"
  },
  {
    id: 4,
    title: "TheGlitz 'Super Woman' Prachi Kaushik, Founder & Director, VYOMINI Social Enterprise",
    description: "Prachi has empowered over 100,000 grassroots women through health awareness and revitalizing rural economies by local sourcing of products.",
    image: media4,
    siteLink: "https://theglitz.media/theglitz-super-woman-prachi-kaushik-founder-director-vyomini-social-enterprise/",
    publisher: "The Glitz"
  }
];

const Media = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          arrows: false,
          dots: true
        } 
      },
    ],
  };

  return (
    <section className="bg-secondary to-white py-6 md:py-10 px-4 md:px-6">
      {/* Section Divider */}
      <div className="w-50 h-1 bg-primary rounded-full mx-auto mb-6"></div>
      
      <div className="max-w-7xl mx-auto">
        <h1 className="satoshi-bold text-primary text-center text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 drop-shadow-sm">
          Media Coverage
        </h1>

        <p className="satoshi-regular text-gray-600 text-center text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-12 px-4">
          Prachi Kaushik's impactful work has been featured in leading publications, highlighting her contributions to menstrual health awareness and women's empowerment across India.
        </p>

        <div className="relative px-2 md:px-4">
          <Slider {...settings}>
            {newsItems.map((item) => (
              <div key={item.id} className="px-2 md:px-3 py-3 md:py-4 focus:outline-none">
                <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full satoshi-medium">
                      {item.publisher}
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <h2 className="satoshi-bold text-lg md:text-xl text-primary mb-3 line-clamp-2 leading-tight">
                      {item.title}
                    </h2>
                    <p className="satoshi-regular text-gray-600 text-sm md:text-base mb-4 md:mb-5 flex-grow line-clamp-3">
                      {item.description}
                    </p>
                    <a
                      href={item.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 satoshi-medium text-primary hover:text-red-600 transition-colors duration-300 group mt-auto text-sm md:text-base"
                    >
                      Read Full Article
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-6 md:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="/media-coverage"
            className="inline-flex items-center gap-2 satoshi-bold bg-primary text-secondary px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-red-600 transition-all duration-300 group text-sm md:text-base shadow-md hover:shadow-lg"
          >
            View All Media Features
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom dot styling for slick slider */
        :global(.slick-dots) {
          bottom: -40px !important;
        }
        
        :global(.slick-dots li button:before) {
          font-size: 10px;
          color: var(--color-primary);
          opacity: 0.5;
        }
        
        :global(.slick-dots li.slick-active button:before) {
          opacity: 1;
          color: var(--color-primary);
        }
      `}</style>
    </section>
  );
};

export default Media;