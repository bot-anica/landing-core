import { AVAILABLE_PAGES, PageSEOCongfig, SEOConfig, SEOData } from '../types/sections';

export class SEOService {
  static async getDefaultSEOConfig(courseUrlParam: string): Promise<SEOConfig> {
    const { DEFAULT_SEO_CONFIG } = await import(`../../constants/${courseUrlParam}/common`);
    return DEFAULT_SEO_CONFIG;
  }

  static async getPageSEOConfigs(courseUrlParam: string): Promise<Record<AVAILABLE_PAGES, PageSEOCongfig>> {
    const { PAGE_SEO_CONFIGS } = await import(`../../constants/${courseUrlParam}/common`);
    return PAGE_SEO_CONFIGS;
  }

  static async getData(courseUrlParam: string): Promise<SEOData> {
    const defaultSEOConfig = await SEOService.getDefaultSEOConfig(courseUrlParam);
    const pageSEOConfigs = await SEOService.getPageSEOConfigs(courseUrlParam);

    return { defaultSEOConfig, pageSEOConfigs }
  }
}
 