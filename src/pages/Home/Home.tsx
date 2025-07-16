import React, { useRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import Hero from '../../components/HeroSection/Hero';
import Technologies from '../../components/Technologies/Technologies';
import AboutMe from '../../components/AboutMe/AboutMe';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectShowcase from '../../components/ProjectShowcase/ProjectShowcase';
import { styles } from '../../style';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  const triggerDivRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [triggerDivMid, setTriggerDivMid] = useState(0);
  const [technologiesMid, setTechnologiesMid] = useState(0);
  const [isServicesVisible, setIsServicesVisible] = useState(false); // For IntersectionObserver visibility
  const [prevScrollY, setPrevScrollY] = useState(0); // Previous scroll position

  

  // Update when all services are shown and inform the Home section to unlock scroll


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

  const { scrollY } = useViewportScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 0]);

  


  return (
    <div className="Home-container h-full">
      <motion.div
        className={`absolute inset-0 z-0 ${styles.mainbgcolor}`}
        style={{ y: backgroundY }}
      ></motion.div>
      <div ref={triggerDivRef} className="relative z-10 mb-8 pb-16">
        <Hero />
        <Technologies triggerDivMid={triggerDivMid} technologiesMid={technologiesMid} ref={technologiesRef} />
      </div>
      <div className="relative z-10 flex justify-between">
        <AboutMe />
      </div>
      {/* <div ref={servicesRef} className="relative z-10">
        <ServiceSection   
        />
      </div> */}
      <div className="relative z-10">
        <ProjectShowcase />
      </div>
      <div className="relative z-0">
        <Footer></Footer>
      </div>

     
      
    </div>
  );
};

export default Home;
