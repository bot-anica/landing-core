import { Variants } from 'framer-motion';

// Базовые варианты анимаций
export const animationVariants = {
  // Появление снизу
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  
  // Появление слева
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  
  // Появление справа
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  
  // Масштабирование
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  
  // Появление с задержкой для списков
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  
  // Элемент в списке
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
} as const;

// Настройки анимаций
export const animationConfig = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    verySlow: 1.0
  },
  
  easing: {
    smooth: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275]
  },
  
  delay: {
    none: 0,
    small: 0.1,
    medium: 0.2,
    large: 0.5
  }
} as const;

// Hover анимации
export const hoverVariants = {
  scale: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  
  lift: {
    y: -5,
    transition: { duration: 0.2 }
  },
  
  glow: {
    boxShadow: '0 0 20px rgba(223, 95, 255, 0.3)',
    transition: { duration: 0.2 }
  }
} as const;

// Типы
export type AnimationVariant = keyof typeof animationVariants;
export type AnimationDuration = keyof typeof animationConfig.duration;
export type AnimationEasing = keyof typeof animationConfig.easing;
export type AnimationDelay = keyof typeof animationConfig.delay;
export type HoverVariant = keyof typeof hoverVariants; 