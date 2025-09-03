import { PricingSectionData } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static async getData(courseUrlParam: string): Promise<PricingSectionData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'pricingPlans');
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'pricingPlans');

    return {
      header,
      bgImages
    }
  }
}
