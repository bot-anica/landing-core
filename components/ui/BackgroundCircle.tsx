import { motion } from 'framer-motion';

const BackgroundCircle = ({
  position = 'top-left',
  size = 'medium',
  color = 'pink',
  opacity = 0.1,
  animation = 'float',
  delay = 0,
  className = ''
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-4 left-4 sm:top-10 sm:left-10';
      case 'top-right': return 'top-4 right-4 sm:top-10 sm:right-10';
      case 'top-center': return 'top-8 left-1/2 transform -translate-x-1/2 sm:top-20';
      case 'bottom-left': return 'bottom-4 left-4 sm:bottom-10 sm:left-10';
      case 'bottom-right': return 'bottom-4 right-4 sm:bottom-10 sm:right-10';
      case 'bottom-center': return 'bottom-8 left-1/2 transform -translate-x-1/2 sm:bottom-20';
      case 'center-left': return 'top-1/2 left-4 transform -translate-y-1/2 sm:left-10';
      case 'center-right': return 'top-1/2 right-4 transform -translate-y-1/2 sm:right-10';
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default: return 'top-4 left-4 sm:top-10 sm:left-10';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'w-16 h-16';
      case 'medium': return 'w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32';
      case 'large': return 'w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64';
      case 'xl': return 'w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96';
      default: return 'w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32';
    }
  };

  const getColorStyle = () => {
    const colors = {
      pink: `rgba(236, 72, 153, ${opacity})`,
      purple: `rgba(168, 85, 247, ${opacity})`,
      blue: `rgba(59, 130, 246, ${opacity})`,
      pinkPurple: `rgba(236, 72, 153, ${opacity})`,
      purplePink: `rgba(168, 85, 247, ${opacity})`,
      white: `rgba(255, 255, 255, ${opacity})`,
      gray: `rgba(156, 163, 175, ${opacity})`
    };
    return colors[color] || colors.pink;
  };

  const getAnimation = () => {
    switch (animation) {
      case 'float':
        return {
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        };
      case 'pulse':
        return {
          scale: [1, 1.3, 1],
          opacity: [opacity, opacity * 1.5, opacity]
        };
      case 'bounce':
        return {
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        };
      case 'rotate':
        return {
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        };
      case 'fade':
        return {
          opacity: [opacity * 0.3, opacity, opacity * 0.3]
        };
      default:
        return {
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        };
    }
  };

  const getDuration = () => {
    switch (animation) {
      case 'pulse': return 8;
      case 'bounce': return 4;
      case 'rotate': return 10;
      case 'fade': return 6;
      default: return 6;
    }
  };

  return (
    <motion.div
      className={`absolute ${getPositionClasses()} ${getSizeClasses()} rounded-full ${className}`}
      style={{
        backgroundColor: getColorStyle()
      }}
      animate={getAnimation()}
      transition={{
        duration: getDuration(),
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  );
};

export default BackgroundCircle; 