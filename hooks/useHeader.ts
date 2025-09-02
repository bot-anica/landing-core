import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderService } from '../services/HeaderService';
import { HeaderData } from '../types/sections';
import { COURSES } from '../../constants/courseRegistry';

export const useHeader = () => {
  const location = useLocation();
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const courseUrlParam = pathParts[0];

    const isValidCourse = COURSES.some(course => course.urlParam === courseUrlParam);

    if (isValidCourse) {
      HeaderService.getData(courseUrlParam).then(setHeaderData);
    } else {
      setHeaderData(null);
    }
  }, [location.pathname]);

  return headerData;
};
