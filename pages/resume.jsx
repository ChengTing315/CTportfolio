import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Ting Cheng | Resume</title>
        <meta
            name="description"
            content="I’m a Full-stack Developer specializing in developing technical soultions."
          />
        <link rel='icon' href='/bot.jpeg' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#7ebada] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Ting Cheng</h2>
          <div className='flex'>
            <a
             href="https://linkedin.com/in/ting-cheng-748775185"
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/ChengTing315'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software development <span className='px-1'>|</span> Web/Mobile application{' '}
              <span className='px-1'>|</span> Technical Problem Solving
            </p>
          </div>
        </div>
        <p>
        Self-motivated and dynamic software engineer with 3+ years of experience in building reliable solutions for web/mobile applications and software development. Eager to join your company to build innovative and cutting-edge solutions for meeting company goals. In previous roles, worked as a crucial developer for largest company and be responsible for No.1 health care mobile applications in Hong Kong.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Development
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>React Naive
            <span className='px-2'>|</span>NextJS
            <span className='px-2'>|</span>NodeJS
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>SpringBoot
            <span className='px-2'>|</span>AWS
            <span className='px-2'>|</span>Amplify
            <span className='px-2'>|</span>Git
            <span className='px-2'>|</span>API·
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services - Developer associate
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Working History
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Hong Kong SAR Government
            </span>
            <span className='px-2'>|</span>Hong Kong
          </p>
          <p className='py-1 italic'>Analyst Programmer (2021 - Current)</p>
          <p className='py-1 font-bold italic'>(Javascript, React, React Native, AWS(Amazon Web Services))</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Worked with project manager and testing team members to design full-stack cloud applications to meet client requirements for functionality, scalability and performance.
            </li>
            <li>
            Developed robust, scalable, modular applications and software solution with AWS.
            </li>
            <li>
            Wrote highly maintainable, solid code for software systems.
            </li>
            <li>
            Analyzed existing application issues and designed technology solutions that met performance expectations. (incl. Python/HTML/XML/VBA).
            </li>
          </ul>
          <p className='py-1 italic font-bold'>Key achievement:</p>
          <p className='py-1 italic'>Self-developed mobile apps to provide technical solutions for at least 5 popular geotechnical engineering companies.</p>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Hospital Authority
            </span>
            <span className='px-2'>|</span>Hong Kong
          </p>
          <p className='py-1 italic'>Programmer (2019 - 2021)</p>
          <p className='py-1 font-bold italic'>(JAVA, Spring boot, Javascript, React Native)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed web and mobile software applications to achieve company goals using JAVA, Spring boot, Javascript, React Naive etc.
            </li>
            <li>
            Collaborated on stages of systems development lifecycle with team manager from requirement gathering to production releases(including Jenkin, JIRA)
            </li>
            <li>
            Reviewed code, debugged problems and corrected issues.
            </li>
            <li>
            Handled production support cases for systems and application errors.
            </li>
          </ul>
          <p className='py-1 italic font-bold'>Key achievement:</p>
          <p className='py-1 italic'>Worked for Top 1 health care mobile application and fully responsible for one of the mini apps in Hong Kong.</p>
        </div>
     
      </div>
    </>
  );
};

export default resume;
