import React from 'react';

const Support = () => {
  return (
    <section className="bg-secondary py-16 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <h1 className="satoshi-bold text-primary text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-10">
          Support Her Cause
        </h1>

        {/* Description */}
        <p className="satoshi-regular text-text text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          Your support can make a significant difference in the lives of women and girls in India.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          
          {/* Donate Now */}
          <a
            href="https://www.vyomini.org/work-with-us"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 text-sm md:text-base font-medium text-primary 
                       border border-primary rounded-full overflow-hidden shadow-md transition-colors duration-300
                       z-10 group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Donate Now
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                             transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>

          {/* Volunteer */}
          <a
            href="https://www.vyomini.org/work-with-us"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 text-sm md:text-base font-medium text-primary 
                       border border-primary rounded-full overflow-hidden shadow-md transition-colors duration-300
                       z-10 group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Volunteer
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-primary origin-left scale-x-0 
                             transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Support;
