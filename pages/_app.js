import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { motion, useScroll, useSpring } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
