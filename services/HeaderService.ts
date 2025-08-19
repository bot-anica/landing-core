import { HEADER_NAVIAGTION_LINKS, HEADER_CTA_BUTTONS } from '../constants/header';
import { CTAItem, HeaderData, LinkItem } from '../types/sections';

export class HeaderService {
  static getNavigationLinks(): LinkItem[] {
    return HEADER_NAVIAGTION_LINKS;
  }

  static getCTAButtons(): CTAItem[] {
    return HEADER_CTA_BUTTONS;
  }

  static getData(): HeaderData {
    const navigationLinks = HeaderService.getNavigationLinks();
    const ctaButtons = HeaderService.getCTAButtons();

    return { ctaButtons, navigationLinks }
  }
} 