import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { PathToSuccessStep as StepData } from '../../../../hooks/usePathToSuccess';

interface PathToSuccessStepProps {
  step: StepData;
  index: number;
  isIntersecting: boolean;
  animation: any;
}

const PathToSuccessStep: FC<PathToSuccessStepProps> = ({
  step,
  index,
  isIntersecting,
  animation
}) => {
  return (
    <motion.div
      className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={animation.initial}
      animate={isIntersecting ? animation.animate : animation.initial}
      transition={animation.transition}
    >
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {step.id}
      </div>
      
      {/* Step content */}
      <div className="pt-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </div>
      
      {/* Connecting line (except for last step) */}
      {index < 5 && (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
      )}
    </motion.div>
  );
};

export default PathToSuccessStep;