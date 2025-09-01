import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const JoinHerCampaign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', interest: '', message: '' });
  };

  const campaignInitiatives = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Menstrual Health Awareness",
      description: "Join workshops and awareness programs to break taboos around menstrual health in rural communities.",
      stats: "15,000+ workshops conducted"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Women Entrepreneurship",
      description: "Support training programs that empower women to become entrepreneurs and achieve financial independence.",
      stats: "10,000+ women trained"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Advocacy & Policy Change",
      description: "Participate in campaigns that influence policy decisions for better women's health and rights.",
      stats: "10+ states reached"
    }
  ];

  return (
    <section id="join-campaign" className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-primary">
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="satoshi-bold text-3xl md:text-4xl lg:text-5xl text-secondary mb-4 drop-shadow-lg">
            Join Her Campaign
          </h2>
          <p className="satoshi-regular text-lg md:text-xl text-secondary opacity-90 max-w-3xl mx-auto">
            Be part of the movement that's transforming women's lives across India. Your support can help create lasting change in menstrual health awareness and women's empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Initiatives Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="satoshi-bold text-2xl md:text-3xl text-secondary mb-8">How You Can Contribute</h3>
            
            <div className="space-y-8">
              {campaignInitiatives.map((initiative, index) => (
                <motion.div 
                  key={index}
                  className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-5">
                    <div className="bg-white p-3 rounded-full text-primary flex-shrink-0">
                      {initiative.icon}
                    </div>
                    <div>
                      <h4 className="satoshi-bold text-xl text-white mb-2">{initiative.title}</h4>
                      <p className="satoshi-regular text-white opacity-80 mb-3">{initiative.description}</p>
                      <p className="satoshi-medium text-sm text-white opacity-70">{initiative.stats}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Volunteer Opportunities */}
            <motion.div 
              className="mt-12 bg-white bg-opacity-10 p-6 rounded-xl border-l-4 border-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="satoshi-bold text-xl text-white mb-4">Volunteer Opportunities</h4>
              <ul className="space-y-2 satoshi-regular text-white opacity-80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Field volunteers for rural awareness programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Digital marketing and social media management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Fundraising and partnership development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Content creation and translation services</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="satoshi-bold text-2xl md:text-3xl text-primary mb-6">Get Involved Today</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block satoshi-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block satoshi-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block satoshi-medium text-gray-700 mb-2">Area of Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation</option>
                    <option value="awareness">Awareness Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block satoshi-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Tell us how you'd like to contribute..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-3 px-6 rounded-lg satoshi-medium hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Join the Movement
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <motion.div 
              className="mt-11.5 bg-white bg-opacity-20 p-6 rounded-xl border border-white border-opacity-20 h-52.75"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="satoshi-bold text-xl text-white mb-4">Other Ways to Connect</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="satoshi-regular text-white">contact@vyomini.org</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="satoshi-regular text-white">
                    H-64 Sultan Pur Mazra, Nangloi<br />Delhi-110086, India
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinHerCampaign;