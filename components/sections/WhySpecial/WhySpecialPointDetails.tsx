import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import WhySpecialPointContent from './WhySpecialPointContent';
import { WhySpecialPoint } from '../../../types/sections';

interface WhySpecialPointDetailsProps {
  point: WhySpecialPoint;
  isFirstPoint: boolean;
  isLastPoint: boolean;
  isIntersecting: boolean;
}

const WhySpecialPointDetails: FC<WhySpecialPointDetailsProps> = ({ point, isFirstPoint, isLastPoint, isIntersecting }) => {
  const getBorerRadiusDependOnSelectedPoint = () => {
    if (isFirstPoint) {
      return 'rounded-tl-none lg:rounded-tl-2xl';
    }
    if (isLastPoint) {
      return 'rounded-tr-none lg:rounded-tr-2xl';
    }
    return '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`bg-white rounded-2xl ${getBorerRadiusDependOnSelectedPoint()} lg:rounded-2xl p-8 transition-all duration-300 border border-gray-300 hover:border-pink-300 h-full flex flex-col`}
    >
      <WhySpecialPointContent point={point} />
    </motion.div>
  );
};

export default memo(WhySpecialPointDetails);