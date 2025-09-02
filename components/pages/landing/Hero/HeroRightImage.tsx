import { FC } from "react";
import { HeroImages } from "../../../../types/sections";
import RightImageDefault from "./rightImage/RightImageDefault";
import RightImageSources from "./rightImage/RightImageSources";

interface HeroRightImageProps {
  images: HeroImages;
}

const HeroRightImage: FC<HeroRightImageProps> = ({ images }) => {
  const availableSizes = Object.keys(images).filter((key) => images[key as keyof HeroImages])
  const minSize = availableSizes[availableSizes.length - 1]

  return (
    <picture>
      <RightImageSources images={images}/>
      <RightImageDefault images={images} minSize={minSize as keyof HeroImages}/>
    </picture>
  );
};

export default HeroRightImage;
