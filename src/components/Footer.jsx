import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", link: "https://www.facebook.com/rakshak.greenmenstruation", icon: <FaFacebookF /> },
    { name: "X", link: "https://x.com/GreenRakshak", icon: <FaTwitter /> },
    { name: "YouTube", link: "https://www.youtube.com/channel/UCtTUr6EFePdHHS2xqzkGAYQ?view_as=subscriber", icon: <FaYoutube /> },
    { name: "Instagram", link: "https://www.instagram.com/reel/DIQTrvHsldc/?igsh=MW9ldXR1cXpnYW1rMQ==", icon: <FaInstagram /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/vyomini-social-enterprise-01b1b22b0/", icon: <FaLinkedinIn /> },
  ];

  return (
    <footer className="bg-secondary py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="satoshi-bold text-primary text-2xl mb-4">Contact</h2>
          <ul className="satoshi-regular text-text text-base space-y-2">
            <li>
              <strong className="satoshi-medium">Email:</strong>{" "}
              <a 
                href="mailto:info@vyomini.org" 
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                info@vyomini.org
              </a>
            </li>
            <li>
              <strong className="satoshi-medium">Telephone:</strong>{" "}
              <a 
                href="tel:+919625708634" 
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                +91 9625708634
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
          <h2 className="satoshi-bold text-primary text-2xl mb-4">Follow Us</h2>
          <ul className="flex gap-4 mb-4">
            {socialLinks.map((social, idx) => (
              <li key={idx}>
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-accent transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="satoshi-regular text-text text-sm md:text-base text-center md:text-right">
            &copy; {new Date().getFullYear()} Vyomini Social Enterprise. <br className="block md:hidden"/>All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
