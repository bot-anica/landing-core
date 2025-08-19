import type { FC } from 'react';
import { memo } from 'react';
import { BackgroundImagePositions, BGImages } from '../../../types/sections';

interface BackgroundImageDefaultProps {
  position: BackgroundImagePositions
  images: BGImages
  lazy?: boolean
}

const positionStyles: Record<BackgroundImagePositions, string> = {
    topLeft: "top-0 left-0",
    top: "top-0 left-1/2 transform -translate-x-1/2",
    topRight: "top-0 right-0",
    left: "top-1/2 left-0 transform -translate-y-1/2",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    right: "top-1/2 right-0 transform -translate-y-1/2",
    bottomLeft: "bottom-0 left-0",
    bottom: "bottom-0 left-1/2 transform -translate-x-1/2",
    bottomRight: "bottom-0 right-0",
}

const BackgroundImageDefault: FC<BackgroundImageDefaultProps> = ({position, images, lazy}) => {
  return (
    <img src={images.small || images.smallVertical || images.medium || images.mediumVertical || images.large || images.extraLarge} alt="" className={`absolute ${positionStyles[position]}`} loading={lazy ? "lazy" : undefined} />
  );
};

export default memo(BackgroundImageDefault);