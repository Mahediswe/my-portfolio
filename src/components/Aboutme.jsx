// import React from 'react';

// const AboutMe = () => {
//   return (
//     <section className='bg-gray-950 text-white px-4 md:px-20 py-16' id='about'>
//       <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start'>

//         {/* About Me Left */}
//         <div className='flex-1 space-y-6'>
//           <h3 className='text-blue-400 text-2xl font-semibold'>About Me</h3>
//           <h2 className='text-5xl md:text-6xl font-extrabold'>Who Am I?</h2>
//           <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
//             I'm <span className='text-blue-400 font-semibold'>Mahedi Hassan</span>, a Junior MERN Stack Developer
//             with a passion for creating beautiful and functional full-stack web applications.
//             I love turning ideas into reality using modern web technologies.
//             I focus on building scalable, maintainable code, and I'm always eager to learn new things.
//           </p>
//           <a
//             href='/resume.pdf'
//             download='resume.pdf'
//             className='inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300'
//           >
//             📄 Download Resume
//           </a>
//         </div>

//         {/* Skills Right */}
//         <div className='flex-1 w-full space-y-8'>
//           <h2 className='text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block'>My Special Skills</h2>
          
//           <SkillItem name='HTML5, CSS3' percentage={90} />
//           <SkillItem name='JavaScript' percentage={90} />
//           <SkillItem name='ReactJS' percentage={95} />
//           <SkillItem name='NodeJS, ExpressJS, MongoDB' percentage={75} />
//         </div>
//       </div>
//     </section>
//   );
// };

// const SkillItem = ({ name, percentage }) => {
//   return (
//     <div>
//       <div className='flex justify-between mb-1'>
//         <span className='text-lg md:text-xl text-gray-200'>{name}</span>
//         <span className='text-lg font-bold text-blue-400'>{percentage}%</span>
//       </div>
//       <div className='w-full bg-gray-700 rounded-full h-5'>
//         <div
//           className='bg-blue-500 h-5 rounded-full transition-all duration-700'
//           style={{ width: `${percentage}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;


import React from 'react';

const AboutMe = () => {
  return (
    <section className='bg-gray-950 text-white px-4 md:px-20 py-16' id='skills'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start'>

        {/* About Me Left */}
        <div className='flex-1 space-y-6'>
          <h3 className='text-blue-400 text-2xl font-semibold'>About Me</h3>
          <h2 className='text-5xl md:text-6xl font-extrabold'>Who Am I?</h2>
          <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
            I'm <span className='text-blue-400 font-semibold'>Mahedi Hassan</span>, a Junior MERN Stack Developer
            who builds clean, responsive, and user-friendly web apps. I’m passionate about modern technologies and always eager to improve.
          </p>
          {/* <a
            href='/resume.pdf'
            download='resume.pdf'
            className='inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300'
          >
            📄 Download Resume
          </a> */}

          {/* Experience Section */}
          <div className='mt-10'>
            <h3 className='text-blue-400 text-2xl font-semibold mb-4'>Experience</h3>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
              Worked as a <span className='text-blue-400 font-semibold'>React Frontend Developer</span> at <span className='font-semibold'>Freelance IT</span> for 2 months. 
              Contributed to building responsive user interfaces and collaborating on client projects.
            </p>
          </div>
        </div>

        {/* Skills Right */}
        <div className='flex-1 w-full space-y-8'>
          <h2 className='text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block'>My Special Skills</h2>
          <SkillItem name='HTML5, CSS3' percentage={90} />
          <SkillItem name='JavaScript' percentage={90} />
          <SkillItem name='ReactJS' percentage={95} />
          <SkillItem name='NodeJS, ExpressJS, MongoDB' percentage={75} />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ name, percentage }) => {
  return (
    <div>
      <div className='flex justify-between mb-1'>
        <span className='text-lg md:text-xl text-gray-200'>{name}</span>
        <span className='text-lg font-bold text-blue-400'>{percentage}%</span>
      </div>
      <div className='w-full bg-gray-700 rounded-full h-5'>
        <div
          className='bg-blue-500 h-5 rounded-full transition-all duration-700'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutMe;
