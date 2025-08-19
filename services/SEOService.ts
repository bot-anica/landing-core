import { AVAILABLE_PAGES, PageSEOCongfig, SEOConfig, SEOData } from '../types/sections';
import { DEFAULT_SEO_CONFIG, PAGE_SEO_CONFIGS } from '../constants/constants';

export class SEOService {
  static getDefaultSEOConfig(): SEOConfig {
    return DEFAULT_SEO_CONFIG;
  }

  static getPageSEOConfigs(): Record<AVAILABLE_PAGES, PageSEOCongfig> {
    return PAGE_SEO_CONFIGS;
  }

  static getData(): SEOData {
    const defaultSEOConfig = SEOService.getDefaultSEOConfig();
    const pageSEOConfigs = SEOService.getPageSEOConfigs();

    return { defaultSEOConfig, pageSEOConfigs }
  }
} 