import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

interface HeroBenefitsProps {
  benefits: string[];
  itemVariants: any;
}

const HeroBenefits: FC<HeroBenefitsProps> = ({ benefits, itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="hidden lg:flex flex-col sm:flex-row gap-4 items-center"
    >
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className="flex items-center gap-1 md:gap-2 px-2 py-0.5 bg-primary-blue/5 rounded-full border border-primary-blue/20 border-dashed"
        >
          <span className="text-sm text-green-500">✔</span>
          <span className="text-xs font-medium text-primary-blue/80">{benefit}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default memo(HeroBenefits);