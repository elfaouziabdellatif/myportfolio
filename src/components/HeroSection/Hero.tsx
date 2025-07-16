import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import './HeroSection.css';
import { styles } from '../../style';

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useViewportScroll();

  const handleScroll = () => {
    if (window.scrollY > 0.35 * window.innerHeight) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const y1 = useTransform(scrollY, [0, 0.5 * window.innerHeight], [0, -0.1 * window.innerHeight]);
  const y2 = useTransform(scrollY, [0, 0.5 * window.innerHeight], [0, -0.06 * window.innerHeight]);
  const y3 = useTransform(scrollY, [0, 0.5 * window.innerHeight], [0, -0.04 * window.innerHeight]);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center pt-20 text-center">
      <motion.div className="inset-0 flex flex-col items-center justify-center" style={{ y: y1 }}>
        <motion.div className="mb-4 flex items-center space-x-4" style={{ y: y2 }}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-300"></div>
            <p className="text-sm">Open for new challenges</p>
          </div>
          <p className="text-sm">Current time: 02:37 AM</p>
        </motion.div>
        <motion.h1 className="text-4xl md:text-6xl font-bold md:text-5xl lg:text-6xl xl:text-7xl" style={{ y: y2 }}>
          Building the future, one <span style={{color:styles.mainconolor}}>line of code</span> <br />
          at a time
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl" style={{ y: y3 }}>
          Passionate about crafting digital experiences that are intuitive and impactful. Let’s create something amazing together.
        </motion.p>
        <motion.a 
          href="/projects" 
          className="mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300"
          style={{ y: y3 }}
        >
          Explore My Work
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="container_mouse mt-4 mr-4"
      >
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
