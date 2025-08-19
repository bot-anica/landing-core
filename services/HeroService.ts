import { HERO } from "../constants/hero";
import { HeroData, HeroMainData } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";

export class HeroService {
  static getHeroMainData(): HeroMainData {
    return HERO;
  }

  static getData(): HeroData {
    const data = HeroService.getHeroMainData();
    const bgImages = SectionBGImagesService.getBGImages('hero');

    return {
      data,
      bgImages
    }
  }
}