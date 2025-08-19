import { PartialSectionBGImagesProps } from "../types/sections";
import { SECTION_BG_IMAGES } from "../constants/constants";

export class SectionBGImagesService {
  static getBGImages(section: keyof typeof SECTION_BG_IMAGES): PartialSectionBGImagesProps {
    return SECTION_BG_IMAGES[section] || {};
  }
}