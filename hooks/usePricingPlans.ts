import { useMemo } from 'react';
import { useCourse } from './useCourse';
import { SectionHeadersService } from '../services/SectionHeadersService';
import { SectionBGImagesService } from '../services/SectionBGImagesService';

export const usePricingPlans = () => {
  const { course, loading } = useCourse();

  const { header, bgImages, pricingPlansPopularBgImages } = useMemo(() => {
    const header = SectionHeadersService.getHeader('pricingPlans');
    const bgImages = SectionBGImagesService.getBGImages('pricingPlans');
    const pricingPlansPopularBgImages = SectionBGImagesService.getBGImages('pricingPlansPopular');
    return { header, bgImages, pricingPlansPopularBgImages };
  }, []);

  return {
    header,
    plans: course?.tariffs || [],
    bgImages,
    pricingPlansPopularBgImages,
    loading,
  };
};