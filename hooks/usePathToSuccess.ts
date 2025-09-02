import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PathToSuccessService } from '../services/PathToSuccessService';
import { PathToSuccessData } from '../types/sections';

export const usePathToSuccess = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [pathToSuccessData, setPathToSuccessData] = useState<PathToSuccessData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      PathToSuccessService.getData(courseUrlParam).then(setPathToSuccessData);
    }
  }, [courseUrlParam]);

  return {
    header: pathToSuccessData?.header,
    steps: pathToSuccessData?.steps,
    images: pathToSuccessData?.images,
    bgImages: pathToSuccessData?.bgImages
  };
};