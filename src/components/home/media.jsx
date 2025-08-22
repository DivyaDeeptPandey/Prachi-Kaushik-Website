import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import media1 from '../../assets/media1.png';
import media2 from '../../assets/media2.png';
import media3 from '../../assets/media3.png';
import media4 from '../../assets/media4.png';

// Custom Arrows
const NextArrow = ({ onClick }) => (<div onClick={onClick} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300" > ❯ </div>);
const PrevArrow = ({ onClick }) => (<div onClick={onClick} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300" > ❮ </div>);
const newsItems = [
    {
        id: 1,
        title: "Women in India Are Creating the Menstrual Products They Need",
        description:
            "Across India, women still face period taboos and lack hygiene products—now female entrepreneurs are making them themselves.",
        image: media1,
        siteLink:
            "https://globalpressjournal.com/asia/india/women-india-creating-menstrual-products-need/",
    },
    {
        id: 2,
        title:
            "How Prachi Kaushik’s Vyomini promotes menstrual health & empowerment",
        description:
            "Women’s empowerment should be at the root of a nation’s roadmap. Prachi Kaushik, Founder of Vyomini, lives by the motto ‘Woman first – Prosperity for All’.",
        image: media2,
        siteLink:
            "https://yourstory.com/herstory/2019/05/women-prachi-kaushik-vyomini-menstruation?&utm_source=share&utm_medium=app",
    },
    {
        id: 3,
        title:
            "This social entrepreneur brings menstrual health, women’s empowerment to the forefront",
        description:
            "Prachi has long battled the stigma associated with periods, enabling women to be healthy, financially independent, and entrepreneurs in their own right.",
        image: media3,
        siteLink:
            "https://yourstory.com/socialstory/2022/10/social-entrepreneur-prachi-kaushik-menstrual-health-women-empowerment",
    },
    {
        id: 4,
        title:
            "TheGlitz ‘Super Woman’ Prachi Kaushik, Founder & Director, VYOMINI Social Enterprise",
        description:
            "Prachi has empowered over 100,000 grassroots women through health awareness and revitalizing rural economies by local sourcing of products.",
        image: media4,
        siteLink:
            "https://theglitz.media/theglitz-super-woman-prachi-kaushik-founder-director-vyomini-social-enterprise/",
    },
];

const Media = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 12000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="bg-secondary py-16">
            {/* Section Divider */}
            <div className="w-50 h-1 bg-primary mx-auto mb-10 rounded-full"></div>
            <div className="max-w-7xl mx-auto ">
                <h1 className="satoshi-bold text-primary text-center text-4xl md:text-5xl mb-5 drop-shadow-sm">
                    Media Coverage
                </h1>

                <Slider {...settings}>
                    {newsItems.map((item) => (
                        <div key={item.id} className="px-3 py-4">
                            <div
                                className="bg-white rounded-sm overflow-hidden flex flex-col h-130
             hover:shadow-sm hover:scale-105 transition duration-300"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-5 flex flex-col flex-grow">
                                    <h2 className="satoshi-medium text-2xl text-primary mb-2">
                                        {item.title}
                                    </h2>
                                    <p className="satoshi-regular text-md flex-grow mb-5">
                                        {item.description}
                                    </p>
                                    <a
                                        href={item.siteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-block px-5 py-1.5 mt-auto mx-auto text-sm font-medium text-primary 
                 border border-primary rounded-full overflow-hidden shadow-md transition-colors duration-300
                 z-10 group"
                                    >
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                            Read More
                                        </span>
                                        <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                       transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                                    </a>
                                </div>
                            </div>


                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Media;