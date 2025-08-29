import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Heart, Lightbulb, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SocialEnterprise = () => {
  const initiatives = [
    {
      icon: Building2,
      title: "Vyomini Social Foundation",
      description: "Founded in 2017, Vyomini focuses on creating sustainable products, promoting grassroots entrepreneurship, and fostering a circular economy to ensure communities can earn and grow through their own efforts.",
      impact: "Purpose-driven initiative building a strong ecosystem for women-led entrepreneurship in clean energy, sustainable agriculture, nutrition, health, and sanitation."
    },
    {
      icon: Target,
      title: "Sustainable Business Model",
      description: "Unlike conventional NGOs that rely heavily on grants, Vyomini was built on the idea of sustainability through enterprise rather than donation-based models.",
      impact: "Promotes self-sufficiency and long-term viability of social initiatives"
    },
    {
      icon: Users,
      title: "Grassroots Entrepreneurship",
      description: "Vyomini supports women from low-income, climate-vulnerable communities across ten states in India, inspiring, educating, and nurturing socially conscious women entrepreneurs.",
      impact: "Creates sustainable livelihoods while addressing social challenges"
    }
  ];

  const products = [
    {
      name: "Rakshak Sanitary Pads",
      description: "Low-cost biodegradable and herbal sanitary pads that are eco-friendly and adhere to safety standards",
      price: "₹1.5-2 per piece"
    },
    {
      name: "Reusable Pads",
      description: "Made from fleece and fennel for low-income groups, can be used for up to three years",
      price: "₹50 for long-term use"
    },
    {
      name: "Sanitary Vending Machines",
      description: "Automatic vending machines installed in schools, colleges, and public institutions",
      price: "Subsidized installation"
    },
    {
      name: "Eco-friendly Products",
      description: "Designer jute, cloth, and paper bags through paper recycling and waste management",
      price: "Market competitive rates"
    }
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
            <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-primary drop-shadow-md mb-6">
              Social Enterprise
            </h1>
            <p className="satoshi-medium text-xl md:text-2xl text-gray-700 mb-8">
              Sustainable solutions through ethical business practices
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Vyomini Social Foundation
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  Founded in 2017, Vyomini Social Enterprise represents a new approach to social change—one that 
                  combines business principles with social mission. Unlike traditional NGOs, Vyomini focuses on 
                  creating sustainable products and promoting grassroots entrepreneurship to ensure communities 
                  can earn and grow through their own efforts.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Our Philosophy
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  We believe in "Invest in Pads" rather than donation-based models. This approach encourages 
                  people to invest in learning and manufacturing, creating self-sufficient communities. Our 
                  purpose-driven initiative focuses on building a strong ecosystem for women-led entrepreneurship 
                  in emerging, high-impact sectors.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-primary/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <Lightbulb className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 customShadow">
                  <p className="satoshi-medium text-primary text-center">
                    "We don't believe in charity. We believe in creating opportunities for self-reliance and dignity."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Key Initiatives
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Sustainable business models creating social impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-secondary rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <initiative.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="satoshi-bold text-xl text-gray-900 mb-3">{initiative.title}</h3>
                <p className="satoshi-regular text-gray-700 mb-4">{initiative.description}</p>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="satoshi-medium text-primary text-sm">{initiative.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Our Products
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Sustainable, affordable solutions for community needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 customShadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="satoshi-bold text-xl text-primary mb-2">{product.name}</h3>
                <p className="satoshi-regular text-gray-700 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="satoshi-medium text-gray-900">{product.price}</span>
                  <button className="bg-primary text-secondary satoshi-medium py-2 px-4 rounded-lg text-sm hover:bg-primary-dark transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-primary drop-shadow-md mb-4">
              Our Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="satoshi-bold text-2xl text-primary mb-6">Manufacturing & Training</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">10 manufacturing units established across Haryana, Rajasthan, and Delhi</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">10 training and capacity-building centers for women entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">Over 10,000 women trained in manufacturing and business skills</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">5,500+ women successfully became entrepreneurs</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="satoshi-bold text-2xl text-primary mb-6">Market Reach & Distribution</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">Products available on Government e-Marketplace (GeM) and Amazon</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">Supplied to self-help groups under National Rural Livelihood Mission</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">Expansion to cities like Calcutta, Hyderabad, Bangalore, and Chennai</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="satoshi-regular text-gray-700">Collaboration with village panchayats for local supply chains</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
              Join Our Enterprise Movement
            </h2>
            <p className="satoshi-regular text-secondary text-xl mb-8">
              Support sustainable social entrepreneurship that creates real change and economic independence.
            </p>
            <motion.button
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default SocialEnterprise;