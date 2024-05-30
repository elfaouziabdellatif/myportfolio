import React, { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';
import './Layout.css';
import AnimatedCursor from 'react-animated-cursor';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate components being loaded after 1.5 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Determine scroll direction and show/hide navbar
          if (currentScrollY === 0) {
            controls.start({ y: -10 });
          } else if (currentScrollY > lastScrollY + 5) { // Increased threshold to 5 pixels
            // Scrolling down
            controls.start({ y: -90 });
          } else if (currentScrollY < lastScrollY - 5) { // Increased threshold to 5 pixels
            // Scrolling up
            controls.start({ y: -10 });
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, controls]);

  useEffect(() => {
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    const handleMouseMove = (event: MouseEvent) => {
      cursorDot.style.left = `${event.clientX}px`;
      cursorDot.style.top = `${event.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="layout relative w-full h-full overflow-hidden">
          <motion.div
            initial={{ y: -80 }}
            animate={controls}
            transition={{ type: 'spring', stiffness: 300, damping: 50 }}
            className="fixed top-0 w-full z-50 "
          >
            <Header />
          </motion.div>
          <AnimatedCursor></AnimatedCursor>
          <main className="z-40">{children}</main>
          <div className="bottom-0 w-full h-full z-49">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
  