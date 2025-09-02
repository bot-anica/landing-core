import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SuccessStoriesService } from '../services/SuccessStoriesService';
import { SuccessStoriesData } from '../types/sections';

export const useSuccessStories = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [successStoriesData, setSuccessStoriesData] = useState<SuccessStoriesData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      SuccessStoriesService.getData(courseUrlParam).then(setSuccessStoriesData);
    }
  }, [courseUrlParam]);

  return {
    header: successStoriesData?.header,
    stats: successStoriesData?.stats,
    testimonials: successStoriesData?.testimonials,
    ctaBlock: successStoriesData?.ctaBlock,
    bgImages: successStoriesData?.bgImages
  };
};