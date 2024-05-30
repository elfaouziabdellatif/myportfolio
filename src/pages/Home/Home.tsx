import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Hero from '../../components/HeroSection/Hero';
import Technologies from '../../components/Technologies/Technologies';
import { ProjectsSection } from '../../components/Projects/Projects';

const Home: React.FC = () => {
  const triggerDivRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const [triggerDivMid, setTriggerDivMid] = useState(0);
  const [technologiesMid, setTechnologiesMid] = useState(0);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const updatePositions = () => {
      if (triggerDivRef.current) {
        const rect = triggerDivRef.current.getBoundingClientRect();
        setTriggerDivMid(rect.top + window.scrollY + rect.height / 2 - window.innerHeight / 2);
      }
      if (technologiesRef.current) {
        const rect = technologiesRef.current.getBoundingClientRect();
        setTechnologiesMid(rect.top + window.scrollY + rect.height / 2 - window.innerHeight / 2);
      }
    };

    updatePositions();
    window.addEventListener('scroll', updatePositions);
    window.addEventListener('resize', updatePositions);

    return () => {
      window.removeEventListener('scroll', updatePositions);
      window.removeEventListener('resize', updatePositions);
    };
  }, []);

  // Define parallax effect for the background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 0]);
  return (
    <div className="Home-container h-full">
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ y: backgroundY }}
      ></motion.div>
      <div ref={triggerDivRef} className="relative z-10 mb-8 pb-16">
        <Hero />
        <Technologies triggerDivMid={triggerDivMid} technologiesMid={technologiesMid} ref={technologiesRef} />
      </div>
      <div className="relative z-10">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;
