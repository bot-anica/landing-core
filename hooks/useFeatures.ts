import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FeaturesService } from '../services/FeaturesService';
import { FeaturesSectionData } from '../types/sections';

export const useFeatures = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [featuresData, setFeaturesData] = useState<FeaturesSectionData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      FeaturesService.getData(courseUrlParam).then(setFeaturesData);
    }
  }, [courseUrlParam]);

  return {
    header: featuresData?.header,
    features: featuresData?.features,
    bgImages: featuresData?.bgImages
  };
};
