import { useMemo } from 'react';
import { FooterService } from '../services/FooterService';

export const useFooter = () => {
  const { courseDescription, navigationLinks } = useMemo(() => {
    return FooterService.getData();
  }, []);

  return { courseDescription, navigationLinks };
};
