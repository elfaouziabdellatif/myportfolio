import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import avatar from '../../assets/devlopper-avatar.png';
import reactjs from '../../assets/react.png';
import laravel from '../../assets/php.png';
import python from '../../assets/python (1).png';
import mysql from '../../assets/mysql.png';
import wavesvg from './wave-1.svg';
import wavesvg2 from './wave-2.svg';
import wavesvg3 from './wave-3.svg';
import wavesvg4 from './wave-4.svg';
import wavesvg5 from './wave-5.svg';
import { motion } from 'framer-motion';
import { useWindowScroll } from 'react-use';
import Avatarhero from '../ui/avatarhero';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const HeroSection: React.FC = () => {
  const [name, setName] = useState<string>('.......... .. ......');
  const { y: scrollY } = useWindowScroll();
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const fullName = '.......... .. ......';
    const splitFullName = 'Abdellatif El Faouzi'.split('');
    const timeout = 100; // 0.3 seconds
    let currentIndex = -1;

    const intervalId = setInterval(() => {
      if (currentIndex >= fullName.length) {
        clearInterval(intervalId); // Stop the interval when all letters are revealed
        return;
      }
      currentIndex++;
      // Update the name state to reveal one letter at a time
      setName(prevName => {
        const newName = prevName.split('');
        newName[currentIndex] = splitFullName[currentIndex];
        return newName.join('');
      });
    }, timeout);

    const imageTimer = setTimeout(() => {
      setShowImages(true);
    }, 2000);

    return () => {
      clearInterval(intervalId); // Cleanup function to clear the interval
      clearTimeout(imageTimer); // Clear the timeout on component unmount
    }; // Cleanup function to clear the interval
  }, []); // Empty dependency array to run this effect only once

 /* const scrollEffect = (scrollY: number) => {
    return {
      y: scrollY *1.2, // Adjust the multiplier to control the movement speed
      transition: { type: 'tween', ease:'linear' }
    };
  };*/

  return (
    <div>
    <section className="header-section z-0 pt-10 h-fit">
      {/* <img src={wavesvg} className="wave" />
      <img src={wavesvg2} className="wave" />
      <img src={wavesvg3} className="wave" />
      <img src={wavesvg4} className="wave" />
      <img src={wavesvg5} id="shape" /> */}
      <div className='content'>
        <div className="z-10 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left ">
          <div className="w-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid w-full items-center gap-12 lg:grid-cols-2 mt-10 ">
              {/* <div className=" pb-8 m-auto" >
                <div className='my-16'>
                  <span className='font-serif text-xl'>Hello, I'm</span>
                  <span className="mt-2 mx-2 mb-12 m-auto text-blue-800 text-2xl font-mono font-bold tracking-tight relative after:absolute after:inset-0 after:w-[0.35em] after:animate-caret after:bg-white ">
                    {name}
                  </span>
                </div>
                <p className='mb-16 font-serif text-lg'>
                  Crafting digital experiences from concept to code. Full-stack developer specializing in bringing visions to life through elegant design and robust functionality.
                </p>
                <a className="mb-2 inline-block rounded bg-blue-600 hover:bg-white hover:text-black hover:duration-300 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Lorem ipsum</a>
                <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal hover:duration-300 hover:bg-gray-600 text-primary transition duration-150 ease-in-out hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
              </div> */}
              {showImages && (
                <div className='w-3/5 m-auto'><Avatarhero></Avatarhero></div>
                  
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;