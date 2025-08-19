import { WHY_SPECIAL_POINTS } from '../../constants/whySpecial';
import { WhySpecialPoint, WhySpecialSectionData } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';
import { StatsService } from './StatsService';

export class WhySpecialService {
  static getAllWhySpecialPoints(): WhySpecialPoint[] {
    return WHY_SPECIAL_POINTS;
  }

  static getData(): WhySpecialSectionData {
    const header = SectionHeadersService.getHeader('whySpecial');
    const whySpecialPoints = WhySpecialService.getAllWhySpecialPoints();
    const stats = StatsService.getAllStats();
    const bgImages = SectionBGImagesService.getBGImages('whySpecial');
    
    return {
      header,
      whySpecialPoints,
      stats,
      bgImages,
    };
  }

  static validateWhySpecialPointIndex(index: number): boolean {
    return index >= 0 && index < WHY_SPECIAL_POINTS.length;
  }

  static getWhySpecialPointsCount(): number {
    return WHY_SPECIAL_POINTS.length;
  }

  static getWhySpecialPointByIndex(index: number): WhySpecialPoint | undefined {
    return WHY_SPECIAL_POINTS[index];
  }
}