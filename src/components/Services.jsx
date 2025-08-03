import React from 'react';
import { v4 as uuid } from 'uuid';

const cards = [
  {
    title: 'MERN Website Building',
    desc: 'Full-stack responsive websites using MongoDB, Express, React & Node.',
  },
  {
    title: 'Frontend Development',
    desc: 'Clean, modern, and fully responsive UI with React or plain HTML/CSS.',
  },
  {
    title: 'Bug Fixing',
    desc: 'Quick and efficient debugging across frontend and backend code.',
  },
  {
    title: 'PSD to HTML',
    desc: 'Convert your design into pixel-perfect HTML, CSS, and JS code.',
  },
  {
    title: 'React Component Building',
    desc: 'Reusable, optimized React components tailored to your project.',
  },
  {
    title: 'NodeJS Backend Development',
    desc: 'Powerful REST APIs and backend systems with Node & Express.',
  },
];

const Services = () => {
  return (
    <section className='bg-gray-950 text-white py-24 px-6 md:px-20' id='service'>
      <div className='max-w-7xl mx-auto text-center mb-16'>
        <h3 className='text-blue-400 text-2xl md:text-3xl font-semibold mb-3'>My Services</h3>
        <h2 className='text-5xl md:text-6xl font-extrabold'>Services I Offer</h2>
      </div>

      {/* Cards Grid */}
      <div className='max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {cards.map((card) => (
          <div
            key={uuid()}
            className='bg-gray-800 rounded-3xl p-10 h-[300px] flex flex-col justify-center shadow-xl hover:shadow-blue-500/30 border border-blue-800 transition duration-300'
          >
            <h3 className='text-2xl md:text-3xl font-bold text-blue-400 mb-4'>{card.title}</h3>
            <p className='text-lg md:text-xl text-gray-300'>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
