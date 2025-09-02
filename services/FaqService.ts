import { FAQItem, FaqSectionData } from '../types/sections';
import { SectionHeadersService } from './SectionHeadersService';
import { SectionBGImagesService } from './SectionBGImagesService';

export class FaqService {
  static async getFaqs(courseUrlParam: string): Promise<FAQItem[]> {
    const { FAQS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/faqData.ts`);
    return FAQS;
  }

  static async getData(courseUrlParam: string): Promise<FaqSectionData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'faq');
    const faqs = await FaqService.getFaqs(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'faq');

    return {
      header,
      faqs,
      bgImages,
    };
  }
}
