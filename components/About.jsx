import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/8870af_d8dd1333cc4b40729975c8ea0c3ecf24_mv2.jpg';

const About = () => {
  return (
    <div id='about' className='w-full h-full p-2 flex items-center py-20'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#30409a] '>
            About Me
          </p>
         
          <p className='py-2 text-gray-600'>
          I specialize in building full-stack web/mobile applications
            with beautiful UI and a solid backend. I’m
            passionate about learning new technologies and using them to build different projects. I am a quick learner and can pick up new tech stacks as
            needed. I believe choosing the best tool is crucial for developing software applications.
          </p>
          <p className='py-2 text-gray-600'>
          I started my programming journey at my university. I studied programming concepts and data structure at the start by learning Python ,Java, Javascript. Then, I learned how to develop software applications in the real world by using new tech stacks and frameworks.
I have hands-on experience in building projects from zero, engineering production applications and making them better.
          </p>
          <Link href='/resume'>
            <p className='py-2 text-black-600 underline cursor-pointer'>
              Check out my resume.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
