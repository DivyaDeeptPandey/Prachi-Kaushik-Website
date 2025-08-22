import React from 'react';
import { motion } from 'framer-motion';
import aiPic from '../../assets/ai-pic.png';
import leaderPic from '../../assets/impact2-pic.jpg';
import advocatePic from '../../assets/advocate.jpg';
import speakerPic from '../../assets/solo-pic.png';
import tvPic from '../../assets/tvp.png';
import wecPic from '../../assets/wec.png';
import { ArrowRight } from 'lucide-react';

const ImpactPage = () => {
  const impactItems = [
    {
      title: "As Leader",
      description:
        "Ms. Kaushik's leadership shines through her ability to build systems that empower, rather than simply offer charity. She founded Vyomini Social Foundation in 2017, transforming it into a high-impact social enterprise that operates in more than 10 Indian states. Under her leadership, Vyomini has launched initiatives in menstrual health, skill development, sanitation, and sustainable microenterprises. She leads a volunteer network of 550+ people, engages youth through campus connect programs, and builds partnerships with CSR units, MSME ministries, and NGOs. During the COVID crisis, she demonstrated agile leadership by training rural women to produce masks and sanitary kits and distributing them in vulnerable areas. Her Vyomini Udhyami Consortium provides not just skills training but also access to markets, mentorship, and financial support, allowing rural women to transition into confident business owners. Through her incubation models and franchising approach, she's helping scale localized, sustainable enterprises led entirely by women.",
      img: leaderPic,
    },
    {
      title: "As Menstrual Hygiene Advocate",
      description:
        "Ms. Kaushik's menstrual health work is one of her most impactful areas, combining health awareness, environmental consciousness, and economic empowerment. She has organized 15,000+ awareness sessions across India—spanning slums, schools, community centers, and panchayats—educating over 25 lakh women and girls. Her 3A framework (Awareness, Accessibility, Affordability) underpins all her menstrual health campaigns. She addresses myths like impurity during periods, promotes the use of biodegradable pads, and educates on hygienic disposal methods. She introduced low-cost pads (₹1.5–₹2 per piece) and reusable 3-year pads (₹50) made by women in rural communities, providing both health protection and income-generation opportunities. Beyond product access, she ensures psychological and social support by involving families and community leaders, thus fostering a cultural shift in how menstruation is perceived. Her programs also intersect with public health, reducing risks of UTIs and reproductive tract infections caused by lack of hygiene awareness.",
      img: advocatePic,
    },
    {
      title: "As Speaker",
      description:
        "Ms. Prachi Kaushik has established herself as a powerful and persuasive speaker, addressing diverse audiences from grassroots communities to premier institutions like IIT Delhi, where she was a distinguished panelist at BioEnviroCon 2025. She speaks with authority on subjects such as rural development, menstrual health, women's entrepreneurship, and environmental sustainability. Her community engagements involve speaking directly to women and girls in underserved areas, where she dismantles menstrual myths, educates on hygiene, and promotes self-reliance. She also interacts with school and college students, conducting sessions on body positivity, mental health, and emotional support. Even during the COVID-19 pandemic, she seamlessly transitioned to digital mediums like Zoom and YouTube Lives to continue reaching thousands with her message. In every forum, her communication style is rooted in empathy, simplicity, and action-oriented solutions, making her a relatable and trusted voice for change.",
      img: speakerPic,
    },
    {
      title: "As Women Empowerment Champion",
      description:
        "Empowering women is at the core of Ms. Kaushik's mission. Through Vyomini, she has trained over 10,000 women in income-generating skills like sanitary napkin production, jute and paper product creation, packaging, and recycling. Over 5,500 women have become full-time entrepreneurs, setting up micro-units in their villages. She supports them through a complete ecosystem—training, raw material procurement, branding, marketing, and access to finance via CSR funds or small loans. Many of these women are survivors of domestic abuse, economic marginalization, or caste-based oppression. Prachi's work includes setting up Vyomini Facilitation Centres, which offer legal aid, health check-ups, psychological counseling, and business mentoring. She ensures that empowerment is not just economic, but holistic and sustainable, allowing women to become change-makers in their own communities. Her efforts have enabled women to send their children to school, access healthcare, and earn respect within traditionally patriarchal households.",
      img: tvPic,
    },
    {
      title: "Through Media Interactions",
      description:
        "While not a regular on mainstream TV debates, Ms. Kaushik actively uses digital and educational media to amplify her voice. She's been featured in platforms like India Education Diary, where her work on community outreach and entrepreneurship is recognized. She uses social media, online panels, interviews, and webinars to reach broader audiences. For instance, her session at BioEnviroCon 2025 was widely shared in academic and developmental circles. These platforms help her share best practices, collaborate with policymakers, and influence CSR initiatives. She has also engaged in media interactions related to menstrual taboos, eco-friendly hygiene solutions, and women's economic independence. Her media presence adds credibility and visibility to grassroots issues, influencing both public perception and institutional support.",
      img: wecPic,
    },
  ];

  return (
    <div className="bg-secondary min-h-screen pt-20 pb-16">
      {/* Banner Image Section */}
      <div className="w-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden"
        >
          <img
            src={aiPic}
            alt="AI Contribution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <motion.h1
              className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-center text-secondary px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Impact she has made
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="w-40 h-1 bg-primary mx-auto my-12 rounded-full"></div>

      {/* Impact Cards */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {impactItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-16 bg-white/80 backdrop-blur-sm rounded-md customShadow hover:shadow-lg transition-all duration-300 p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card Heading */}
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary text-center mb-10 relative">
              {item.title}
            </h2>

            {/* Content Row */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
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
                  className="w-full max-w-md h-72 object-cover rounded-sm customShadow"
                />
              </motion.div>

              {/* Description */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="satoshi-regular text-lg text-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="text-center mt-8 max-w-6xl mx-auto px-4 md:px-8">
        <a
          href="/Archive"
          className="inline-flex items-center gap-2 satoshi-bold text-primary hover:text-text transition-colors duration-300 group text-base md:text-lg"
        >
        </a>
      </div>
    </div>
  );
};

export default ImpactPage;