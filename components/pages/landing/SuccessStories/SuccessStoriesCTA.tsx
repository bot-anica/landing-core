import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { SuccessStoriesCTABlock } from '../../../../types/sections';

interface SuccessStoriesCTAProps {
  ctaBlock: SuccessStoriesCTABlock;
  isIntersecting: boolean;
  ctaVariants: Variants;
}

const renderIcon = (icon: any, color: string) => {
  const IconComponent = icon
  return <IconComponent className="w-16 h-16" style={{ color: color }} />
};

export const SuccessStoriesCTA: FC<SuccessStoriesCTAProps> = ({
  ctaBlock,
  isIntersecting,
  ctaVariants
}) => {
  return (
    <motion.div
      variants={ctaVariants}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      className="text-center bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-2xl p-8 border border-yellow-400/20"
    >
      <div className="text-4xl mb-4 flex justify-center">
        {renderIcon(ctaBlock.icon, ctaBlock.iconColor)}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {ctaBlock.text}
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        {ctaBlock.description}
      </p>
    </motion.div>
  );
};