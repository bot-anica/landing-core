import type { FC } from 'react';
import { motion } from 'framer-motion';
import PathToSuccessStep from './PathToSuccessStep';
import type { PathToSuccessStep as StepData } from '../../../../hooks/usePathToSuccess';

interface PathToSuccessGridProps {
  steps: StepData[];
  isIntersecting: boolean;
  getStepAnimation: (index: number) => any;
  containerAnimation: any;
}

const PathToSuccessGrid: FC<PathToSuccessGridProps> = ({
  steps,
  isIntersecting,
  getStepAnimation,
  containerAnimation
}) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 relative"
      initial={containerAnimation.initial}
      animate={isIntersecting ? containerAnimation.animate : containerAnimation.initial}
      transition={containerAnimation.transition}
    >
      {steps.map((step, index) => (
        <PathToSuccessStep
          key={step.id}
          step={step}
          index={index}
          isIntersecting={isIntersecting}
          animation={getStepAnimation(index)}
        />
      ))}
    </motion.div>
  );
};

export default PathToSuccessGrid;