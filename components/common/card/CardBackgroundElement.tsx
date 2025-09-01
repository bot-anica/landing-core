import { FC } from "react";
import { BGImages, BackgroundImagePositions } from "../../../types/sections";
import BackgroundImageDefault from "../background/BackgroundImageDefault";
import BackgroundImageSources from "../background/BackgroundImageSources";

interface CardBackgroundElementProps {
  images: BGImages;
  position: BackgroundImagePositions;
  lazy?: boolean;
}

const CardBackgroundElement: FC<CardBackgroundElementProps> = ({ images, position, lazy }) => {
  return (
    <picture>
      <BackgroundImageSources images={images}/>
      <BackgroundImageDefault position={position} images={images} lazy={lazy}/>
    </picture>
  );
};

export default CardBackgroundElement;
