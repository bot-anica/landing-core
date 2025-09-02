import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeroService } from '../services/HeroService';
import { HeroData } from '../types/sections';

export const useHero = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      HeroService.getData(courseUrlParam).then(setHeroData);
    }
  }, [courseUrlParam]);

  return {
    title: heroData?.title,
    subtitle: heroData?.subtitle,
    benefits: heroData?.benefits,
    cta: heroData?.cta,
    images: heroData?.images,
    bgImages: heroData?.bgImages
  };
};