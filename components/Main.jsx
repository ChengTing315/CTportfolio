import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.2,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.5,
                },
              },
            }}
          >
            <h1 className="py-4 text-gray-700">
              <span className="text-[#c94949]"> Welcome!</span> I&#39;m{" "}
              <span className="text-[#487ebc]"> Ting</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Full-Stack Developer</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.2,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 1.5,
                },
              },
            }}
          >
          <p className="py-4 text-gray-600 sm:max-w-[65%] m-auto">
              I’m software engineer with 3+ years of experience in building
              reliable solutions for web/mobile applications and software
              development.
            </p>
            </motion.div>
          <motion.div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
             // href="https://linkedin.com/in/ting-cheng-748775185"
             href="https://linkedin.com/in/ting-cheng-748775185"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.4,
                    opacity: 0,
                  },
                  visible: {
                  
                    scale: [1, 2, 1.2],
                    opacity: 1,
                    //rotate: [0, 10, -10, 360],
                    transition: {
                      delay: 2.5,
                    },
                  },
                }}
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
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.4,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    //rotate: [0, 10, -10, 360],
                    scale: [1, 2, 1.2],
                    transition: {
                      delay: 3.5,
                    },
                  },
                }}
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
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.4,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    scale: [1, 2, 1.2],
                    //rotate: [0, 10, -10, 360],
                    transition: {
                      delay: 4.5,
                    },
                  },
                }}
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
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.4,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    scale: [1, 2, 1.2],
                    //rotate: [0, 10, -10, 360],
                    transition: {
                      delay: 5.5,
                    },
                  },
                }}
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
  );
};

export default Main;
