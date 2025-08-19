import { useMemo } from 'react';
import { SuccessStoriesService } from '../services/SuccessStoriesService';

export const useSuccessStories = () => {
  const { header, stats, testimonials, ctaBlock, bgImages } = useMemo(() => SuccessStoriesService.getData(), []);

  return { header, stats, testimonials, ctaBlock, bgImages };
};