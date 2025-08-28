import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// If you're using React Router, import these:
// import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('/');

  // For React Router integration (uncomment if using React Router):
  // const location = useLocation();
  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   setActiveTab(location.pathname);
  // }, [location.pathname]);

  // Detect scroll for navbar styling and get current path
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Set active tab based on current URL
    setActiveTab(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Journey', 
      href: '/her-early-life',
      submenu: [
        { name: 'Early Life', href: '/her-early-life' },
        { name: 'Inspiration', href: '/her-inspiration' },
        { name: 'Achievements', href: '/achievements' }
      ]
    },
    { 
      name: 'Contributions', 
      href: '/her-contributions',
      submenu: [
        { name: 'Social Enterprise', href: '/social-enterprise' },
        { name: 'Women Empowerment', href: '/women-empowerment' },
        { name: 'Community Development', href: '/community-development' }
      ]
    },
    { name: 'Archives', href: '/archive' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Video Gallery', href: '/video-gallery' },
    { name: 'Media Coverage', href: '/media-coverage' },
    { name: 'Stock Images', href: '/stock-images-gallery' },
  ];

  const handleNavigation = (href) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveTab(href);
    
    // If using React Router, replace with:
    // navigate(href);
    
    // Current implementation (causes page reload):
    window.location.href = href;
  };

  const isTabActive = (href, submenu = []) => {
    // Check if current path matches the href or any submenu item
    return activeTab === href || submenu.some(item => activeTab === item.href);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary shadow-lg' 
        : 'bg-primary'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Site Name */}
          <div
            className="flex-shrink-0 cursor-pointer select-none"
            onClick={() => handleNavigation('/')}
          >
            <h1 className="satoshi-bold text-secondary text-2xl sm:text-3xl md:text-4xl transition-all duration-300 hover:text-white">
              Prachi Kaushik
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block dropdown-container">
            <ul className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              {menuItems.map((item, index) => {
                const isActive = isTabActive(item.href, item.submenu);
                return (
                  <li key={item.name} className="relative group">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={`px-3 py-2 rounded-md text-sm lg:text-base transition-colors duration-200 flex items-center gap-1 relative group ${
                            isActive 
                              ? 'text-secondary satoshi-medium ' 
                              : 'text-secondary hover:text-secondary satoshi-medium'
                          }`}
                          onMouseEnter={() => setActiveDropdown(index)}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'rotate-180' : 'text-secondary'
                          }`} />
                          {/* Active indicator - always visible when active */}
                          <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                            isActive
                              ? 'w-full text-secondary'
                              : 'w-0 group-hover:w-full'
                          }`}></span>
                        </button>
                        
                        {/* Dropdown menu */}
                        <div 
                          className={`absolute left-0 mt-2 w-48 rounded-lg customShadow overflow-hidden transition-all duration-200 origin-top-right dropdown-container ${
                            activeDropdown === index 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-95 pointer-events-none'
                          }`}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="bg-white py-2 border border-gray-100 rounded-lg">
                            {item.submenu.map((subItem) => {
                              const isSubActive = activeTab === subItem.href;
                              return (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block px-4 py-3 text-sm transition-all duration-200 relative group/item ${
                                    isSubActive 
                                      ? 'bg-primary text-secondary satoshi-medium' 
                                      : 'hover:bg-primary hover:text-secondary'
                                  } satoshi-medium`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(subItem.href);
                                  }}
                                >
                                  {subItem.name}
                                  {/* Hover effect line */}
                                  <span className={`absolute left-0 bottom-0 h-0.5 bg-secondary transition-all duration-300 ${
                                    isSubActive ? 'w-full' : 'w-0 group-hover/item:w-full'
                                  }`}></span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm lg:text-base transition-colors duration-200 relative group ${
                          isActive 
                            ? 'text-secondary satoshi-medium' 
                            : 'text-secondary hover:text-white satoshi-medium'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                      >
                        {item.name}
                        {/* Active indicator - always visible when active */}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
          {menuItems.map((item, index) => {
            const isActive = isTabActive(item.href, item.submenu);
            return (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left block px-3 py-3 rounded-md text-base transition-colors duration-200 flex items-center justify-between border-b border-primary/20 ${
                        isActive 
                          ? 'text-white satoshi-medium' 
                          : 'text-secondary hover:text-white satoshi-medium'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Mobile dropdown */}
                    <div className={`pl-6 space-y-1 transition-all duration-300 ${
                      activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.submenu.map((subItem) => {
                        const isSubActive = activeTab === subItem.href;
                        return (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-3 rounded-md text-base transition-colors duration-200 border-b border-primary/10 ${
                              isSubActive 
                                ? 'text-white bg-primary/20 satoshi-medium' 
                                : 'text-secondary/90 hover:text-white satoshi-medium'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.href);
                            }}
                          >
                            {subItem.name}
                          </a>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-3 py-3 rounded-md text-base transition-colors duration-200 border-b border-primary/20 ${
                      isActive 
                        ? 'text-white satoshi-medium' 
                        : 'text-secondary hover:text-white satoshi-medium'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;