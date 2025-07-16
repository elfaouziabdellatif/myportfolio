import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

interface AnimatedTitleProps {
  triggerMid: number;
  sectionMid: number;
  titleText: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ triggerMid, sectionMid, titleText }) => {
  const { scrollY } = useViewportScroll();

  const titleOpacity = useTransform(scrollY, [triggerMid, sectionMid], [0, 1]);
  const titleY = useTransform(scrollY, [triggerMid, sectionMid], [50, 0]);

  return (
    <motion.h2
      className="text-4xl font-bold text-white text-center mb-10"
      style={{ opacity: titleOpacity, y: titleY }}
      transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 50 }}
    >
      {titleText}
    </motion.h2>
  );
};

export default AnimatedTitle;
