import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Icon for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'Service', to: 'service' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className='fixed w-full bg-gray-800 z-20 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-4'>
        
        {/* Logo */}
        <ScrollLink
          to='home'
          smooth={true}
          duration={500}
          offset={-70}
          className='text-white text-xl md:text-2xl font-bold cursor-pointer'
        >
          Mahedi Hassan
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center space-x-6 text-white text-base'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className='cursor-pointer hover:text-blue-400 transition'
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
          <li>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={500}
              offset={-70}
              className='cursor-pointer border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition'
            >
              Hire Me
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-white'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden bg-gray-900 px-4 py-4 space-y-4 text-white text-base'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className='block cursor-pointer hover:text-blue-400 transition'
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
          <li>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className='block border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition text-center'
            >
              Hire Me
            </ScrollLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

