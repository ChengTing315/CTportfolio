import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/CTphotoBG.jpg';


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#30409a]'>
          Contact 
        </p>
       
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Ting Cheng</h2>
                <p className='text-[#457bd0]'>Full-stack Developer</p>
                <p className='py-4'>
                  I am available full-time positions and freelance now. Contact
                  me and discuess what we can do together!
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Find me:</p>
                <motion.div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://linkedin.com/in/ting-cheng-748775185"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "white",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 360],
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {" "}
                <FaLinkedinIn />
              </motion.div>
            </a>
            <a
              href="https://github.com/ChengTing315"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "white",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 360],
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {" "}
                <FaGithub />
              </motion.div>
            </a>
            <Link href="/resume">
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "white",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 360],
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                {" "}
                <BsFillPersonLinesFill />
              </motion.div>
            </Link>

            <Link href="/#contact">
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "white",
                  scale: [1, 1.4, 1.2],
                  rotate: [0, 10, -10, 360],
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <AiOutlineMail />
              </motion.div>
            </Link>
          </motion.div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/5d1b38fb-c87b-438e-8577-23ab63b73234'
                method='POST'
                encType='multipart/form-data'
              >
               
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
             
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
