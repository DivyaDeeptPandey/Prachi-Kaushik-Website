import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Heart, Shield } from 'lucide-react';

const EarlyLife = () => {
  return (
    <div className="min-h-screen bg-secondary pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="satoshi-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Her Early Life
            </h1>
            <p className="satoshi-medium text-xl md:text-2xl text-gray-700 mb-8">
              The formative years that shaped a changemaker
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
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Humble Beginnings
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  Ms. Prachi Kaushik was born on December 05, 1984 in Delhi, close to the Delhi-Haryana border. 
                  Being a daughter of a daily wage labourer and a housewife, she grew up in a challenging environment 
                  and saw poverty and lack of amenities at every step of her way.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 customShadow">
                <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-4">
                  Defying Expectations
                </h2>
                <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                  She completed her primary and secondary education in a government school. After her 12th standard, 
                  there was strong pressure from family and relatives to end her education and settle into an early marriage. 
                  No one expected or encouraged her to continue studying. In fact, no woman in her family had pursued 
                  higher education before.
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
                  <BookOpen className="w-32 h-32 text-primary/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 customShadow">
                  <p className="satoshi-medium text-primary text-center">
                    "She had been a rebellion since her childhood and always stood against the wrongdoings of society."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Journey Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="satoshi-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Educational Journey
            </h2>
            <p className="satoshi-regular text-gray-600 max-w-2xl mx-auto">
              Against all odds, she paved her own path to education and empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="text-center p-6 bg-secondary rounded-2xl customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Resistance</h3>
              <p className="satoshi-regular text-gray-700">
                She resisted every expectation and objection, firmly said no to early marriage and 
                yes to her own future.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center p-6 bg-secondary rounded-2xl customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Self-Funding</h3>
              <p className="satoshi-regular text-gray-700">
                With no financial support, she started taking tuition classes to fund her college education.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center p-6 bg-secondary rounded-2xl customShadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="satoshi-medium text-xl text-gray-900 mb-3">Achievement</h3>
              <p className="satoshi-regular text-gray-700">
                She graduated with a degree in Political Science from Rajdhani College, Delhi, and 
                later pursued her Master's through the Faculty of Open Learning at Delhi University.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsibility Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Illustration Area */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 customShadow">
                <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-24 h-24 text-primary/30" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="satoshi-bold text-3xl md:text-4xl text-gray-900">
                Family Responsibilities
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                As the eldest sibling, the burden of supporting her family fell on her shoulders. 
                After college, though she dreamed of pursuing UPSC or even a PhD, financial responsibilities 
                pulled her into the workforce.
              </p>
              <p className="satoshi-regular text-gray-700 text-lg leading-relaxed">
                She took up jobs to support her younger siblings' education while continuing her own 
                studies whenever possible. For a long time, her goal was simply to exist on her own terms 
                in a world that didn't seem to want her to.
              </p>
              <div className="bg-white/80 rounded-xl p-6 mt-6 customShadow">
                <p className="satoshi-medium text-primary italic">
                  "These early challenges forged the resilience and determination that would later 
                  define her work empowering millions of women across India."
                </p>
              </div>
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
            <h2 className="satoshi-bold text-3xl md:text-4xl text-white mb-6">
              From Humble Beginnings to National Impact
            </h2>
            <p className="satoshi-regular text-secondary text-xl mb-8">
              Prachi Kaushik's early life demonstrates how determination and education can overcome 
              even the most challenging circumstances.
            </p>
            <motion.button
              className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg transition-colors duration-300 hover:bg-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue Her Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EarlyLife;