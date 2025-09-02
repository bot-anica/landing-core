import { PartialSectionBGImagesProps } from "../types/sections";

export class SectionBGImagesService {
  static async getBGImages(courseUrlParam: string, section: string): Promise<PartialSectionBGImagesProps> {
    const { SECTION_BG_IMAGES } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/common.ts`);
    const sectionImages = SECTION_BG_IMAGES as Record<string, PartialSectionBGImagesProps>;
    return sectionImages[section] || {};
  }
}
