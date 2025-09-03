import type { FC } from 'react';

const CourseProgramSkeleton: FC = () => {
  return (
    <div className="bg-white py-24 lg:py-28 xl:py-32 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skeleton for Header */}
        <div className="max-w-md lg:max-w-lg xl:max-w-xl mb-4 md:mb-4 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* Skeleton for Badge and Buttons */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 md:gap-4 mb-4 md:mb-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-full w-72"></div>
          <div className="flex gap-3 md:gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Skeleton for Swiper */}
        <div className="flex space-x-6 animate-pulse">
          <div className="w-1/3 h-64 bg-gray-200 rounded-lg"></div>
          <div className="w-1/3 h-64 bg-gray-300 rounded-lg"></div>
          <div className="w-1/3 h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgramSkeleton;
