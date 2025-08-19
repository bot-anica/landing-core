import type { FC } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { usePathToSuccess } from '../../../hooks/usePathToSuccess';
import { usePathToSuccessAnimations } from '../../../hooks/usePathToSuccessAnimations';
import PathToSuccessBackground from './PathToSuccessBackground';
import PathToSuccessGrid from './PathToSuccessGrid';
import PathToSuccessImages from './PathToSuccessImages';
import { SectionBackground, SectionHeader } from '../../common';

const PathToSuccess: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean, boolean];
  const { header, steps, images, bgImages } = usePathToSuccess();
  const { animations, getStepAnimation } = usePathToSuccessAnimations();

  return (
    <section ref={ref} className="py-20 bg-gray-50 relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <PathToSuccessBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />
        
        <PathToSuccessGrid
          steps={steps}
          isIntersecting={isIntersecting}
          getStepAnimation={getStepAnimation}
          containerAnimation={animations.container}
        />
        
        <PathToSuccessImages
          images={images}
          isIntersecting={isIntersecting}
        />
      </div>
    </section>
  );
};

export default PathToSuccess;