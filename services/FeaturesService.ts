import { Feature, FeaturesSectionData } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class FeaturesService {
  static async getAllFeatures(courseUrlParam: string): Promise<Feature[]> {
    const { FEATURES } = await import(`../../constants/${courseUrlParam}/features`);
    return FEATURES;
  }

  static async getData(courseUrlParam: string): Promise<FeaturesSectionData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'features');
    const features = await FeaturesService.getAllFeatures(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'features');

    return {
      header,
      features,
      bgImages,
    }
  }

  static async getFeatureByIndex(courseUrlParam: string, index: number): Promise<Feature | undefined> {
    const { FEATURES } = await import(`../../constants/${courseUrlParam}/features`);
    return FEATURES[index];
  }

  static async getFeaturesCount(courseUrlParam: string): Promise<number> {
    const { FEATURES } = await import(`../../constants/${courseUrlParam}/features`);
    return FEATURES.length;
  }

  static async validateFeatureIndex(courseUrlParam: string, index: number): Promise<boolean> {
    const { FEATURES } = await import(`../../constants/${courseUrlParam}/features`);
    return index >= 0 && index < FEATURES.length;
  }
} 