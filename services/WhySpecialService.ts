import { WhySpecialPoint, WhySpecialSectionData } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';
import { StatsService } from './StatsService';

export class WhySpecialService {
  static async getAllWhySpecialPoints(courseUrlParam: string): Promise<WhySpecialPoint[]> {
    const { WHY_SPECIAL_POINTS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/whySpecial.ts`);
    return WHY_SPECIAL_POINTS;
  }

  static async getData(courseUrlParam: string): Promise<WhySpecialSectionData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'whySpecial');
    const whySpecialPoints = await WhySpecialService.getAllWhySpecialPoints(courseUrlParam);
    const stats = await StatsService.getAllStats(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'whySpecial');
    
    return {
      header,
      whySpecialPoints,
      stats,
      bgImages,
    };
  }

  static async validateWhySpecialPointIndex(courseUrlParam: string, index: number): Promise<boolean> {
    const { WHY_SPECIAL_POINTS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/whySpecial.ts`);
    return index >= 0 && index < WHY_SPECIAL_POINTS.length;
  }

  static async getWhySpecialPointsCount(courseUrlParam: string): Promise<number> {
    const { WHY_SPECIAL_POINTS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/whySpecial.ts`);
    return WHY_SPECIAL_POINTS.length;
  }

  static async getWhySpecialPointByIndex(courseUrlParam: string, index: number): Promise<WhySpecialPoint | undefined> {
    const { WHY_SPECIAL_POINTS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/whySpecial.ts`);
    return WHY_SPECIAL_POINTS[index];
  }
}
