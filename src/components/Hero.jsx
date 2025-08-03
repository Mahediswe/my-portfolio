import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TiSocialLinkedin, TiSocialInstagram } from 'react-icons/ti';
import HeroImg from '../assets/hero.png'; // ছবির সঠিক path বসাও

const HeroSection = () => {
  return (
    <div className='bg-gray-950'>
      <section
      className='max-w-7xl mx-auto min-h-screen  bg-gray-950 text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-10 py-10'
      id='home'
    >
      {/* Left Section */}
      <div className='bg-gray-950 flex-1  text-center '>
        <h1 className='text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 leading-tight'>
          Hello! I am <br />
          <span className='text-blue-500'>Mahedi Hassan</span>
        </h1>

        <h3 className='text-3xl md:text-4xl text-gray-300 mb-10 leading-snug'>
          Junior MERN Stack Developer <br />
          Building full-stack apps with JavaScript.
        </h3>

        <a
          href='/resume.pdf'
          download='resume.pdf'
          className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-lg text-2xl font-bold transition duration-300'
        >
          📄 Get Resume
        </a>
      </div>

      {/* Right Section */}
      <div className='flex-1 flex flex-col items-center mt-12 md:mt-0'>
        <div className='w-[400px] h-[400px] relative rounded-full overflow-hidden border-[6px] border-blue-500 shadow-lg'>
          <img
            src={HeroImg}
            alt='hero'
            className='w-full h-full object-cover object-top'
          />
          <div className='absolute inset-0 rounded-full border-[6px] border-blue-400 animate-ping opacity-20'></div>
        </div>

        {/* Social Icons */}
        <div className='flex justify-center mt-6 gap-8 text-blue-400 text-5xl'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <FaFacebookF />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <FaXTwitter />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
            <TiSocialLinkedin />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <TiSocialInstagram />
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
