import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CourseProgramService } from '../services/CourseProgramService';
import { CourseProgramData } from '../types/sections';

export const useCourseProgram = () => {
  const swiperRef = useRef<any>(null);
  const { courseUrlParam } = useParams<{ courseUrlParam: string }>();
  const [courseProgramData, setCourseProgramData] = useState<CourseProgramData | null>(null);

  useEffect(() => {
    if (courseUrlParam) {
      CourseProgramService.getData(courseUrlParam).then(setCourseProgramData);
    }
  }, [courseUrlParam]);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  const setSwiperRef = (swiper: any) => {
    swiperRef.current = swiper;
  };

  return {
    header: courseProgramData?.header,
    lessons: courseProgramData?.lessons,
    breakpoints: courseProgramData?.breakpoints,
    bgImages: courseProgramData?.bgImages,
    swiperRef,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  };
};