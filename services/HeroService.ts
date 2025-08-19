import { HERO_BENEFITS, HERO_CTA, HERO_IMAGES, HERO_SUBTITLE, HERO_TITLE } from "../../constants/hero";
import { CTAItem, HeroData, HeroImages, HeroTitle } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";

export class HeroService {
  static getTitle(): HeroTitle {
    return HERO_TITLE;
  }

  static getSubtitle(): string {
    return HERO_SUBTITLE;
  }

  static getBenefits(): string[] {
    return HERO_BENEFITS;
  }

  static getCTA(): Record<'primary' | 'secondary', CTAItem> {
    return HERO_CTA;
  }

  static getImages(): Record<'rightImages' | 'imagesInText', HeroImages> {
    return HERO_IMAGES;
  }

  static getData(): HeroData {
    const title = HeroService.getTitle();
    const subtitle = HeroService.getSubtitle();
    const benefits = HeroService.getBenefits();
    const cta = HeroService.getCTA();
    const images = HeroService.getImages();
    const bgImages = SectionBGImagesService.getBGImages('hero');

    return {
      title,
      subtitle,
      benefits,
      cta,
      images,
      bgImages
    }
  }
}