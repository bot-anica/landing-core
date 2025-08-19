import { useState, useCallback, useMemo } from 'react';
import { WhySpecialService } from '../services/WhySpecialService';

export const useWhySpecial = () => {
  const [activePoint, setActivePoint] = useState(0);
  
  // Получаем данные из сервиса
  const { header, whySpecialPoints, stats, bgImages } = useMemo(() => {
    return WhySpecialService.getData();
  }, []);

  const setActivePointIndex = useCallback((index: number) => {
    if (WhySpecialService.validateWhySpecialPointIndex(index)) {
      setActivePoint(index);
    }
  }, []);

  return {
    header,
    whySpecialPoints,
    stats,
    bgImages,
    activePoint,
    setActivePointIndex,
  };
};