import { FC } from 'react';

const CardFeaturesSkeleton: FC = () => {
  return (
    <ul className="space-y-2 xl:space-y-3 mb-6 xl:mb-8 flex-grow">
      {[...Array(5)].map((_, i) => (
        <li key={i} className="flex items-center gap-2 sm:gap-3">
          <div className="w-5 h-5 bg-primary-pink/10 rounded-full flex-shrink-0 mt-0.5"></div>
          <div className="h-5 bg-gray-100 rounded-md w-full"></div>
        </li>
      ))}
    </ul>
  );
};

export default CardFeaturesSkeleton;
