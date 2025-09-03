import type { FC } from 'react';
import { memo } from 'react';
import { HeroImages } from '../../../../../types/sections';

interface RightImageDefaultProps {
  images: HeroImages,
  minSize: 'smallVertical' | 'small' | 'mediumVertical' | 'medium' | 'large' | 'extraLarge'
}

const mediaStyles = {
  'extraLarge': "hidden xl:block",
  'large': "hidden lg:block",
  'medium': "hidden md:block",
  'mediumVertical': "hidden sm:block",
  'small': "hidden sm:block",
  'smallVertical': "",
}

const RightImageDefault: FC<RightImageDefaultProps> = ({images, minSize}) => {
  return (
    <img 
      src={images.small || images.smallVertical || images.medium || images.mediumVertical || images.large || images.extraLarge} 
      alt="Course illustration" 
      className={`relative z-10 ${mediaStyles[minSize]}`} 
      loading="lazy"
      decoding="async"
    />
  );
};

export default memo(RightImageDefault);