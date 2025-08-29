import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Target, Eye, Sparkles, Lightbulb } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HerInspiration = () => {
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
              Her Inspiration
            </h1>
            <p className="satoshi-medium text-xl md:text-2xl text-gray-700 mb-8">
              From survival to transformation: The awakening of a changemaker
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4 flex items-center">
                  <Sparkles className="mr-3" /> The Turning Point
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  Survival had been her only inspiration for many years. Looking for ways to move forward, 
                  she started working in NGOs. This is when she encountered a domestic violence case that 
                  deeply disturbed her and changed her perspective forever.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4 flex items-center">
                  <Target className="mr-3" /> A New Mission
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  This experience transformed her goal from survival to transformation—not just of her own life, 
                  but of others like her who become prey to societal misdeeds. She began to see the systemic 
                  issues that trapped women in cycles of vulnerability.
                </p>
              </div>
            </motion.div>

            {/* Image/Illustration Area */}
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
                    "She observed that when a woman has no financial support or education, 
                    she becomes vulnerable to exploitation and abuse."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Realization Section */}
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
              The Core Realization
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Understanding the root causes of women's vulnerability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Realization 1 */}
            <motion.div
              className="p-6 bg-secondary rounded-2xl customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Financial Independence</h3>
              <p className="satoshi-regular text-gray-700">
                She recognized that economic empowerment was the foundation for breaking cycles of 
                dependency and vulnerability among women.
              </p>
            </motion.div>

            {/* Realization 2 */}
            <motion.div
              className="p-6 bg-secondary rounded-2xl customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Education & Awareness</h3>
              <p className="satoshi-regular text-gray-700">
                Knowledge and awareness were identified as critical tools for women to understand 
                their rights and make informed decisions about their lives.
              </p>
            </motion.div>
          </div>

          {/* Focus Areas */}
          <motion.div
            className="mt-16 bg-primary/5 rounded-2xl p-8 customShadow max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="satoshi-bold text-2xl text-primary text-center mb-6">
              Chosen Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="satoshi-medium text-lg text-gray-900 mb-2">Women's Health</h4>
                <p className="satoshi-regular text-gray-700 text-sm">
                  Addressing menstrual health, hygiene, and reproductive care
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="satoshi-medium text-lg text-gray-900 mb-2">Economic Empowerment</h4>
                <p className="satoshi-regular text-gray-700 text-sm">
                  Creating entrepreneurship opportunities and financial independence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 customShadow">
              <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="satoshi-medium text-2xl md:text-3xl text-gray-900 italic mb-6">
                "That experience became my mission. I chose to focus on two critical areas: 
                women's health and economic empowerment."
              </blockquote>
              <p className="satoshi-bold text-primary text-lg">— Prachi Kaushik</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Journey */}
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
              From Personal Survival to Collective Transformation
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              How one woman's journey inspired a movement for millions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white satoshi-bold text-2xl">
                1
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Personal Struggle</h3>
              <p className="satoshi-regular text-gray-700">
                Overcoming poverty, gender discrimination, and societal expectations in her own life
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white satoshi-bold text-2xl">
                2
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Awakening</h3>
              <p className="satoshi-regular text-gray-700">
                Witnessing systemic issues affecting women and recognizing patterns of vulnerability
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white satoshi-bold text-2xl">
                3
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Purpose</h3>
              <p className="satoshi-regular text-gray-700">
                Dedicating her life to creating systemic change through health education and economic empowerment
              </p>
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
              From Inspiration to Action
            </h2>
            <p className="satoshi-regular text-secondary text-xl mb-8">
              Prachi Kaushik's personal awakening led to transformative work that has impacted millions of women across India.
            </p>
            <motion.button
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover Her Contributions
            </motion.button>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default HerInspiration;