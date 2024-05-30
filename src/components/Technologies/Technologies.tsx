import React, { forwardRef, ForwardedRef, useEffect, useState } from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';
import reactjs from '../../assets/react.png';
import laravel from '../../assets/php.png';
import python from '../../assets/python (1).png';
import mysql from '../../assets/mysql.png';
import tailwind from '../../assets/tailwind.png';

interface TechnologiesProps {
  triggerDivMid: number;
  technologiesMid: number;
}

const initialTransforms = [
  { translateX: -130, translateY: -450, rotate: -30, image: mysql },
  { translateX: -280, translateY: -240, rotate: 5, image: laravel },
  { translateX: 250, translateY: 100, rotate: 40, image: tailwind },
  { translateX: 370, translateY: -250, rotate: -30, image: reactjs },
  { translateX: 150, translateY: -450, rotate: -50, image: python },
];

const Technologies = forwardRef<HTMLDivElement, TechnologiesProps>(({ triggerDivMid, technologiesMid }, ref: ForwardedRef<HTMLDivElement>) => {
  const { scrollY } = useViewportScroll();
  const [drawingProgress, setDrawingProgress] = useState(0);

  // Define spring configuration for smoother animations
  const springConfig = { damping: 30, stiffness: 90 };

  // Update drawing progress based on scroll position
  useEffect(() => {
    const updateDrawingProgress = () => {
      const progress = (scrollY.get() - triggerDivMid) / (technologiesMid - triggerDivMid);
      setDrawingProgress(Math.max(0, Math.min(1, progress)));
    };

    updateDrawingProgress();

    const unsubscribeScroll = scrollY.onChange(updateDrawingProgress);
    return () => unsubscribeScroll();
  }, [scrollY, triggerDivMid, technologiesMid]);

  // Title animation based on scroll position
  const titleOpacity = useTransform(scrollY, [0, technologiesMid], [0, 1]);

  const titleY = useTransform(scrollY, [0, technologiesMid], [0, -50]);

  return (
    <div>
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-10"
        style={{ opacity: titleOpacity, y: titleY }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 50 }}
      >
        Technologies I Use
      </motion.h2>
      <div className="relative w-full flex justify-center mb-10">
        <motion.div
          className="border-l-2 border-gray-300 h-16"
          style={{
            scaleY: drawingProgress,
            originY: 0,
          }}
        ></motion.div>
      </div>
      <div ref={ref} className="wrap w-full h-full flex items-end m-auto justify-center z-50">
        <motion.div className="relative w-full h-full flex justify-around">
          {initialTransforms.map(({ translateX, translateY, rotate, image }, index) => {
            const x = useSpring(useTransform(scrollY, [triggerDivMid, technologiesMid], [translateX, 0]), springConfig);
            const y = useSpring(useTransform(scrollY, [triggerDivMid, technologiesMid], [translateY, 15]), springConfig);
            const r = useSpring(useTransform(scrollY, [triggerDivMid, technologiesMid], [rotate, 0]), springConfig);

            return (
              <motion.div
                key={index}
                className="w-fit h-fit"
                style={{ x, y, rotate: r }}
                whileHover={{ scale: [1, 1.1] }}
                transition={{ type: 'spring', stiffness: 300, yoyo: Infinity, repeatDelay: 0.5 }}
              >
                <img src={image} className="border-black rounded-md w-52 drop-shadow-2xl" alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
});

export default Technologies;
