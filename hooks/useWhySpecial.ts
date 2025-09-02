import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WhySpecialService } from '../services/WhySpecialService';
import { WhySpecialSectionData } from '../types/sections';

export const useWhySpecial = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [whySpecialData, setWhySpecialData] = useState<WhySpecialSectionData | null>(null);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    if (courseUrlParam) {
      WhySpecialService.getData(courseUrlParam).then(setWhySpecialData);
    }
  }, [courseUrlParam]);

  const setActivePointIndex = useCallback(async (index: number) => {
    if (courseUrlParam) {
      const isValid = await WhySpecialService.validateWhySpecialPointIndex(courseUrlParam, index);
      if (isValid) {
        setActivePoint(index);
      }
    }
  }, [courseUrlParam]);

  return {
    header: whySpecialData?.header,
    whySpecialPoints: whySpecialData?.whySpecialPoints,
    stats: whySpecialData?.stats,
    bgImages: whySpecialData?.bgImages,
    activePoint,
    setActivePointIndex,
  };
};