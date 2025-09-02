import { FooterData, LinkItem } from '../types/sections';

export class FooterService {
  static async getCourseDescription(courseUrlParam: string): Promise<string> {
    const { COURSE_DESCRIPTION } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/footer.ts`);
    return COURSE_DESCRIPTION;
  }

  static async getNavigationLinks(courseUrlParam: string): Promise<LinkItem[]> {
    const { FOOTER_NAVIAGTION_LINKS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/footer.ts`);
    return FOOTER_NAVIAGTION_LINKS;
  }

  static async getData(courseUrlParam: string): Promise<FooterData> {
    const courseDescription = await FooterService.getCourseDescription(courseUrlParam);
    const navigationLinks = await FooterService.getNavigationLinks(courseUrlParam);

    return { courseDescription, navigationLinks }
  }
} 