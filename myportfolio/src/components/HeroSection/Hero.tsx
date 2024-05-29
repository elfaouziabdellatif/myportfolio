// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const images = [
    'https://assets-global.website-files.com/65e1907a3ce5f1f8aacb2812/65eeb687474caed9e53e97ee_webflow-design_2x%20(2)%20(1).webp',
    'https://assets-global.website-files.com/65e1907a3ce5f1f8aacb2812/65eeb687474caed9e53e97f2_unlimited-webflow-services_2x.webp',
    'https://assets-global.website-files.com/65e1907a3ce5f1f8aacb2812/65eeb687474caed9e53e97f6_Webflow-development_2x%20(1).webp',
    'https://assets-global.website-files.com/65e1907a3ce5f1f8aacb2812/65eeb687474caed9e53e97fa_Webflow-Expert_2x%20(2)%20(1).webp',
    'https://assets-global.website-files.com/65e1907a3ce5f1f8aacb2812/65eeb687474caed9e53e97fe_webflow-professional_2x%20(1).webp'
  ];

  return (
    <section className="relative w-full h-screen text-center  text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-sm">Available for work</p>
          </div>
          <p className="text-sm">My time is: 02:37 AM</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Seamless <span className="text-yellow-500">Digital Journeys</span><br />
          With UX/UI & Webflow Excellence
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          I create human-centered websites that persuade and engage audiences<br />
          in trusting your company.
        </p>
        <a href="/template" className="mt-6 px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300">
          See My Templates
        </a>
      </div>
      
    </section>
  );
};

export default Hero;
