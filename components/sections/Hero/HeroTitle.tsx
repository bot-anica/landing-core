import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { HeroTitle as HeroTitleType } from '../../../types/sections';

interface HeroTitleProps {
  title: HeroTitleType;
  itemVariants: any;
}

const HeroTitle: FC<HeroTitleProps> = ({ title, itemVariants }) => {
  return (
    <motion.h1 
      variants={itemVariants}
      className="text-primary-dark leading-tight mb-0 md:mb-4 lg:mb-6 text-left"
    >
      <span className="leading-11 sm:leading-15 xl:leading-18 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium sm:font-normal md:font-medium lg:font-bold text-slate-700">{title.main}</span>
      <span className="text-gradient block uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold">{title.highlight}</span>
      <span className="leading-11 sm:leading-15 xl:leading-18 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-medium sm:font-normal md:font-medium lg:font-bold text-slate-700">{title.additional}</span>
    </motion.h1>
  );
};

export default memo(HeroTitle);