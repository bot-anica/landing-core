import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProblemSolutionService } from '../services/ProblemSolutionService';
import { ProblemSolutionData } from '../types/sections';

export const useProblemSolution = () => {
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [problemSolutionData, setProblemSolutionData] = useState<ProblemSolutionData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      ProblemSolutionService.getData(courseUrlParam).then(setProblemSolutionData);
    }
  }, [courseUrlParam]);

  return {
    header: problemSolutionData?.header,
    items: problemSolutionData?.items,
    ctaBlock: problemSolutionData?.ctaBlock,
    bgImages: problemSolutionData?.bgImages
  };
};