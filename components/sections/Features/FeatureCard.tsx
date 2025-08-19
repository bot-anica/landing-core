import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Feature } from '../../../types/sections';

interface FeatureCardProps {
  index: number;
  feature: Feature;
  isIntersecting: boolean;
}

const FeatureCard: FC<FeatureCardProps> = ({ 
  index,
  feature, 
  isIntersecting
}) => {
  const getIcon = () => {
    const IconComponent = feature.icon
    const iconClass = `w-15 h-15 ${feature.iconColor}`;
    
    return <IconComponent className={iconClass} />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{y: -8, transition: { duration: 0.3 }}}
      className="group text-center"
    >
      <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${feature.iconColor}33 rounded-2xl flex items-center justify-center`}>
            {getIcon()}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            {feature.subtitle}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;