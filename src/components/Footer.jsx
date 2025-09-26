import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaHeart,
  FaEnvelope,
  FaExternalLinkAlt,
  FaPhone
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com/share/16K9WftzER/", icon: <FaFacebookF /> },
    { name: "X", link: "https://x.com/Ms_PrachiK", icon: <FaTwitter /> },
    { name: "Instagram", link: "https://www.instagram.com/karmayoginiprachi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: <FaInstagram /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/prachikarmayogini", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-secondary pt-12 md:pt-16 pb-6 md:pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-5 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute top-10 right-5 w-20 h-20 md:w-24 md:h-24 bg-primary/5 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 pb-8 md:pb-12 border-b border-gray-300">
          
          {/* Brand/Organization Info */}
          <div className="text-center lg:text-left">
            <h3 className="satoshi-bold text-primary text-xl md:text-2xl mb-3 md:mb-4">Vyomini</h3>
            {/* Added link under the heading */}
            <div className="mb-4 md:mb-6">
              <a 
                href="https://www.vyomini.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center satoshi-medium text-primary text-base md:text-lg hover:text-accent transition-colors duration-300"
              >
                www.vyomini.org
                <FaExternalLinkAlt className="ml-1 text-xs md:text-sm" />
              </a>
            </div>
            <p className="satoshi-regular text-text text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
              Empowering women through menstrual health awareness, economic independence, and grassroots development.
            </p>
            <div className="flex items-center justify-center lg:justify-start satoshi-regular text-text text-sm md:text-base mb-2">
              <FaMapMarkerAlt className="text-primary mr-2 flex-shrink-0 text-sm md:text-base" />
              <span>Delhi NCR, India</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="satoshi-bold text-primary text-lg md:text-xl mb-4 md:mb-5">Contact Us</h3>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-3">
              <FaEnvelope className="text-primary text-sm md:text-base flex-shrink-0 mt-2" />
              <div className="text-center lg:text-left">
                <a 
                  href="mailto:contactprachikaushik@gmail.com" 
                  className="text-primary hover:text-accent transition-colors duration-300 satoshi-medium text-base md:text-lg break-all"
                >
                  contactprachikaushik@gmail.com
                </a>
                <p className="satoshi-regular text-text text-xs md:text-sm mt-1 md:mt-2">
                  Reach out to us for collaborations, inquiries, or support.
                </p>
              </div>
            </div>
            
            {/* Additional contact info can be added here */}
            <div className="flex items-center justify-center lg:justify-start satoshi-regular text-text text-sm md:text-base mt-3">
              <FaPhone className="text-primary mr-2 flex-shrink-0 text-sm" />
              <span> +91 911147023916 </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center lg:text-left">
            <h3 className="satoshi-bold text-primary text-lg md:text-xl mb-4 md:mb-5">Follow Our Journey</h3>
            <p className="satoshi-regular text-text text-sm md:text-base mb-4 md:mb-5">
              Stay connected with our mission of empowerment and change.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
                {socialLinks.map((social, idx) => (
                  <li key={idx}>
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-all duration-300 transform hover:-translate-y-0.5 md:hover:-translate-y-1 shadow-md hover:shadow-lg text-sm md:text-base"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 md:pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">
          {/* Made with love - Top on mobile, right on desktop */}
          <div className="satoshi-regular text-text text-xs md:text-sm flex items-center justify-center gap-1 order-1 lg:order-2">
            <span>Made with</span>
            <FaHeart className="text-primary animate-pulse text-xs md:text-sm" />
            <span>for social change</span>
          </div>

          {/* Copyright text - Center on mobile, left on desktop */}
          <p className="satoshi-regular text-text text-xs md:text-sm text-center lg:text-left order-2 lg:order-1">
            &copy; {new Date().getFullYear()} Vyomini Social Enterprise. All rights reserved.
          </p>
          
          {/* Developer credit - Bottom on mobile, center on desktop */}
          <a
            href="https://www.linkedin.com/in/divya-deept-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm text-gray-600 hover:text-primary transition-colors duration-300 order-3 text-center"
          >
            Made by – Divya Deept Pandey
          </a>
        </div>

        {/* Mobile optimized layout for smaller screens */}
        <div className="lg:hidden pt-4 flex flex-col items-center gap-3 text-center">
          <div className="satoshi-regular text-text text-xs flex items-center gap-1">
            <span>Proudly supporting women's empowerment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;