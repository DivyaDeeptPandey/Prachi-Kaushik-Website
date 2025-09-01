import React, { useState } from 'react';
import { motion } from 'framer-motion';
import speakerPic from '../../assets/impact3-pic.jpg';
import leaderPic from '../../assets/impact2-pic.jpg';
import advocatePic from '../../assets/advocate.jpg';
import tvPic from '../../assets/tvp.png';
import fullWidthImage from '../../assets/impact-banner.avif'; 
import { ArrowRight, ChevronDown, ChevronUp, Users, Target, Heart, Award, Shield, Mic, Users2, Star } from 'lucide-react';

const impactItems = [
  {
    title: "As a Thought Leader",
    shortDescription: "Founding Vyomini Social Enterprise to create sustainable change through innovative social entrepreneurship models across 10+ Indian states.",
    description: "Ms. Prachi Kaushik founded Vyomini Social Enterprise in 2017 with a vision to create sustainable change through enterprise rather than traditional NGO models. Her thought leadership focuses on building ecosystems for women-led entrepreneurship in clean energy, sustainable agriculture, nutrition, health, and sanitation. She has developed innovative business models that empower women economically while addressing critical social issues. Her work has been recognized nationally and internationally, with her incubation models now replicated in various districts as case studies of social innovation.",
    img: leaderPic,
    stats: ["550+ volunteers", "100K+ women impacted", "10+ states"],
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "As a Women's Safety Advocate",
    shortDescription: "Leading awareness campaigns and legal initiatives to combat violence against women and ensure safety in public spaces.",
    description: "Ms. Prachi has been a powerful advocate against gender-based violence, initiating the 'AwaZ Uthao Campaign' to ensure women's safety in public domains. She has worked extensively on legal empowerment, providing free legal aid to victims, organizing legal awareness camps, and facilitating rescue services. Through her work with the West Delhi Legal Aid Association, she has helped countless women navigate the complex legal system to seek justice. Her efforts include safety audits, capacity building workshops, and developing educational materials to combat violence against women in both urban and rural communities.",
    img: advocatePic,
    stats: ["Legal aid to 5K+ women", "100+ awareness camps", "Rescue services"],
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "As a Youth Empowerment Champion",
    shortDescription: "Empowering over 20,000 young women through skill development programs and entrepreneurship training.",
    description: "Ms. Prachi has established training centers across India to empower youth, particularly young women, with practical skills in diverse sectors including manufacturing, digital literacy, and entrepreneurship. Her programs focus on creating sustainable livelihood opportunities through vocational training, mentorship, and market linkages. She has launched initiatives like the Entrepreneurship Development Workshop for marginalized youth in collaboration with SIDBI, focusing on high-demand skills for urban markets. Through campus connect programs, she engages students in volunteerism and internships, helping them understand field dynamics and contribute to rural development.",
    img: tvPic,
    stats: ["20K+ youth trained", "Multiple skill sectors", "Market linkages"],
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "As a National Speaker & Awareness Creator",
    shortDescription: "Educating over 2.5 million women about menstrual hygiene and breaking cultural taboos through thousands of workshops.",
    description: "Ms. Prachi Kaushik regularly speaks at national forums, educational institutions, and rural platforms, spreading awareness about menstrual health, community development, and women's empowerment. She has addressed audiences at events like IIT Delhi's BioEnviroCon 2025 and conducted over 15,000 workshops across India. Her research into Vedic practices revealed that menstruation was historically respected rather than stigmatized. She works to restore this perspective while addressing modern health concerns through her 3A approach: Awareness, Accessibility, and Affordability.",
    img: speakerPic,
    stats: ["2.5M+ women educated", "15,000+ workshops", "15+ states reached"],
    icon: <Mic className="w-6 h-6" />
  },
  {
    title: "As Menstrual Health Innovator",
    shortDescription: "Pioneering low-cost biodegradable sanitary pads and creating India's first incubation center for menstrual hygiene products.",
    description: "Prachi developed 'Rakshak' - biodegradable sanitary napkins costing just ₹1.5-2 per piece. She established manufacturing units that train women to produce eco-friendly pads using locally available materials like banana fibers, jute, and cotton. Her model includes vending machines and incinerators for proper disposal. She has trained over 10,000 women, with 5,500 becoming entrepreneurs who now supply products to schools under government schemes. Her work addresses both health access and environmental sustainability.",
    img: advocatePic,
    stats: ["10K+ women trained", "₹1.5 per pad", "Eco-friendly solutions"],
    icon: <Heart className="w-6 h-6" />
  }
];

const ImpactSection = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="bg-secondary py-16 relative overflow-hidden">
      <div 
        className="h-1 bg-primary rounded-full mx-auto mb-6"
        style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
      ></div>
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 
          className="satoshi-bold text-primary mb-4 drop-shadow-md"
          style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}
        >
          Impact Created
        </h1>
        <p 
          className="satoshi-regular text-gray-600 mx-auto"
          style={{ 
            fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
            maxWidth: 'clamp(18rem, 80vw, 54rem)'
          }}
        >
          From overcoming personal adversity to transforming millions of lives, Ms. Prachi Kaushik's journey embodies 
          resilience, innovation, and transformative leadership in women empowerment and community development
        </p>
      </motion.div>

      {/* Impact Stats Overview */}
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div 
            className="font-bold text-primary"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            2.5M+
          </div>
          <div 
            className="text-gray-600"
            style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            Women Educated
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div 
            className="font-bold text-primary"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            100K+
          </div>
          <div 
            className="text-gray-600"
            style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            Women Impacted
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div 
            className="font-bold text-primary"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            20K+
          </div>
          <div 
            className="text-gray-600"
            style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            Youth Empowered
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div 
            className="font-bold text-primary"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
          >
            15+
          </div>
          <div 
            className="text-gray-600"
            style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            States Covered
          </div>
        </div>
      </motion.div>

      {/* Full Width Image with Overlay */}
      <motion.div 
        className="w-full mb-16 relative overflow-hidden"
        style={{ height: 'clamp(18rem, 40vw, 24rem)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 z-10"></div>
        <img 
          src={fullWidthImage} 
          alt="Impact Overview" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-6 left-6 z-20 text-white max-w-2xl">
          <h2 
            className="satoshi-bold text-secondary mb-2"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
          >
            Creating Sustainable Change
          </h2>
          <p 
            className="satoshi-regular text-secondary"
            style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}
          >
            Grassroots initiatives transforming communities across India
          </p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {impactItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-2/5 relative overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Stats Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.stats.map((stat, i) => (
                    <span 
                      key={i} 
                      className="bg-white/90 text-primary satoshi-medium rounded-full px-3 py-1"
                      style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col" style={{ minHeight: 'clamp(18rem, 40vw, 20rem)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                  <h2 
                    className="satoshi-bold text-primary relative inline-block"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.875rem)' }}
                  >
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/40 -mb-1"></span>
                  </h2>
                </div>
                
                <p 
                  className="satoshi-medium text-gray-700 mb-4"
                  style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.125rem)' }}
                >
                  {item.shortDescription}
                </p>
                
                <div className={`overflow-hidden transition-all duration-500 ${expandedItems[index] ? 'max-h-[2000px]' : 'max-h-0'}`}>
                  <p 
                    className="satoshi-regular text-gray-700 leading-relaxed mb-4"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
                
                {/* Expand/Collapse Button */}
                <div className="mt-auto pt-4">
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="flex items-center text-primary satoshi-medium hover:text-accent transition-colors"
                    style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}
                  >
                    {expandedItems[index] ? (
                      <>
                        <span>Read less</span>
                        <ChevronUp className="ml-1" style={{ width: 'clamp(0.875rem, 1.5vw, 1rem)', height: 'clamp(0.875rem, 1.5vw, 1rem)' }} />
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <ChevronDown className="ml-1" style={{ width: 'clamp(0.875rem, 1.5vw, 1rem)', height: 'clamp(0.875rem, 1.5vw, 1rem)' }} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Read More Button */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="/Archive"
          className="inline-flex items-center gap-2 satoshi-bold bg-primary text-secondary px-6 py-3 rounded-full hover:bg-accent transition-all duration-300 group shadow-md hover:shadow-lg"
          style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1rem)' }}
        >
          Explore More Impact Stories
          <ArrowRight 
            className="transform group-hover:translate-x-1 transition-transform duration-300" 
            style={{ width: 'clamp(1rem, 2vw, 1.25rem)', height: 'clamp(1rem, 2vw, 1.25rem)' }}
          />
        </a>
      </motion.div>
    </section>
  );
};

export default ImpactSection;