import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaHeart,
  FaEnvelope,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com/share/16K9WftzER/", icon: <FaFacebookF /> },
    { name: "X", link: "https://x.com/Ms_PrachiK", icon: <FaTwitter /> },
    { name: "Instagram", link: "https://www.instagram.com/karmayoginiprachi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: <FaInstagram /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/prachikarmayogini", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-5 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute top-10 right-5 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-gray-300">
          
          {/* Brand/Organization Info */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-2xl mb-4">Vyomini</h3>
            {/* Added link under the heading */}
            <div className="mb-6">
              <a 
                href="https://www.vyomini.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center satoshi-medium text-primary text-lg"
              >
                www.vyomini.org
                <FaExternalLinkAlt className="ml-1 text-sm" />
              </a>
            </div>
            <p className="satoshi-regular text-text text-base mb-6 leading-relaxed">
              Empowering women through menstrual health awareness, economic independence, and grassroots development.
            </p>
            <div className="flex items-center satoshi-regular text-text text-sm mb-3">
              <FaMapMarkerAlt className="text-primary mr-2 flex-shrink-0" />
              <span>H-64 Sultan Pur Mazra, Nangloi, Delhi-110086, India</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-xl mb-5">Contact Us</h3>
            <div className="flex items-start justify-center md:justify-start">
              <FaEnvelope className="text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <a 
                  href="mailto:info@vyomini.org" 
                  className="text-primary hover:text-accent transition-colors duration-300 satoshi-medium text-lg"
                >
                  info@vyomini.org
                </a>
                <p className="satoshi-regular text-text text-sm mt-2">
                  Reach out to us for collaborations, inquiries, or support.
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-xl mb-5">Follow Our Journey</h3>
            <p className="satoshi-regular text-text text-base mb-5">
              Stay connected with our mission of empowerment and change.
            </p>
            
            <ul className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="satoshi-regular text-text text-sm text-center md:text-left order-2 md:order-1">
            &copy; {new Date().getFullYear()} Vyomini Social Enterprise. All rights reserved.
          </p>
          <div className="satoshi-regular text-text text-sm flex items-center justify-center gap-1 order-1 md:order-2 mb-4 md:mb-0">
            <span>Made with</span>
            <FaHeart className="text-primary animate-pulse" />
            <span>for social change</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;