import { FC } from "react";
import { HeroImages } from "../../../../types/sections";
import ImageInTextDefault from "./ImageInText/ImageInTextDefault";
import ImageInTextSources from "./ImageInText/ImageInTextSources";

interface HeroImageInTextProps {
  images: HeroImages;
}

const HeroImageInText: FC<HeroImageInTextProps> = ({ images }) => {
  const maxSize = Object.keys(images).filter((key) => images[key as keyof HeroImages])[0]

  return (
    <picture>
      <ImageInTextSources images={images}/>
      <ImageInTextDefault images={images} maxSize={maxSize as keyof HeroImages} />
    </picture>
  );
};

export default HeroImageInText;
