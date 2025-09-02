import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../../../../types/sections';

interface StatsSectionProps {
  stats: Stat[];
  isIntersecting: boolean;
}

const StatsSection: FC<StatsSectionProps> = ({ stats, isIntersecting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gradient-to-br from-pink-50 via-blue-50 to-pink-50 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-pink-200"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              {stat.number}
            </div>
            <div className="text-slate-600 font-semibold text-sm lg:text-base leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(StatsSection);