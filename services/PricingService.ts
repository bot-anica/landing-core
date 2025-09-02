import { PricingPlan, PricingSectionData } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static async getAllPlans(courseUrlParam: string): Promise<PricingPlan[]> {
    const { PRICING_PLANS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/pricingPlans.ts`);
    return PRICING_PLANS;
  }

  static async getPlanById(courseUrlParam: string, id: string): Promise<PricingPlan | undefined> {
    const { PRICING_PLANS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/pricingPlans.ts`);
    return PRICING_PLANS.find(plan => plan.id === id);
  }

  static async getData(courseUrlParam: string): Promise<PricingSectionData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'pricingPlans');
    const plans = await PricingService.getAllPlans(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'pricingPlans');

    return {
      header,
      plans,
      bgImages
    }
  }
}
