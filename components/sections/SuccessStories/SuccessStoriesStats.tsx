import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Statistic } from '../../../types/sections';

interface SuccessStoriesStatsProps {
  stats: Statistic[];
  isIntersecting: boolean;
  statVariants: Variants;
}

const renderIcon = (icon: any, color: string) => {
  const IconComponent = icon
  return <IconComponent className="w-10 h-10" style={{ color: color }} />
};

export const SuccessStoriesStats: FC<SuccessStoriesStatsProps> = ({
  stats,
  isIntersecting,
  statVariants
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={statVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center group"
        >
          <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {renderIcon(stat.icon, stat.iconColor)}
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {stat.number}
          </div>
          <div className="text-gray-300 text-sm md:text-base">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};