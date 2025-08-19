import { FC } from "react";
import { BackgroundImagePositions, BGImages } from "../../../types/sections";
import BackgroundImageDefault from "../background/BackgroundImageDefault";
import BackgroundImageSources from "../background/BackgroundImageSources";

interface SectionBackgroundElementProps {
  images: BGImages;
  position: BackgroundImagePositions;
  lazy?: boolean;
}

const SectionBackgroundElement: FC<SectionBackgroundElementProps> = ({ images, position, lazy }) => {
  return (
    <picture>
      <BackgroundImageSources images={images}/>
      <BackgroundImageDefault position={position} images={images} lazy={lazy}/>
    </picture>
  );
};

export default SectionBackgroundElement;
