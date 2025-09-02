import { useMemo } from 'react';
import { useCourse } from './useCourse';
import { SectionHeadersService } from '../services/SectionHeadersService';
import { SectionBGImagesService } from '../services/SectionBGImagesService';

export const usePricingPlans = () => {
  const { course, loading } = useCourse();

  const { header, bgImages } = useMemo(() => {
    const header = SectionHeadersService.getHeader('pricingPlans');
    const bgImages = SectionBGImagesService.getBGImages('pricingPlans');
    return { header, bgImages };
  }, []);

  return {
    header,
    plans: course?.tariffs || [],
    bgImages,
    loading,
  };
};