import { useMemo } from 'react';

export const useFeaturesAnimations = () => {
  const animations = useMemo(() => ({
    header: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    featureCard: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    featureCardHover: {
      hover: {
        y: -8,
        transition: { duration: 0.3 }
      }
    }
  }), []);

  const getFeatureCardAnimation = (index: number) => ({
    ...animations.featureCard,
    transition: {
      ...animations.featureCard.transition,
      delay: index * 0.1
    }
  });

  return {
    animations,
    getFeatureCardAnimation
  };
};