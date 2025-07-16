import React from 'react';
import { motion, useSpring } from 'framer-motion';

interface AnimatedLineProps {
  drawingProgress: number;
  direction: 'vertical' | 'horizontal'; // To handle both vertical and horizontal lines
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ drawingProgress, direction }) => {
  const springConfig = { damping: 40, stiffness: 90 };
  const springDrawingProgress = useSpring(drawingProgress, springConfig);

  const isVertical = direction === 'vertical';

  return (
    <motion.div
      className={isVertical ? 'border-l-4 border-gray-300 h-16' : 'border-b-2 border-gray-300 w-52 h-16 z-10'}
      style={{
        scaleY: isVertical ? springDrawingProgress : 1,  // scaleY for vertical line
        scaleX: isVertical ? 1 : springDrawingProgress,  // scaleX for horizontal line
        originY: isVertical ? 0 : undefined,            // set originY for vertical
        originX: isVertical ? undefined : 0,            // set originX for horizontal
      }}
    ></motion.div>
  );
};

export default AnimatedLine;
