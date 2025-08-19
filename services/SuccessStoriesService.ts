import { STATISTIC, TESTIMONIALS, SUCCESS_STORIES_CTA_BLOCK } from '../../constants/successStories';
import { Statistic, SuccessStoriesCTABlock, SuccessStoriesData, Testimonial } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class SuccessStoriesService {
  static getStatistic(): Statistic[] {
    return STATISTIC;
  }

  static getTestimonials(): Testimonial[] {
    return TESTIMONIALS;
  }

  static getCTABlock(): SuccessStoriesCTABlock {
    return SUCCESS_STORIES_CTA_BLOCK;
  }

  static getData(): SuccessStoriesData {
    const header = SectionHeadersService.getHeader('successStories');
    const stats = SuccessStoriesService.getStatistic();
    const testimonials = SuccessStoriesService.getTestimonials();
    const ctaBlock = SuccessStoriesService.getCTABlock();
    const bgImages = SectionBGImagesService.getBGImages('successStories');
    
    return {
      header,
      stats,
      testimonials,
      ctaBlock,
      bgImages
    }
  }
}