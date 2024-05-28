import React, { useRef, useEffect, useState } from 'react';
import Hero from '../../components/HeroSection/Hero';
import Technologies from '../../components/Technologies/Technologies';
import { ProjectsSection } from '../../components/Projects/Projects';
import videoBg from '../../assets/herovideo2.mp4';
const Home: React.FC = () => {
  const triggerDivRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const [triggerDivMid, setTriggerDivMid] = useState(0);
  const [technologiesMid, setTechnologiesMid] = useState(0);

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

  return (
    <div className="Home-container">
      <div ref={triggerDivRef} className="relative border-rose-900 border-spacing-3 mb-8">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10">
          <Hero />
          <Technologies triggerDivMid={triggerDivMid} technologiesMid={technologiesMid} ref={technologiesRef} />
        </div>
      </div>
      
      <div className="block">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Home;
