import { FC } from "react";
import { BackgroundImagePositions, PartialSectionBGImagesProps } from "../../../types/sections";
import SectionBackgroundElement from "./SectionBackgroundElement";

interface SectionBackgroundProps {
  bgImages: PartialSectionBGImagesProps;
  lazy?: boolean;
}

const SectionBackground: FC<SectionBackgroundProps> = ({
  bgImages,
  lazy,
}) => {
  return (
    <>
      {Object.keys(bgImages).filter((position) => position !== undefined).map((position) => {
        return (
          <SectionBackgroundElement
            key={position}
            images={bgImages[position as BackgroundImagePositions]!}
            position={position as BackgroundImagePositions}
            lazy={lazy}
          />
        );
      })}
    </>
  );
};

export default SectionBackground;
