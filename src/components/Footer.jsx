import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com/rakshak.greenmenstruation", icon: <FaFacebookF /> },
    { name: "X", link: "https://x.com/GreenRakshak", icon: <FaTwitter /> },
    { name: "YouTube", link: "https://www.youtube.com/channel/UCtTUr6EFePdHHS2xqzkGAYQ?view_as=subscriber", icon: <FaYoutube /> },
    { name: "Instagram", link: "https://www.instagram.com/reel/DIQTrvHsldc/?igsh=MW9ldXR1cXpnYW1rMQ==", icon: <FaInstagram /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/vyomini-social-enterprise-01b1b22b0/", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-300">
          
          {/* Brand/Organization Info */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-2xl mb-4">Vyomini</h3>
            <p className="satoshi-regular text-text text-base mb-4 leading-relaxed">
              Empowering women through menstrual health awareness, economic independence, and grassroots development.
            </p>
            <div className="flex items-center satoshi-regular text-text text-sm mb-2">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span>Delhi, India</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-xl mb-4">Contact Us</h3>
            <ul className="satoshi-regular text-text text-base space-y-3">
              <li>
                <strong className="satoshi-medium block mb-1">Email:</strong>
                <a 
                  href="mailto:info@vyomini.org" 
                  className="text-primary hover:text-accent transition-colors duration-300 inline-block"
                >
                  info@vyomini.org
                </a>
              </li>
              <li>
                <strong className="satoshi-medium block mb-1">Telephone:</strong>
                <a 
                  href="tel:+919625708634" 
                  className="text-primary hover:text-accent transition-colors duration-300 inline-block"
                >
                  +91 9625708634
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-xl mb-4">Quick Links</h3>
            <ul className="satoshi-regular text-text text-base space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Get Involved</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="satoshi-bold text-primary text-xl mb-4">Follow Us</h3>
            <p className="satoshi-regular text-text text-base mb-4">
              Stay connected with our journey of empowerment and change.
            </p>
            <ul className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition-all duration-300 transform hover:-translate-y-1"
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
          <div className="satoshi-regular text-text text-sm flex items-center justify-center gap-1 order-1 md:order-2">
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