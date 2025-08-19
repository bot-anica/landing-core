import { useIntersectionObserver } from './useIntersectionObserver';

export const useAnimatedSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return {
    ref,
    isIntersecting: isIntersecting as boolean,
  };
}; 