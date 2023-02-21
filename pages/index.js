import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
//import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Ting | Full-stack Developer</title>
          <meta
            name="description"
            content="I’m a Full-stack Developer specializing in developing technical soultions."
          />
          <link rel="icon" href="/bot.jpeg" />
        </Head>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
