import { FC } from "react";
import { PartialSectionBGImagesProps, BackgroundImagePositions } from "../../../types/sections";
import CardBackgroundElement from "./CardBackgroundElement";

interface CardBackgroundProps {
  bgImages: PartialSectionBGImagesProps;
  lazy?: boolean;
}

const CardBackground: FC<CardBackgroundProps> = ({
  bgImages,
  lazy,
}) => {
  return (
    <>
      {Object.keys(bgImages).filter((position) => position !== undefined).map((position) => {
        return (
          <CardBackgroundElement
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

export default CardBackground;
