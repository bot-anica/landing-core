import { CTAItem, HeaderData, LinkItem } from '../types/sections';

export class HeaderService {
  static async getNavigationLinks(courseUrlParam: string): Promise<LinkItem[]> {
    const { HEADER_NAVIAGTION_LINKS } = await import(`../../constants/${courseUrlParam}/header`);
    return HEADER_NAVIAGTION_LINKS;
  }

  static async getCTAButtons(courseUrlParam: string): Promise<CTAItem[]> {
    const { HEADER_CTA_BUTTONS } = await import(`../../constants/${courseUrlParam}/header`);
    return HEADER_CTA_BUTTONS;
  }

  static async getData(courseUrlParam: string): Promise<HeaderData> {
    const navigationLinks = await HeaderService.getNavigationLinks(courseUrlParam);
    const ctaButtons = await HeaderService.getCTAButtons(courseUrlParam);

    return { ctaButtons, navigationLinks }
  }
} 