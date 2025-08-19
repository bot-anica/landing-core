import { useMemo } from 'react';

export const usePathToSuccessAnimations = () => {
  const animations = useMemo(() => ({
    header: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    step: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    container: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, delay: 0.2 }
    }
  }), []);

  const getStepAnimation = (index: number) => ({
    ...animations.step,
    transition: {
      ...animations.step.transition,
      delay: index * 0.1
    }
  });

  return {
    animations,
    getStepAnimation
  };
};