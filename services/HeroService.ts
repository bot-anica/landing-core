import { CTAItem, HeroData, HeroImages, HeroTitle } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";

export class HeroService {
  static async getTitle(courseUrlParam: string): Promise<HeroTitle> {
    const { HERO_TITLE } = await import( `../../constants/${courseUrlParam}/hero`);
    return HERO_TITLE;
  }

  static async getSubtitle(courseUrlParam: string): Promise<string> {
    const { HERO_SUBTITLE } = await import( `../../constants/${courseUrlParam}/hero`);
    return HERO_SUBTITLE;
  }

  static async getBenefits(courseUrlParam: string): Promise<string[]> {
    const { HERO_BENEFITS } = await import( `../../constants/${courseUrlParam}/hero`);
    return HERO_BENEFITS;
  }

  static async getCTA(courseUrlParam: string): Promise<Record<'primary' | 'secondary', CTAItem>> {
    const { HERO_CTA } = await import( `../../constants/${courseUrlParam}/hero`);
    return HERO_CTA;
  }

  static async getImages(courseUrlParam: string): Promise<Record<'rightImages' | 'imagesInText', HeroImages>> {
    const { HERO_IMAGES } = await import( `../../constants/${courseUrlParam}/hero`);
    return HERO_IMAGES;
  }

  static async getData(courseUrlParam: string): Promise<HeroData> {
    const title = await HeroService.getTitle(courseUrlParam);
    const subtitle = await HeroService.getSubtitle(courseUrlParam);
    const benefits = await HeroService.getBenefits(courseUrlParam);
    const cta = await HeroService.getCTA(courseUrlParam);
    const images = await HeroService.getImages(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'hero');

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
