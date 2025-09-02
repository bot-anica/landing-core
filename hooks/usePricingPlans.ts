import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCourse } from './useCourse';
import { SectionHeadersService } from '../services/SectionHeadersService';
import { SectionBGImagesService } from '../services/SectionBGImagesService';
import { SectionHeaderProps, PartialSectionBGImagesProps } from '../types/sections';

export const usePricingPlans = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const { course, isLoading } = useCourse(courseUrlParam);
  const [header, setHeader] = useState<SectionHeaderProps | null>(null);
  const [bgImages, setBgImages] = useState<PartialSectionBGImagesProps | null>(null);
  const [popularPlanImages, setPopularPlanImages] = useState<PartialSectionBGImagesProps | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      SectionHeadersService.getHeader(courseUrlParam, 'pricingPlans').then(setHeader);
      SectionBGImagesService.getBGImages(courseUrlParam, 'pricingPlans').then(setBgImages);
      SectionBGImagesService.getBGImages(courseUrlParam, 'popularCard').then(setPopularPlanImages);
    }
  }, [courseUrlParam]);

  return {
    header,
    plans: course?.tariffs || [],
    bgImages,
    popularPlanImages,
    isLoading,
  };
};