import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';

interface HeroSubtitleProps {
  subtitle: string;
  itemVariants: any;
}

const HeroSubtitle: FC<HeroSubtitleProps> = ({ subtitle, itemVariants }) => {
  return (
    <motion.p 
      variants={itemVariants}
      className="text-sm md:text-base xl:text-lg text-gray-500 max-w-sm lg:max-w-2xl mb-4 lg:mb-8 text-left md:mx-0"
    >
      {subtitle}
    </motion.p>
  );
};

export default memo(HeroSubtitle);