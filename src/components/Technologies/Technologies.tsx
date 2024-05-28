import React, { forwardRef, ForwardedRef } from 'react';
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';

interface TechnologiesProps {
  triggerDivMid: number;
  technologiesMid: number;
}

const initialTransforms = [
  { translateX: -130, translateY: -450, rotate: -30 },
  { translateX: -280, translateY: -240, rotate: 5 },
  { translateX: 250, translateY: 100, rotate: 40 },
  { translateX: 370, translateY: -250, rotate: -30 },
  { translateX: 150, translateY: -450, rotate: -50 },
];

const Technologies = forwardRef<HTMLDivElement, TechnologiesProps>(({ triggerDivMid, technologiesMid }, ref: ForwardedRef<HTMLDivElement>) => {
  const { scrollY } = useViewportScroll();

  // Define spring configuration for smoother animations
  const springConfig = { damping: 20, stiffness: 80 };

  return (
    <div ref={ref} className="wrap bg-black w-full h-full flex items-end m-auto justify-center  z-50">
      <motion.div className="relative w-full h-full flex justify-around">
        {initialTransforms.map(({ translateX, translateY, rotate }, index) => {
          const x = useSpring(useTransform(scrollY, [triggerDivMid, technologiesMid], [translateX, 0]), springConfig);
          const y = useSpring(useTransform(scrollY, [triggerDivMid, technologiesMid], [translateY, 15]), springConfig);
          const r = useSpring(useTransform(scrollY, [triggerDivMid, technologiesMid], [rotate, 0]), springConfig);
          
          return (
            <motion.div key={index} className="w-fit h-fit" style={{ x, y, rotate: r }}>
              <img src={`https://picsum.photos/200/300?random=${index}`} className="border-black rounded-md" alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
});

export default Technologies;
