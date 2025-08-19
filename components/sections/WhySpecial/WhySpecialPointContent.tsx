import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { WhySpecialPoint } from '../../../types/sections';

interface WhySpecialPointContentProps {
  point: WhySpecialPoint;
}

const WhySpecialPointContent: FC<WhySpecialPointContentProps> = ({ point }) => {
  return (
    <motion.div
      key={point.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-4 mb-4 lg:mb-6">
        <div className="p-2 md:p-3 rounded-lg md:rounded-xl" style={{ background: `${point.color}33` }}>
          <point.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: point.color }} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {point.title}
        </h3>
      </div>
      
      <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
        {point.description}
      </p>
      
      <div className="space-y-3 lg:space-y-4">
        <h4 className="font-semibold text-gray-900">
          Что вы получите:
        </h4>
        <ul className="space-y-3 lg:space-y-4">
          {point.bullets.map((bullet, bulletIndex) => (
            <li
              key={bulletIndex}
              className="flex items-center gap-2 lg:gap-3 text-sm md:text-base text-gray-700"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              </div>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default memo(WhySpecialPointContent);