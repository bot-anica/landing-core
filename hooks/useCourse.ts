import { useState, useEffect } from 'react';
import { CourseService } from '../services/CourseService';
import { Course } from '../types/sections';

export const useCourse = (urlParam: string | undefined) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!urlParam) {
        setError('Course URL parameter is not provided');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const courseData = await CourseService.getCourseByUrlParam(urlParam);
        if (courseData) {
          setCourse(courseData);
        } else {
          throw new Error('Course not found');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [urlParam]);

  return {
    course,
    isLoading,
    error,
    urlParam,
  };
};