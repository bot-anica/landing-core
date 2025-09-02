import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FooterService } from '../services/FooterService';
import { FooterData } from '../types/sections';
import { COURSES } from '../../constants/courseRegistry';

export const useFooter = () => {
  const location = useLocation();
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const courseUrlParam = pathParts[0];

    const isValidCourse = COURSES.some(course => course.urlParam === courseUrlParam);

    if (isValidCourse) {
      FooterService.getData(courseUrlParam).then(setFooterData);
    } else {
      setFooterData(null);
    }
  }, [location.pathname]);

  return footerData;
};
