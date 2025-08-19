import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProblemSolutionItem as ProblemSolutionItemType } from '../../../types/sections';

interface ProblemSolutionVerticalProps {
  items: ProblemSolutionItemType[];
  isIntersecting: boolean;
  itemVariants: Variants;
}

const Divider = () => {
  return (
    <div className="w-30 h-px bg-gray-300 mt-5" />
  )
}

const ProblemSolutionVertical: FC<ProblemSolutionVerticalProps> = ({
  items,
  isIntersecting,
  itemVariants
}) => {
  return (
    <div className="mb-8">
      <div className="space-y-6">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <motion.div
              key={index}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              variants={itemVariants}
              custom={index}
              className="flex flex-col items-center space-y-1"
            >
              {/* Problem block */}
              <div className="w-full max-w-xs">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-blue/5 border border-primary-blue/30">
                  <IconComponent className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="line-through text-primary-blue/70 font-medium text-sm flex-1">
                    {item.problem}
                  </span>
                </div>
              </div>
              
              {/* Arrow connector */}
              {/* <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-pink rounded-full"></div>
                </div>
                <ChevronDown className="w-4 h-4 text-primary-pink mt-1" />
                <ChevronDown className="w-4 h-4 text-primary-pink mt-1" />
                <ChevronDown className="w-4 h-4 text-primary-pink mt-1" />
                <ChevronDown className="w-4 h-4 text-primary-pink mt-1" />
                <ChevronDown className="w-4 h-4 text-primary-pink mt-1" />
              </div> */}

              {/* Solution block */}
              <div className="w-full max-w-xs">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-pink/5 border border-primary-pink/20">
                  <IconComponent className="w-4 h-4 text-primary-pink/60 flex-shrink-0" />
                  <span className="font-medium text-primary-dark text-sm flex-1">
                    {item.solution}
                  </span>
                </div>
              </div>

              {index < items.length - 1 && <Divider />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemSolutionVertical;