import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { useFeatures } from '../../../hooks/useFeatures';
import FeaturesBackground from './FeaturesBackground';
import FeaturesGrid from './FeaturesGrid';
import { SectionBackground, SectionHeader } from '../../common';

const Features: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { header, features, bgImages } = useFeatures();

  return (
    <section ref={ref} className="relative py-24 lg:py-28 xl:py-32">
      <SectionBackground bgImages={bgImages} lazy />
      
      <FeaturesBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <FeaturesGrid 
          features={features}
          isIntersecting={isIntersecting}
        />
      </div>
    </section>
  );
};

export default Features;