import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Star, TrendingUp, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Achievements = () => {
  // Achievement data
  const stats = [
    { icon: Users, number: "2.5M+", label: "Women Educated", description: "About menstrual health and hygiene" },
    { icon: Target, number: "10K+", label: "Women Entrepreneurs", description: "Trained and supported" },
    { icon: Heart, number: "5K+", label: "Women Treated", description: "Through medical camps" },
    { icon: MapPin, number: "15+", label: "States Reached", description: "Across India" },
  ];

  const awards = [
    { 
      title: "Women Transforming India Award", 
      organization: "NITI Aayog", 
      year: "2021",
      description: "Selected as one of 75 women transforming India as part of India's 75th Independence celebration"
    },
    { 
      title: "Rex Karamveer Global Fellowship", 
      organization: "United Nations", 
      year: "2022",
      description: "Presented by International Confederation of NGOs in partnership with the UN"
    },
    { 
      title: "Social Entrepreneur of the Year", 
      organization: "BRICS Chamber of Commerce", 
      year: "2024",
      description: "Recognized for outstanding contributions to social entrepreneurship"
    },
    { 
      title: "BW Businessworld Women Social Entrepreneur", 
      organization: "Businessworld", 
      year: "2024",
      description: "Awarded for exceptional work in women's empowerment and social change"
    },
  ];

  const milestones = [
    { year: "2017", event: "Founded Vyomini Social Enterprise", description: "Launched to empower women through entrepreneurship" },
    { year: "2018", event: "First Manufacturing Unit Established", description: "Set up initial production facility in Delhi" },
    { year: "2019", event: "Reached 100,000 Women", description: "Expanded programs to multiple states" },
    { year: "2020", event: "COVID-19 Response Initiatives", description: "Adapted programs during pandemic, provided hygiene kits" },
    { year: "2021", event: "National Recognition", description: "Received Women Transforming India Award from NITI Aayog" },
    { year: "2022", event: "International Expansion", description: "Began planning initiatives for African countries" },
    { year: "2023", event: "10,000th Entrepreneur Trained", description: "Milestone in economic empowerment" },
    { year: "2024", event: "Policy Influence", description: "Contributed to Menstrual Hygiene Policy for Schools" },
  ];

  return (
    <div className="min-h-screen bg-secondary pt-20">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 drop-shadow-md">
              Achievements
            </h1>
            <p className="satoshi-medium text-xl md:text-2xl text-gray-700 mb-8">
              A decade of transformative impact and recognition
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 drop-shadow-md">
              Impact By Numbers
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Quantifying a decade of dedication to women's empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-secondary rounded-2xl customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="satoshi-bold text-3xl text-primary mb-2">{stat.number}</h3>
                <p className="satoshi-medium text-gray-900 mb-2">{stat.label}</p>
                <p className="satoshi-regular text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div
            className="mt-16 bg-primary/5 rounded-2xl p-8 customShadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="satoshi-bold text-2xl md:text-3xl text-primary">15,000+</p>
                <p className="satoshi-regular text-gray-700">Workshops Conducted</p>
              </div>
              <div>
                <p className="satoshi-bold text-2xl md:text-3xl text-primary">400+</p>
                <p className="satoshi-regular text-gray-700">Health Camps Organized</p>
              </div>
              <div>
                <p className="satoshi-bold text-2xl md:text-3xl text-primary">10</p>
                <p className="satoshi-regular text-gray-700">Manufacturing Units</p>
              </div>
              <div>
                <p className="satoshi-bold text-2xl md:text-3xl text-primary">550+</p>
                <p className="satoshi-regular text-gray-700">Dedicated Volunteers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 drop-shadow-md">
              Awards & Recognition
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              National and international recognition for transformative work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="satoshi-bold text-xl text-gray-900">{award.title}</h3>
                    <p className="satoshi-medium text-primary">{award.organization} • {award.year}</p>
                  </div>
                </div>
                <p className="satoshi-regular text-gray-700">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 drop-shadow-md">
              Journey Timeline
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Key milestones in Prachi Kaushik's remarkable journey
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={`flex-none w-24 md:w-32 text-right ${index % 2 === 0 ? 'md:pr-8 order-1' : 'md:pl-8 order-3 md:text-left'}`}>
                    <p className="satoshi-bold text-2xl text-primary">{milestone.year}</p>
                  </div>
                  
                  <div className="flex-none order-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className={`flex-1 bg-secondary rounded-2xl p-6 customShadow ${index % 2 === 0 ? 'ml-4 md:ml-0 order-3' : 'mr-4 md:mr-0 order-1'}`}>
                    <h3 className="satoshi-bold text-xl text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="satoshi-regular text-gray-700">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary mb-4 drop-shadow-md">
              Media Features & Publications
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              National recognition in prominent publications and media
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 customShadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="satoshi-bold text-xl text-gray-900 mb-4">Featured In</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-primary mr-3" />
                    <span className="satoshi-regular text-gray-700">Businessworld Magazine</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-primary mr-3" />
                    <span className="satoshi-regular text-gray-700">The Economic Times</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-primary mr-3" />
                    <span className="satoshi-regular text-gray-700">Forbes India</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-primary mr-3" />
                    <span className="satoshi-regular text-gray-700">YourStory</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="satoshi-bold text-xl text-gray-900 mb-4">Academic Publications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary mr-3" />
                    <span className="satoshi-regular text-gray-700">South Asian Journal of Business & Management Cases</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary mr-3" />
                    <span className="satoshi-regular text-gray-700">Social Entrepreneurship Review</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-secondary mb-6">
              Join the Movement
            </h2>
            <p className="satoshi-regular text-secondary text-xl mb-8">
              Be part of the journey to empower millions more women across India and beyond.
            </p>
            <motion.button
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Support Our Mission
            </motion.button>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default Achievements;