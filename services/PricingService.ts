import { PRICING_PLANS } from "../constants/pricingPlans";
import { PricingPlan, PricingSectionData } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";

export class PricingService {
  static getAllPlans(): PricingPlan[] {
    return PRICING_PLANS;
  }

  static getPlanById(id: string): PricingPlan | undefined {
    return PRICING_PLANS.find(plan => plan.id === id);
  }

  static getData(): PricingSectionData {
    const header = SectionHeadersService.getHeader('pricingPlans');
    const plans = PricingService.getAllPlans();
    const bgImages = SectionBGImagesService.getBGImages('pricingPlans');

    return {
      header,
      plans,
      bgImages
    }
  }
}