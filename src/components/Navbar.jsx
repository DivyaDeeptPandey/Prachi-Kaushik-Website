import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

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
      href: '/contributions',
      submenu: [
        { name: 'Social Enterprise', href: '/social-enterprise' },
        { name: 'Women Empowerment', href: '/women-empowerment' },
        { name: 'Community Development', href: '/community-development' }
      ]
    },
    { name: 'Archives', href: '/archives' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Video Gallery', href: '/video-gallery' },
    { name: 'Media Coverage', href: '/media-coverage' },
    { name: 'Stock Images', href: '/stock-images-gallery' },
  ];

  const handleNavigation = (href) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveTab(href);
    window.location.href = href;
  };

  const isTabActive = (href, submenu = []) => {
    return activeTab === href || submenu.some(item => activeTab === item.href);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-primary py-2' 
        : 'bg-primary py-2'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Site Name */}
          <div
            className="flex-shrink-0 cursor-pointer select-none transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavigation('/')}
          >
            <h1 className="satoshi-bold text-secondary text-2xl sm:text-3xl md:text-4xl transition-all duration-300 hover:text-white">
              Prachi Kaushik
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block dropdown-container">
            <ul className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              {menuItems.map((item, index) => {
                const isActive = isTabActive(item.href, item.submenu);
                return (
                  <li key={item.name} className="relative group">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={`px-4 py-3 rounded-lg text-sm lg:text-base transition-all duration-300 flex items-center gap-1 relative satoshi-medium ${
                            isActive 
                              ? 'text-secondary' 
                              : 'text-secondary hover:text-secondary hover:bg-primary/80'
                          }`}
                          onMouseEnter={() => setActiveDropdown(index)}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            isActive || activeDropdown === index ? 'text-secondary' : 'text-secondary group-hover:text-secondary'
                          } ${activeDropdown === index ? 'rotate-180' : ''}`} />
                          {/* Active indicator - White underline for active items */}
                          <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-500 ${
                            isActive ? 'w-4/5 bg-white' : 'w-0 bg-secondary group-hover:w-4/5'
                          }`}></span>
                        </button>
                        
                        {/* Dropdown menu */}
                        <div 
                          className={`absolute left-0 mt-1 w-56 rounded-xl customShadow overflow-hidden transition-all duration-300 origin-top-right dropdown-container ${
                            activeDropdown === index 
                              ? 'opacity-100 scale-100 translate-y-0' 
                              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                          }`}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="bg-white/95 backdrop-blur-md py-2 border border-white/20 rounded-xl">
                            {item.submenu.map((subItem) => {
                              const isSubActive = activeTab === subItem.href;
                              return (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block px-5 py-3 text-sm transition-all duration-300 relative satoshi-medium ${
                                    isSubActive 
                                      ? 'bg-primary text-secondary' 
                                      : 'text-gray-700 hover:bg-primary hover:text-secondary'
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation(subItem.href);
                                  }}
                                >
                                  {subItem.name}
                                  {/* White underline for active submenu items */}
                                  <span className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
                                    isSubActive ? 'w-full bg-white' : 'w-0 bg-secondary group-hover/item:w-full'
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
                        className={`px-4 py-3 rounded-lg text-sm lg:text-base transition-all duration-300 relative satoshi-medium ${
                          isActive 
                            ? 'text-secondary' 
                            : 'text-secondary hover:text-secondary hover:bg-primary/80'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                      >
                        {item.name}
                        {/* White underline for active items */}
                        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-500 ${
                          isActive ? 'w-4/5 bg-white' : 'w-0 bg-secondary group-hover:w-4/5'
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
              className="inline-flex items-center justify-center p-3 rounded-xl text-secondary hover:text-white hover:bg-primary/80 focus:outline-none transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <X className="block h-7 w-7" />
              ) : (
                <Menu className="block h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        menuOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-3 pb-4 space-y-1 bg-primary/95 backdrop-blur-md">
          {menuItems.map((item, index) => {
            const isActive = isTabActive(item.href, item.submenu);
            return (
              <div key={item.name} className="border-b border-white/10 last:border-b-0">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`w-full text-left px-5 py-4 rounded-lg text-base transition-all duration-300 flex items-center justify-between satoshi-medium relative ${
                        isActive 
                          ? 'text-secondary' 
                          : 'text-secondary hover:text-secondary hover:bg-primary/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      } ${isActive ? 'text-secondary' : 'text-secondary'}`} />
                      {/* White underline for active mobile items */}
                      <span className={`absolute bottom-2 left-5 right-5 h-0.5 transition-all duration-500 ${
                        isActive ? 'bg-white' : 'bg-transparent'
                      }`}></span>
                    </button>
                    
                    {/* Mobile dropdown */}
                    <div className={`pl-6 space-y-1 transition-all duration-500 ${
                      activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.submenu.map((subItem) => {
                        const isSubActive = activeTab === subItem.href;
                        return (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-5 py-3 rounded-lg text-secondary transition-all duration-300 satoshi-medium relative ${
                              isSubActive 
                                ? 'text-secondary bg-primary/80' 
                                : 'text-secondary/90 hover:text-secondary hover:bg-primary/80'
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.href);
                            }}
                          >
                            {subItem.name}
                            {/* White underline for active mobile submenu items */}
                            <span className={`absolute bottom-2 left-5 right-5 h-0.5 transition-all duration-500 ${
                              isSubActive ? 'bg-white' : 'bg-transparent'
                            }`}></span>
                          </a>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-5 py-4 rounded-lg text-base transition-all duration-300 satoshi-medium relative ${
                      isActive 
                        ? 'text-secondary' 
                        : 'text-secondary hover:text-secondary hover:bg-primary/80'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                  >
                    {item.name}
                    {/* White underline for active mobile items */}
                    <span className={`absolute bottom-2 left-5 right-5 h-0.5 transition-all duration-500 ${
                      isActive ? 'bg-white' : 'bg-transparent'
                    }`}></span>
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