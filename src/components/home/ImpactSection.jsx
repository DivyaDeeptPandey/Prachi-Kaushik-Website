import React from 'react';
import { motion } from 'framer-motion';
import speakerPic from '../../assets/impact3-pic.jpg';
import leaderPic from '../../assets/impact2-pic.jpg';
import advocatePic from '../../assets/advocate.jpg';
import tvPic from '../../assets/tvp.png';
import pic from '../../assets/wec.png';
import { ArrowRight } from 'lucide-react';

const impactItems = [
  {
    title: "As a Speaker",
    description:
      "Ms. Prachi Kaushik regularly speaks at national forums, educational institutions, and rural platforms, spreading awareness about menstrual health, community development, and women's empowerment. She has addressed audiences at events like IIT Delhi's BioEnviroCon 2025 and conducted thousands of workshops across India. Her talks emphasize dignity, sustainability, and grassroots inclusion, often delivered in local languages to maximize community understanding. She also engages youth and parents to challenge taboos at the family level.",
    img: speakerPic,
  },
  {
    title: "As a Leader",
    description:
      "She founded Vyomini Social Foundation in 2017 and leads a team of 550+ volunteers. Her leadership has impacted over 100,000 women through sustainable development initiatives, skill-building programs, and social entrepreneurship models in 10+ Indian states. During crises like COVID-19, she mobilized rural women to produce protective supplies, highlighting her responsive and community-first leadership style. Her incubation models are now replicated in various districts as case studies of social innovation.",
    img: leaderPic,
  },
  {
    title: "As Menstrual Hygiene Advocate",
    description:
      "Prachi has conducted 15,000+ menstrual health workshops and introduced low-cost biodegradable pads and reusable products. Her 3A approach—Awareness, Accessibility, and Affordability—drives large-scale behavioral change in rural and underserved communities. She not only focuses on product access but also educates women about safe disposal, reproductive health, and breaking silence around menstruation. Her efforts have led to sustainable hygiene ecosystems powered by women themselves.",
    img: advocatePic,
  },
  {
    title: "As Women Empowerment Champion",
    description:
      "She has empowered over 20,000 women by establishing training centers for small-scale industries like paper bags, sanitary products, and jute work. Her initiatives support financial independence, legal aid, and holistic well-being for women in rural India. Through Vyomini’s support systems, many marginalized women have become entrepreneurs, earning stable incomes and leading local change. Her mission focuses on dignity, opportunity, and sustainable growth for every woman she reaches.",
    img: tvPic,
  },
  {
    title: "Through Media Interactions",
    description:
      "Prachi uses media platforms to amplify her message, participating in digital interviews, education-focused panels, and social forums. Her views have been highlighted in articles and events like BioEnviroCon 2025, bringing attention to grassroots issues on a national stage. She often shares her work via online platforms and social media, helping bridge the rural-urban conversation on health, hygiene, and gender equity. Her digital outreach ensures her initiatives gain broader public and institutional support.",
    img: pic,
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-secondary py-20 px-6 md:px-12">
      {/* Section Divider */}
      <div className="w-50 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

      {/* Section Heading */}
      <motion.h1
        className="satoshi-bold text-primary text-4xl md:text-5xl text-center mb-14 drop-shadow-sm"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Impact Created
      </motion.h1>

      {impactItems.map((item, index) => (
        <motion.div
          key={index}
          className="mb-20 max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-md shadow-md hover:shadow-lg transition-all duration-300 p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Card Heading with underline */}
          <h2 className="satoshi-bold text-3xl md:text-4xl text-primary text-center mb-10 relative">
            {item.title}
          </h2>

          {/* Content Row */}
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-12`}
          >
            {/* Image */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full max-w-md h-72 object-cover rounded-sm shadow-md"
              />
            </motion.div>

            {/* Description */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="satoshi-regular text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
        
      ))}
      {/* Read More Button */}
      <div className="text-end mt-8 sm:mr-8 md:mr-31">
          <a
            href="/Archive"
            className="inline-flex items-center gap-2 satoshi-bold text-primary hover:text-text transition-colors duration-300 group text-base md:text-lg"
          >
            See More
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
    </section>
  );
};

export default ImpactSection;
















