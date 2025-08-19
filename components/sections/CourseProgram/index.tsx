import type { FC } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCourseProgram } from '../../../hooks/useCourseProgram';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { SectionBackground, SectionHeader, SectionSplitter } from '../../common';
import CourseProgramSwiper from './CourseProgramSwiper';

const CourseProgram: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const {
    header,
    lessons,
    breakpoints,
    bgImages,
    handlePrevSlide,
    handleNextSlide,
    setSwiperRef,
  } = useCourseProgram();

  return (
    <section ref={ref as any} id="course" className="bg-white py-24 lg:py-28 xl:py-32 relative w-full overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <SectionSplitter bottom={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation */}
        <SectionHeader
          title={header.title}
          subtitle={header.subtitle}
          isIntersecting={isIntersecting}
          position="left"
          className="max-w-md lg:max-w-lg xl:max-w-xl !mb-4 !md:mb-4"
        />

        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-4 mb-4 md:mb-6">
          <div className="inline-flex items-center px-3 py-1 bg-primary-blue/5 rounded-full border border-primary-blue/20">
            <span className="text-xs md:text-sm md:font-medium text-primary-blue">
              Каждый урок заканчивается практическим результатом
            </span>
          </div>

          <div className="flex gap-3 md:gap-4">
            <button 
              onClick={handlePrevSlide}
              className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-primary-blue/30 flex items-center justify-center text-gray-600 hover:text-primary-pink transition-all duration-300 group"
            >
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button 
              onClick={handleNextSlide}
              className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border border-primary-blue/30 flex items-center justify-center text-gray-600 hover:text-primary-pink transition-all duration-300 group"
            >
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <CourseProgramSwiper
          lessons={lessons}
          breakpoints={breakpoints}
          isIntersecting={isIntersecting as boolean}
          setSwiperRef={setSwiperRef}
        />
      </div>
    </section>
  );
};

export default CourseProgram;