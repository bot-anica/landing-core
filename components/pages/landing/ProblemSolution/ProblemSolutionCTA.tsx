import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { ProblemSolutionCTABlock } from '../../../../types/sections';
import { Button } from '../../../common';
import { ButtonIconPosition } from '../../../../types/common';

interface ProblemSolutionCTAProps {
  data: ProblemSolutionCTABlock;
  isIntersecting: boolean;
  ctaVariants: Variants;
}

const renderButtonIcon = (icon: any) => {
  const IconComponent = icon
  return <IconComponent className="w-4 h-4" />
};

const ProblemSolutionCTA: FC<ProblemSolutionCTAProps> = ({
  data,
  isIntersecting,
  ctaVariants
}) => {
  return (
    <motion.div
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={ctaVariants}
      className="text-center"
    >
      <div className="bg-gradient-to-r from-primary-pink to-primary-blue rounded-xl p-3 pb-4 md:p-4 lg:p-5 xl:p-6 text-white">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Lightbulb className="w-6 h-6" />
          <h3 className="text-lg font-bold">{data.title}</h3>
        </div>
        <p className="text-sm opacity-90 mb-3 md:mb-4">
          {data.subtitle}
        </p>
        <Button 
          variant={data.cta.buttonVariant}
          to={data.cta.link}
          size={data.cta.buttonSize}
          withoutBorder
        >
          {data.cta.buttonIcon && data.cta.buttonIconPosition === ButtonIconPosition.LEFT && renderButtonIcon(data.cta.buttonIcon)}
          <span>{data.cta.text}</span>
          {data.cta.buttonIcon && data.cta.buttonIconPosition === ButtonIconPosition.RIGHT && renderButtonIcon(data.cta.buttonIcon)}
        </Button>
      </div>
    </motion.div>
  );
};

export default ProblemSolutionCTA;