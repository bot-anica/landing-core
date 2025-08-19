import { useMemo } from 'react';
import { HeroService } from '../services/HeroService';

export const useHero = () => {
  const { title, subtitle, benefits, cta, images, bgImages } = useMemo(() => HeroService.getData(), []);

  return { title, subtitle, benefits, cta, images, bgImages };
};