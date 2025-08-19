import { useRef, useMemo } from 'react';
import { CourseProgramService } from '../services/CourseProgramService';

export const useCourseProgram = () => {
  const swiperRef = useRef<any>(null);

  const { header, lessons, breakpoints, bgImages } = useMemo(() => {
    return CourseProgramService.getData();
  }, []);

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
    header,
    lessons,
    breakpoints,
    bgImages,
    swiperRef,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  };
};