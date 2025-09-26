import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  // 1. Get the query parameters from the URL to pre-fill the subject
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get('subject');

  // Map URL parameters to full subject names for the dropdown
  const subjectMap = {
    'general': 'General Inquiry',
    'partnership': 'Partnership',
    'media': 'Media Request',
    'speaking': 'Speaking Engagement',
    'role-model': 'Become a Role Model',
    'trainer': 'Join as a Trainer',
    'story': 'Share Your Story',
    'volunteer': 'Volunteer With Us',
    'donation': 'Make a Donation'
  };

  // 2. State for the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: subjectParam ? subjectMap[subjectParam] || 'General Inquiry' : 'General Inquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // 3. Update form state if the URL param changes
  useEffect(() => {
    if (subjectParam && subjectMap[subjectParam]) {
      setFormData(prevData => ({
        ...prevData,
        subject: subjectMap[subjectParam]
      }));
    }
  }, [subjectParam]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here (e.g., Formspree, EmailJS, or your backend API)
    console.log('Form submitted:', formData);
    // Simulate successful submission
    setIsSubmitted(true);
    // Reset form after success (or on error handling)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Page Hero */}
      <section className="bg-secondary min-h-[40vh] flex items-center justify-center rounded-bl-[8rem] px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="satoshi-bold text-4xl md:text-5xl text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Involved
          </motion.h1>
          <motion.p
            className="satoshi-medium text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connect with us to partner, collaborate, or learn how you can contribute to the movement.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Contact Information */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-10">
              <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-6">Direct Contact</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="satoshi-medium text-lg mb-1">Email</h3>
                    <a href="mailto:karmayoginiprachi@gmail.com" className="satoshi-regular text-gray-700 hover:text-primary transition-colors">
                      karmayoginiprachi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="satoshi-medium text-lg mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:+919625708634" className="block satoshi-regular text-gray-700 hover:text-primary transition-colors">
                        +91 911147023916
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="satoshi-medium text-lg mb-1">Address</h3>
                    <p className="satoshi-regular text-gray-700">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            { /* disabled quick links for now
            <div>
              <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-6">Quick Links</h2>
              <div className="space-y-4">
                <a 
                  href="/partnership-proposal.pdf" // Link to actual PDF
                  download
                  className="flex items-center satoshi-medium text-primary hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Partnership Proposal
                </a>
                <a 
                  href="/press-kit.zip" // Link to actual press kit
                  download
                  className="flex items-center satoshi-medium text-primary hover:underline"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Access Press Kit
                </a>
              </div>
            </div> */}
          </motion.div> 

          {/* Right: Contact Form */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-secondary p-8 rounded-2xl shadow-lg">
              <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="satoshi-medium">Thank you for your message! We will get back to you soon.</p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block satoshi-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg satoshi-regular focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block satoshi-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg satoshi-regular focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block satoshi-medium text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg satoshi-regular focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Media Request">Media Request</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Become a Role Model">Become a Role Model</option>
                    <option value="Join as a Trainer">Join as a Trainer</option>
                    <option value="Share Your Story">Share Your Story</option>
                    <option value="Volunteer With Us">Volunteer With Us</option>
                    <option value="Make a Donation">Make a Donation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block satoshi-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg satoshi-regular focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us how you'd like to get involved or collaborate..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-secondary satoshi-medium py-4 px-6 rounded-lg text-center transition-colors duration-300 hover:bg-primary/90"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default Contact;