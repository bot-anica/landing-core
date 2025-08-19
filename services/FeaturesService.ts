import { FEATURES } from '../constants/features';
import { Feature, FeaturesSectionData } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class FeaturesService {
  static getAllFeatures(): Feature[] {
    return FEATURES;
  }

  static getData(): FeaturesSectionData {
    const header = SectionHeadersService.getHeader('features');
    const features = FeaturesService.getAllFeatures();
    const bgImages = SectionBGImagesService.getBGImages('features');

    return {
      header,
      features,
      bgImages,
    }
  }

  static getFeatureByIndex(index: number): Feature | undefined {
    return FEATURES[index];
  }

  static getFeaturesCount(): number {
    return FEATURES.length;
  }

  static validateFeatureIndex(index: number): boolean {
    return index >= 0 && index < FEATURES.length;
  }
} 