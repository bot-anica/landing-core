import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import WhySpecialPointItem from './WhySpecialPointItem';
import { WhySpecialPoint } from '../../../types/sections';

interface WhySpecialPointsListProps {
  points: WhySpecialPoint[];
  activePoint: number;
  isIntersecting: boolean;
  onClick: (index: number) => void;
}

const WhySpecialPointsList: FC<WhySpecialPointsListProps> = ({ 
  points, 
  activePoint, 
  isIntersecting,
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`grid grid-flow-col lg:grid-flow-row lg:space-x-0 lg:space-y-4 -mb-1 lg:mb-0`}
    >
      {points.map((whySpecialPoint: WhySpecialPoint, index: number) => (
        <WhySpecialPointItem
          key={index}
          point={whySpecialPoint}
          isActive={activePoint === index}
          onClick={() => onClick(index)}
        />
      ))}
    </motion.div>
  );
};

export default memo(WhySpecialPointsList);