import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <motion.li
              className="ml-10 text-sm uppercase hover:border-b"
              whileHover={{
                scale: 1.3,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li
              className="ml-10 text-sm uppercase hover:border-b"
              whileHover={{
                scale: 1.3,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href="/#about">About Me</Link>
            </motion.li>

            <motion.li
              className="ml-10 text-sm uppercase hover:border-b"
              whileHover={{
                scale: 1.3,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href="/resume">Resume</Link>
            </motion.li>

            <motion.li
              className="ml-10 text-sm uppercase hover:border-b"
              whileHover={{
                scale: 1.3,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href="/#skills">Skills</Link>
            </motion.li>

            <motion.li
              className="ml-10 text-sm uppercase hover:border-b"
              whileHover={{
                scale: 1.3,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href="/#projects">Projects</Link>
            </motion.li>

            <motion.li
              className="ml-10 text-sm uppercase hover:border-b"
              whileHover={{
                scale: 1.3,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Link href="/#contact">Contact</Link>
            </motion.li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
