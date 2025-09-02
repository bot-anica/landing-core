import { FC } from 'react';

interface CardButtonSkeletonProps {
  isPopular?: boolean;
}

const CardButtonSkeleton: FC<CardButtonSkeletonProps> = ({ isPopular }) => {
  return (
    <div
      className={`h-11 md:h-13 lg:h-15 rounded-lg w-full ${
        isPopular
          ? "bg-gradient-to-r from-primary-pink/20 to-primary-blue/20"
          : "bg-gray-100"
      }`}
    ></div>
  );
};

export default CardButtonSkeleton;
