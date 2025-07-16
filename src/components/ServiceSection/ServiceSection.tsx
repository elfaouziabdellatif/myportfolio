import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ServiceSection.css';

interface Service {
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
}

interface ServiceSectionProps {
  isServicesSectionActive: boolean; // Prop for scroll locking
  onServicesFullyShown: () => void; // Callback to inform parent when services are fully shown
}

const services: Service[] = [
  { title: 'Web Development', description: 'Building responsive and modern websites using React, Vue.js, and more.', icon: '🌐', backgroundColor: '#F0F4F8' },
  { title: 'Mobile App Development', description: 'Creating mobile applications for iOS and Android with a focus on performance.', icon: '📱', backgroundColor: '#F9F3F3' },
  { title: 'UI/UX Design', description: 'Designing intuitive user interfaces and user experiences.', icon: '🎨', backgroundColor: '#E8F5E9' },
  { title: 'SEO Optimization', description: 'Improving search engine rankings and online visibility.', icon: '🚀', backgroundColor: '#FFF3E0' },
];

const ServiceSection: React.FC<ServiceSectionProps> = ({ isServicesSectionActive, onServicesFullyShown }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e: WheelEvent) => {
    if (!isServicesSectionActive || isScrolling) return;

    setIsScrolling(true);
    if (e.deltaY > 0 && selectedServiceIndex < services.length - 1) {
      setSelectedServiceIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && selectedServiceIndex > 0) {
      setSelectedServiceIndex((prev) => prev - 1);
    }

    if (selectedServiceIndex === services.length - 1 && e.deltaY > 0) {
      onServicesFullyShown();
    }

    if (selectedServiceIndex === 0 && e.deltaY < 0) {
      onServicesFullyShown();
    }

    setTimeout(() => setIsScrolling(false), 1500);
  };

  useEffect(() => {
    if (isServicesSectionActive) {
      window.addEventListener('wheel', handleScroll);
    } else {
      window.removeEventListener('wheel', handleScroll);
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isServicesSectionActive, selectedServiceIndex, isScrolling]);

  return (
    <div className="service-section-container flex flex-col h-screen" style={{ height: '100vh', overflow: 'hidden' }}>
      <motion.h1
        className="animated-title text-5xl font-bold text-center my-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 10 }}
      >
        My Services
      </motion.h1>

      <div className="flex h-full">
        <div className="service-list flex flex-col w-1/4 p-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-link mb-4 p-2 cursor-pointer ${selectedServiceIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedServiceIndex(index)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 10 }}
            >
              {service.title}
            </motion.div>
          ))}
        </div>

        <div className="service-details w-3/4">
          {services[selectedServiceIndex] && (
            <motion.div
              key={services[selectedServiceIndex].title}
              initial={{ opacity: 0, x: selectedServiceIndex % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="service-content p-8"
              style={{ backgroundColor: services[selectedServiceIndex].backgroundColor }}
            >
              <h2 className="text-4xl font-bold mb-4">{services[selectedServiceIndex].title}</h2>
              <p className="text-lg">{services[selectedServiceIndex].description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
