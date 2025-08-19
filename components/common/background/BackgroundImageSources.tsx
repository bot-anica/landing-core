import type { FC } from 'react';
import { memo } from 'react';
import { BGImages } from '../../../types/sections';

interface BackgroundImagesSourcesProps {
  images: BGImages;
}

const BackgroundImagesSources: FC<BackgroundImagesSourcesProps> = ({ images }) => {
  return (
    <>
      {images.extraLarge && <source srcSet={images.extraLarge} type="image/webp" media="(min-width: 1940px)" />}
      {images.large && <source srcSet={images.large} type="image/jpeg" media="(min-width: 1280px) and (max-width: 1939px)" />}
      {images.medium && <source srcSet={images.medium} type="image/jpeg" media="(min-width: 1024px) and (max-width: 1279px)" />}
      {images.mediumVertical && <source srcSet={images.mediumVertical} type="image/jpeg" media="(min-width: 768px) and (max-width: 1023px)" />}
      {images.small && <source srcSet={images.small} type="image/jpeg" media="(min-width: 645px) and (max-width: 767px)" />}
      {images.smallVertical && <source srcSet={images.smallVertical} type="image/jpeg" media="(min-width: 340px) and (max-width: 644px)" />}
    </>
  );
};

export default memo(BackgroundImagesSources);