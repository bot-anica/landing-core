import { useMemo } from 'react';
import { PricingService } from '../services/PricingService';

export const usePricingPlans = () => {
  const {header, plans, bgImages} = useMemo(() => {
    return PricingService.getData();
  }, []);

  return {
    header,
    plans,
    bgImages
  };
};