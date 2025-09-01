import { useState, useEffect } from 'react';
import { CourseService } from '../services/CourseService';
import { Course } from '../types/sections';

export const useCourse = () => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const courseData = await CourseService.getCourseByUrlParam(import.meta.env.VITE_COURSE_URL_PARAM);
        setCourse(courseData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, []);

  return {
    course,
    loading,
  };
};