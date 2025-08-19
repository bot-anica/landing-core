import type { FC } from 'react';
import FeatureCard from './FeatureCard';
import { Feature } from '../../../types/sections';

interface FeaturesGridProps {
  features: Feature[];
  isIntersecting: boolean;
}

const FeaturesGrid: FC<FeaturesGridProps> = ({ 
  features, 
  isIntersecting
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          index={index}
          isIntersecting={isIntersecting}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;