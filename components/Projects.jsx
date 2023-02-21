import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpeg';
import smartLoggerImg from '../public/assets/projects/smartLogger.jpeg'
import miniAppImg from '../public/assets/projects/miniapp.jpeg'
import ecommerce from '../public/assets/projects/ecommerce.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full p-2 py-20'>
    <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#30409a]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Smart Logger'
            backgroundImg={smartLoggerImg}
            projectUrl='/smartLogger'
            tech='React Naive/AWS Amplify'

          />
          <ProjectItem
            title='House Discover'
            backgroundImg={propertyImg}
            projectUrl='/homeDiscover'
            tech='React JS'
          />
          <ProjectItem
            title='Mini app/game'
            backgroundImg={miniAppImg}
            projectUrl='/miniApp'
            tech='Javascript'
          />
        </div>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <h2 className='py-4'>What I am focusing to build</h2>
          <ProjectItem
            title='E-commerce website'
            backgroundImg={ecommerce}
            projectUrl='/ecommerce'
            tech='Next JS'

          />
          </div>
      </div>
    </div>
  );
};

export default Projects;
