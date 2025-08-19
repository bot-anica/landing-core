import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, Heart, Circle, Cloud, Moon, Sun, Rocket } from 'lucide-react';

const BackgroundIcon = ({
  icon = 'sparkles',
  position = 'top-left',
  size = 30,
  color = 'primary-pink',
  opacity = 0.2,
  animation = 'float',
  delay = 0,
  className = ''
}) => {
  const getIconComponent = () => {
    const icons = {
      sparkles: Sparkles,
      star: Star,
      zap: Zap,
      heart: Heart,
      rocket: Rocket,
      circle: Circle,
      cloud: Cloud,
      moon: Moon,
      sun: Sun
    };
    return icons[icon] || Sparkles;
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-8 left-4 sm:top-20 sm:left-10';
      case 'top-right': return 'top-8 right-4 sm:top-20 sm:right-10';
      case 'top-center': return 'top-16 left-1/2 transform -translate-x-1/2 sm:top-40';
      case 'bottom-left': return 'bottom-8 left-4 sm:bottom-20 sm:left-10';
      case 'bottom-right': return 'bottom-8 right-4 sm:bottom-20 sm:right-10';
      case 'bottom-center': return 'bottom-16 left-1/2 transform -translate-x-1/2 sm:bottom-40';
      case 'center-left': return 'top-1/2 left-4 transform -translate-y-1/2 sm:left-20';
      case 'center-right': return 'top-1/2 right-4 transform -translate-y-1/2 sm:right-20';
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default: return 'top-8 left-4 sm:top-20 sm:left-10';
    }
  };

  const getColorClass = () => {
    const colors = {
      'primary-pink': 'text-primary-pink',
      'primary-blue': 'text-primary-blue',
      'gray': 'text-gray-400',
      'white': 'text-white',
      'purple': 'text-purple-500',
      'blue': 'text-blue-500'
    };
    return colors[color] || 'text-primary-pink';
  };

  const getResponsiveSize = () => {
    // Адаптивный размер иконки
    if (size <= 20) return { mobile: 16, tablet: 20, desktop: size };
    if (size <= 30) return { mobile: 20, tablet: 25, desktop: size };
    if (size <= 40) return { mobile: 25, tablet: 30, desktop: size };
    return { mobile: 30, tablet: 35, desktop: size };
  };

  const getAnimation = () => {
    switch (animation) {
      case 'float':
        return {
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        };
      case 'spin':
        return {
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        };
      case 'bounce':
        return {
          y: [0, -30, 0],
          scale: [1, 1.3, 1]
        };
      case 'wave':
        return {
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1]
        };
      case 'pulse':
        return {
          scale: [1, 1.2, 1],
          opacity: [opacity, opacity * 1.5, opacity]
        };
      default:
        return {
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.1, 1]
        };
    }
  };

  const getDuration = () => {
    switch (animation) {
      case 'spin': return 8;
      case 'bounce': return 4;
      case 'wave': return 6;
      case 'pulse': return 8;
      default: return 6;
    }
  };

  const IconComponent = getIconComponent();
  const responsiveSize = getResponsiveSize();

  return (
    <motion.div
      className={`absolute ${getPositionClasses()} ${getColorClass()} ${className}`}
      style={{ opacity }}
      animate={getAnimation()}
      transition={{
        duration: getDuration(),
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <div className="hidden sm:block lg:hidden">
        <IconComponent size={responsiveSize.tablet} />
      </div>
      <div className="block sm:hidden">
        <IconComponent size={responsiveSize.mobile} />
      </div>
      <div className="hidden lg:block">
        <IconComponent size={responsiveSize.desktop} />
      </div>
    </motion.div>
  );
};

export default BackgroundIcon; 