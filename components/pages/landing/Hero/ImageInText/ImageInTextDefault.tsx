import type { FC } from 'react';
import { memo } from 'react';
import { HeroImages } from '../../../../../types/sections';

interface ImageInTextDefaultProps {
  images: HeroImages,
  maxSize: 'smallVertical' | 'small' | 'mediumVertical' | 'medium' | 'large' | 'extraLarge'
}

const mediaStyles = {
  'extraLarge': "",
  'large': "xl:hidden",
  'medium': "lg:hidden",
  'mediumVertical': "md:hidden",
  'small': "md:hidden",
  'smallVertical': "sm:hidden",
}

const ImageInTextDefault: FC<ImageInTextDefaultProps> = ({images, maxSize}) => {
  const defaultImage = images[maxSize]

  console.log(`relative z-10 md:m-auto ${mediaStyles[maxSize]}`)

  return (
    <img src={defaultImage} alt="" className={`relative z-10 ${mediaStyles[maxSize]}`} />
  );
};

export default memo(ImageInTextDefault);