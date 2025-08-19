import { useMemo } from 'react';
import { HeroService } from '../services/HeroService';

export const useHero = () => {
  const { data, bgImages } = useMemo(() => HeroService.getData(), []);

  return { data, bgImages };
};