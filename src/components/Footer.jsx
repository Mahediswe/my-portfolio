import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Brand */}
        <div className="text-xl font-semibold text-blue-400 mb-4 md:mb-0">
          {/* Mahedi Hassan */}
          <ul className='font-bold'>
            <Link to='/'>Mahedi Hassan</Link>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"> <FaFacebookF /> </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"> <FaLinkedinIn /> </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"> <FaGithub /> </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"> <FaInstagram /> </a>
        </div>

        {/* Copyright */}
        <div className="text-xl text-gray-400 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
