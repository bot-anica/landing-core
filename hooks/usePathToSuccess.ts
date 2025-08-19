import { useMemo } from 'react';
import { PathToSuccessService } from '../services/PathToSuccessService';

export const usePathToSuccess = () => {
  const { header, steps, images, bgImages } = useMemo(() => PathToSuccessService.getData(), []);

  return { header, steps, images, bgImages };
};