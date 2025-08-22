import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Journey', href: '/Her-early-life' },
    { name: 'Contributions', href: '/Her-contributions' },
    { name: 'Archives', href: '/archive' },
    { name: 'Donate & Support', href: '/support' },
  ];

  return (
    <nav className="bg-primary text-text top-0 fixed w-full z-50 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        {/* Logo / Site Name */}
        <h1
          className="satoshi-bold text-secondary text-3xl md:text-4xl cursor-pointer select-none"
          onClick={() => (window.location.href = '/')}
        >
          Prachi Kaushik
        </h1>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-0.5 bg-text rounded"></span>
          <span className="block w-7 h-0.5 bg-text rounded"></span>
          <span className="block w-7 h-0.5 bg-text rounded"></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg satoshi-medium">
          {menuItems.map(({ name, href }) => (
            <li key={name}>
              <a href={href} className="link-accent">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-secondary px-6 py-5 shadow-lg satoshi-medium">
          {menuItems.map(({ name, href }) => (
            <li
              key={name}
              onClick={() => {
                setMenuOpen(false);
                window.location.href = href;
              }}
              className="link-accent cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;