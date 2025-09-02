import { Statistic, SuccessStoriesCTABlock, SuccessStoriesData, Testimonial } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class SuccessStoriesService {
  static async getStatistic(courseUrlParam: string): Promise<Statistic[]> {
    const { STATISTIC } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/successStories.ts`);
    return STATISTIC;
  }

  static async getTestimonials(courseUrlParam: string): Promise<Testimonial[]> {
    const { TESTIMONIALS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/successStories.ts`);
    return TESTIMONIALS;
  }

  static async getCTABlock(courseUrlParam: string): Promise<SuccessStoriesCTABlock> {
    const { SUCCESS_STORIES_CTA_BLOCK } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/successStories.ts`);
    return SUCCESS_STORIES_CTA_BLOCK;
  }

  static async getData(courseUrlParam: string): Promise<SuccessStoriesData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'successStories');
    const stats = await SuccessStoriesService.getStatistic(courseUrlParam);
    const testimonials = await SuccessStoriesService.getTestimonials(courseUrlParam);
    const ctaBlock = await SuccessStoriesService.getCTABlock(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'successStories');
    
    return {
      header,
      stats,
      testimonials,
      ctaBlock,
      bgImages
    }
  }
}
