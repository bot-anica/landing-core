import { useMemo } from 'react';
import { FeaturesService } from '../services/FeaturesService';

export const useFeatures = () => {
  const {header, features, bgImages} = useMemo(() => {
    return FeaturesService.getData();
  }, []);

  return {
    header,
    features,
    bgImages
  };
};
