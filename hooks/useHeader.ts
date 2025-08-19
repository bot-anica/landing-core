import { useMemo } from 'react';
import { HeaderService } from '../services/HeaderService';

export const useHeader = () => {
  const { ctaButtons, navigationLinks } = useMemo(() => {
    return HeaderService.getData();
  }, []);

  return { ctaButtons, navigationLinks };
};
