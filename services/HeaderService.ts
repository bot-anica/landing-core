import { CTAItem, HeaderData, LinkItem } from '../types/sections';

export class HeaderService {
  static async getNavigationLinks(courseUrlParam: string): Promise<LinkItem[]> {
    const { HEADER_NAVIAGTION_LINKS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/header.ts`);
    return HEADER_NAVIAGTION_LINKS;
  }

  static async getCTAButtons(courseUrlParam: string): Promise<CTAItem[]> {
    const { HEADER_CTA_BUTTONS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/header.ts`);
    return HEADER_CTA_BUTTONS;
  }

  static async getData(courseUrlParam: string): Promise<HeaderData> {
    const navigationLinks = await HeaderService.getNavigationLinks(courseUrlParam);
    const ctaButtons = await HeaderService.getCTAButtons(courseUrlParam);

    return { ctaButtons, navigationLinks }
  }
} 