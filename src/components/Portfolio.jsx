import React from 'react';
import Portfolio1 from '../assets/carrental.png';
import Portfolio2 from '../assets/dollarexchange.png';
import Portfolio3 from '../assets/sonalifoshol.png';
import Portfolio4 from '../assets/tourtravel.png';
import Portfolio5 from '../assets/autoparts.png'
import Portfolio6 from '../assets/baggo.png'

const projects = [
  {
    title: 'AutoParts',
    image: Portfolio5,
    live: 'https://autoparts.soft-dev.xyz/',
    github: 'https://github.com/Mahediswe/autoparts-ecommerce-site',
    tech: ['HTML5', 'Tailwind CSS', 'ReactJs'],
  },
  {
    title: 'Baggo Ecommerce',
    image: Portfolio6,
    live: 'https://baggs.soft-dev.xyz/',
    github: 'https://github.com/Mahediswe/Bagg',
    tech: ['HTML5', 'Tailwind CSS', 'ReactJs'],
  },
   {
    title: 'Car Rental',
    image: Portfolio1,
    live: 'https://carweb.soft-dev.xyz/',
    github: 'https://github.com/Mahediswe/car-web-app',
    tech: ['HTML5', 'Tailwind CSS', 'ReactJs'],
  },
  {
    title: 'Dollar Exchange',
    image: Portfolio2,
    live: 'https://dollarexchange.soft-dev.xyz/',
    github: 'https://github.com/Mahediswe/dollar-exchange',
    tech: ['HTML5', 'Tailwind CSS', 'ReactJs'],
  },
  {
    title: 'Sonali Foshol',
    image: Portfolio3,
    live: 'https://sonalifoshol.soft-dev.xyz/',
    github: 'https://github.com/Mahediswe/sonali-foshol',
    tech: ['HTML5', 'Tailwind CSS', 'ReactJs'],
  },
  {
    title: 'Tour & Travels',
    image: Portfolio4,
    live: 'https://tourtravels.soft-dev.xyz/',
    github: 'https://github.com/Mahediswe/Tour-app',
    tech: ['HTML5', 'Tailwind CSS', 'ReactJs'],
  },
  
];

const Portfolio = () => {
  return (
    <section className='bg-gray-950 text-white py-20 px-6' id='portfolio'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h3 className='text-blue-400 text-xl md:text-2xl font-semibold mb-2'>My Portfolio</h3>
          <h2 className='text-4xl md:text-5xl font-bold'>My Complete Projects</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-blue-800 hover:shadow-blue-500/30 transition duration-300'
            >
              <img src={project.image} alt={project.title} className='w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110
' />

              <div className='p-6 m-2 flex flex-col justify-between h-[220px] w-[360px]'>
                <h3 className='text-2xl font-semibold text-blue-400 mb-3'>{project.title}</h3>

                <div className='flex gap-4 mb-4'>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-sm'
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition text-sm'
                  >
                    GitHub
                  </a>
                </div>

                <div className='flex flex-wrap gap-2 text-sm'>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-gray-700 text-white rounded-full text-xs'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
