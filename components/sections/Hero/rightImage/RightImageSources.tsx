import type { FC } from 'react';
import { memo } from 'react';
import { HeroImages } from '../../../../types/sections';

interface RightImageSourcesProps {
  images: HeroImages;
}

const RightImageSources: FC<RightImageSourcesProps> = ({ images }) => {
  return (
    <>
      {images.extraLarge && <source srcSet={images.extraLarge} type="image/webp" media="(min-width: 1280px)" />}
      {images.large && <source srcSet={images.large} type="image/jpeg" media="(min-width: 1024px) and (max-width: 1279px)" />}
      {images.medium && <source srcSet={images.medium} type="image/jpeg" media="(min-width: 768px) and (max-width: 1023px)" />}
      {images.mediumVertical && <source srcSet={images.mediumVertical} type="image/jpeg" media="(min-width: 645px) and (max-width: 767px)" />}
      {images.small && <source srcSet={images.small} type="image/jpeg" media="(min-width: 340px) and (max-width: 644px)" />}
      {images.smallVertical && <source srcSet={images.smallVertical} type="image/jpeg" media="(max-width: 340px)" />}
    </>
  );
};

export default memo(RightImageSources);