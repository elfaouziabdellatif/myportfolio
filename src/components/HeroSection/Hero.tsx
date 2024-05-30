import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi'; // Import scroll-down icon from react-icons library
import './HeroSection.css';

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

  // Define parallax effect for different elements
  const y1 = useTransform(scrollY, [0, 0.5 * window.innerHeight], [0, -0.1 * window.innerHeight]);
  const y2 = useTransform(scrollY, [0, 0.5 * window.innerHeight], [0, -0.06 * window.innerHeight]);
  const y3 = useTransform(scrollY, [0, 0.5 * window.innerHeight], [0, -0.04 * window.innerHeight]);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center pt-20 text-center">
      <motion.div className="inset-0 flex flex-col items-center justify-center" style={{ y: y1 }}>
        <motion.div className="mb-4 flex items-center space-x-4" style={{ y: y2 }}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-300"></div>
            <p className="text-sm">Available for work</p>
          </div>
          <p className="text-sm">My time is: 02:37 AM</p>
        </motion.div>
        <motion.h1 className="text-4xl md:text-6xl font-bold md:text-5xl lg:text-6xl xl:text-7xl" style={{ y: y2 }}>
          Crafting Seamless <span className="text-yellow-500">Digital Journeys</span><br />
          With UX/UI & Webflow Excellence
        </motion.h1>
        <motion.p className="mt-4 text-lg md:text-xl" style={{ y: y3 }}>
          I create human-centered websites that persuade and engage audiences<br />
          in trusting your company.
        </motion.p>
        <motion.a 
          href="/template" 
          className="mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300"
          style={{ y: y3 }}
        >
          See My Templates
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
