import React, { Suspense } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazyLoadSectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ children, fallback = <div style={{ minHeight: '100vh' }} /> }) => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {hasIntersected ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
};

export default LazyLoadSection;
