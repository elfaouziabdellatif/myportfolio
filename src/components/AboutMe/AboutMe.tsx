import React, { useEffect } from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import './AboutMe.css';
import vector from './vue-3d-homme-tenue-ordinateur-portable.png';

const springConfig = { damping: 40, stiffness: 90 };

const AboutMe = () => {
  const { scrollY } = useViewportScroll();

  // Original transformations
  const gooeyX = useTransform(scrollY, [-10, 1000], [-200, 0]);
  const imageOpacity = useTransform(scrollY, [600, 900], [0, 1]);
  const textY = useTransform(scrollY, [600, 800], [550, 0]);
  const textOpacity = useTransform(scrollY, [600, 800], [0, 1]);

  // Applying spring configuration
  const springGooeyX = useSpring(gooeyX, springConfig);
  const springImageOpacity = useSpring(imageOpacity, springConfig);
  const springTextY = useSpring(textY, springConfig);
  const springTextOpacity = useSpring(textOpacity, springConfig);

  // New transformations for 'About Me' section
  const aboutMeOpacity = useTransform(scrollY, [800, 1000], [0, 1]);
  const aboutMeY = useTransform(scrollY, [800, 1000], [50, 0]);
  const springAboutMeOpacity = useSpring(aboutMeOpacity, springConfig);
  const springAboutMeY = useSpring(aboutMeY, springConfig);

  // Transformation for line width growth
  const drawingProgress = useTransform(scrollY, [10, 200], [1, 1.5]); // Adjust the scroll range as needed
  const springDrawingProgress = useSpring(drawingProgress, springConfig); // Add spring for smooth effect

  return (
    <div className="aboutme-container w-full">
      {/* Existing Section */}
      <section className="pt-10  md:pt-0 sm:pt-16 2xl:pt-16">
        {/* New Section for "About Me" */}
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-8"
        style={{ opacity: springAboutMeOpacity, y: springAboutMeY }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        About Me
      </motion.h2>
      <div className="relative w-full flex justify-center mb-10">
        <motion.div
          className="border-l-2 border-gray-300 h-16"
          style={{
            scaleY: springAboutMeOpacity,
            originY: 0,
          }}
        ></motion.div>
      </div>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full justify-between">
          <div className="flex items-center justify-between w-full">
            
            <div className="w-96 h-full">
              <motion.div className="relative gooey h-100" style={{ x: springGooeyX }}>
                <svg className="clip-svg" width="0" height="0">
                  <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0 L 2,0 L 1,0.65 Q 0.5,1.25 0,0.7 Z" />
                  </clipPath>
                </svg>
                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
                  src={vector}
                  alt=""
                  style={{ clipPath: 'url(#clip-shape)' }} // Apply the clipping here
                />
              </motion.div>
            </div>
            <div>
              <motion.div style={{ y: springTextY, opacity: springTextOpacity }}>
                <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Hey 👋 I am <br className="block sm:hidden" /> Abdellatif El Faouzi
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                  I'm a dedicated developer focused on creating efficient and user-friendly solutions. I enjoy building projects that bring ideas to life with clean, maintainable code.
                </p>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                    <span className="relative"> Have a question? </span>
                  </span>
                  <br className="block sm:hidden" /> Ask me on <a href="#" title="" className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">LinkedIn</a>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
       {/* New Section for "About Me" */}
      
      <div className="relative w-full flex justify-center mb-10">
        <motion.div
          className="border-b-2 border-gray-300 w-52 h-16"
          style={{
            scaleX: springDrawingProgress, // Scale horizontally based on scroll
            originX: 0, // Starts growing from the left
          }}
        ></motion.div>
      </div>
      
    </div>
  );
};

export default AboutMe;
