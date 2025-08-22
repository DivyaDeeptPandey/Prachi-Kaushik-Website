import React from 'react';
import logo from '../../assets/logo.jpg';

const Vyomini = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 max-w-lg bg-secondary rounded-lg">
      
      {/* Logo */}
      <img 
        src={logo} 
        alt="Vyomini Logo" 
        className="w-28 h-28 mb-4 rounded-full object-cover customShadow"
      />

      {/* Organization Name */}
      <h2 className="satoshi-bold text-2xl md:text-3xl text-primary mb-2">
        Vyomini Social Foundation
      </h2>

      {/* Description */}
      <p className="satoshi-regular text-text text-base md:text-lg leading-relaxed mb-6">
        Empowering women through innovation in health, hygiene, and livelihood by addressing menstrual hygiene and breaking taboos.
      </p>

      {/* Visit Now Button */}
      <a
        href="https://www.vyomini.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block px-6 py-3 text-sm md:text-base font-medium text-primary 
                   border border-primary rounded-full overflow-hidden shadow-md transition-colors duration-300
                   z-10 group"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Visit Now
        </span>
        <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                         transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      </a>

    </div>
  );
};

export default Vyomini;
