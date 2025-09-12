import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from './Sectionheader';

const GetInvolved = ({ sectionRef }) => {
  return (
    <section
      id="get-involved"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-primary rounded-tr-[8rem]"
    >
      <div className="max-w-4xl mx-auto text-center text-secondary z-10">
        <SectionHeader
          title="Join Our Movement"
          subtitle="Be part of the transformation"
          titleClassName="text-secondary"
          subtitleClassName="text-secondary"
          lineClassName='bg-secondary'
        />
        
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Partner With Us',
              description: 'Corporate partnerships and CSR collaborations',
              link: '/contact?subject=partnership'
            },
            {
              title: 'Start a Chapter',
              description: 'Bring Vyomini to your community',
              link: '/contact?subject=chapter'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-secondary-20 p-6 rounded-2xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="satoshi-bold text-xl mb-3 text">{item.title}</h3>
              <p className="satoshi-regular mb-4">{item.description}</p>
              <a
                href={item.link}
                className="inline-block bg-secondary text-primary satoshi-medium py-2 px-6 rounded-lg hover:bg-white transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="bg-secondary text-primary satoshi-medium py-3 px-8 rounded-lg text-center transition-colors duration-300 hover:bg-white"
          >
            Get Started
          </Link>
          <Link
            to="/her-story"
            className="border-2 border-secondary text-secondary satoshi-medium py-3 px-8 rounded-lg text-center transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;