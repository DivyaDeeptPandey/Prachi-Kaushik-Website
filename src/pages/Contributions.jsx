import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Target, Leaf, Heart, Calendar, MapPin, 
  Award, BookOpen, Shield, Brain, GraduationCap, 
  Building2, Ambulance
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ContributionsPage = () => {
  // Contribution sections data
  const contributionSections = [
    {
      title: "As a Social Entrepreneur",
      icon: <Users className="w-8 h-8" />,
      achievements: [
        "Founded Vyomini Social Enterprise in 2017 with sustainable business models for social change",
        "Developed 'Rakshak' biodegradable sanitary pads at just ₹1.5-2 per piece",
        "Established 10 manufacturing units across India creating local employment",
        "Created circular economy models that empower women entrepreneurs",
        "Pioneered women-led entrepreneurship in sanitation economy",
        "Generated sustainable livelihood opportunities for thousands of rural women"
      ],
      impact: "Transformed traditional NGO model into sustainable social enterprise creating both social impact and economic sustainability"
    },
    {
      title: "As a Thought Leader",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        "TEDx Speaker on menstrual health and women's empowerment",
        "Regular speaker at IIT Delhi and other prestigious institutions",
        "Featured at National Women's Entrepreneurship Summit",
        "Keynote speaker at International Conference on Social Entrepreneurship",
        "Contributor to policy discussions on women's health and economic rights",
        "Published research on menstrual health management and sustainable solutions"
      ],
      impact: "Shaped national conversation around women's health and economic empowerment through thought leadership and advocacy"
    },
    {
      title: "As a Sustainability Champion",
      icon: <Leaf className="w-8 h-8" />,
      achievements: [
        "Developed biodegradable sanitary products using local, natural materials",
        "Created circular economy models that reduce environmental impact",
        "Promoted use of banana fibers, jute, and cotton in manufacturing",
        "Implemented eco-friendly disposal systems for menstrual waste",
        "Reduced carbon footprint through sustainable production methods",
        "Advocated for green menstruation practices across India"
      ],
      impact: "Pioneered environmentally sustainable solutions in menstrual hygiene sector while maintaining affordability and accessibility"
    },
    {
      title: "Women Empowerment",
      icon: <Heart className="w-8 h-8" />,
      achievements: [
        "Educated 2.5+ million women about menstrual health and hygiene",
        "Trained 10,000+ women in entrepreneurial and vocational skills",
        "Enabled 5,500+ women to become successful entrepreneurs",
        "Created economic independence opportunities through skill development",
        "Broken cultural taboos around menstruation in rural communities",
        "Provided legal aid and support services for women's rights"
      ],
      impact: "Transformed gender dynamics and economic opportunities for women across India, creating a ripple effect of empowerment"
    },
    {
      title: "Youth Empowerment",
      icon: <GraduationCap className="w-8 h-8" />,
      achievements: [
        "Campus Connect programs engaging young students in social causes",
        "Internship opportunities for youth in social development sector",
        "Skill development programs in digital literacy and entrepreneurship",
        "Youth volunteer programs for community development initiatives",
        "Career guidance and mentorship for young women",
        "Leadership development initiatives for next-generation change makers"
      ],
      impact: "Inspired and equipped young people to become agents of social change in their communities"
    },
    {
      title: "Community Development",
      icon: <Building2 className="w-8 h-8" />,
      achievements: [
        "Established Vyomini Suvidha Kendras for comprehensive community support",
        "Implemented government scheme awareness and accessibility programs",
        "Created community-based manufacturing units fostering local economy",
        "Developed local supply chains creating sustainable employment",
        "Organized health camps serving 200,000+ community members",
        "Built community resilience through skill development and economic opportunities"
      ],
      impact: "Holistic community development approach addressing health, economic, and social needs through sustainable interventions"
    },
    {
      title: "Disaster Management - COVID-19 Response",
      icon: <Ambulance className="w-8 h-8" />,
      achievements: [
        "Mobilized rural women to produce protective equipment during pandemic",
        "Organized donation drives for migrant workers and affected families",
        "Distributed hygiene kits to Delhi municipality staff",
        "Conducted online training programs during lockdown periods",
        "Provided essential support to COVID-affected families",
        "Adapted menstrual health programs to virtual platforms ensuring continuity"
      ],
      impact: "Effective crisis response demonstrating organizational resilience and unwavering commitment to community welfare during challenging times"
    }
  ];

  // Statistics data
  const statistics = [
    { number: "2.5M+", label: "Women Educated", icon: <BookOpen className="w-6 h-6" /> },
    { number: "100K+", label: "Lives Impacted", icon: <Target className="w-6 h-6" /> },
    { number: "10K+", label: "Entrepreneurs Created", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "States Reached", icon: <MapPin className="w-6 h-6" /> }
  ];

  // Awards data
  const awards = [
    { name: "Women Transforming India Award", organization: "NITI Aayog", year: "2023" },
    { name: "Rex Karamveer Global Fellowship", organization: "UN Partnership", year: "2023" },
    { name: "Social Entrepreneur of the Year", organization: "2024", year: "2024" },
    { name: "BW Businessworld Women Social Entrepreneur", organization: "BW Businessworld", year: "2024" },
    { name: "BRICS Chamber of Commerce Award", organization: "BRICS CCI", year: "2023" }
  ];

  return (
    <div className="bg-secondary">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1 
            className="satoshi-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-secondary drop-shadow-md mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contributions of Prachi Kaushik
          </motion.h1>
          <motion.p 
            className="satoshi-regular text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming lives through sustainable social entrepreneurship and women empowerment
          </motion.p>
          
          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="satoshi-bold text-2xl md:text-3xl mb-1 text-secondary">{stat.number}</div>
                <div className="satoshi-regular text-sm opacity-90 text-secondary">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contributions Sections */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="satoshi-bold text-3xl md:text-4xl text-primary text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Areas of Impact
          </motion.h2>

          <div className="space-y-20">
            {contributionSections.map((section, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    {section.icon}
                  </div>
                  <h3 className="satoshi-bold text-2xl md:text-3xl text-primary">{section.title}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="satoshi-medium text-lg text-gray-800 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {section.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="satoshi-regular text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h4 className="satoshi-medium text-lg text-primary mb-4">Overall Impact</h4>
                    <p className="satoshi-regular text-gray-700">{section.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="satoshi-bold text-3xl md:text-4xl text-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Recognition & Awards
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="satoshi-bold text-lg text-primary mb-2">{award.name}</h3>
                <p className="satoshi-regular text-gray-700 mb-1">{award.organization}</p>
                <p className="satoshi-regular text-gray-500 text-sm">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="satoshi-bold text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Join the Movement
          </motion.h2>
          <motion.p 
            className="satoshi-regular text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Be part of the transformative journey towards women empowerment and sustainable development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-primary px-8 py-3 rounded-lg satoshi-medium hover:bg-gray-100 transition-colors">
              Support Our Work
            </button>
            <button className="border border-white px-8 py-3 rounded-lg satoshi-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default ContributionsPage;