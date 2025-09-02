import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProblemSolutionItem as ProblemSolutionItemType } from '../../../../types/sections';
import ProblemSolutionVertical from './ProblemSolutionVertical';
// import ProblemSolutionCarousel from './ProblemSolutionCarousel'; // Альтернативный вариант

interface ProblemSolutionItemsProps {
  items: ProblemSolutionItemType[];
  isIntersecting: boolean;
  itemVariants: Variants;
}

const ProblemSolutionItems: FC<ProblemSolutionItemsProps> = ({
  items,
  isIntersecting,
  itemVariants
}) => {
  return (
    <div className="mb-8 lg:mb-12 xl:mb-16">
      {/* Mobile layout (< sm) - Vertical */}
      <div className="block sm:hidden">
        <ProblemSolutionVertical 
          items={items}
          isIntersecting={isIntersecting}
          itemVariants={itemVariants}
        />
        {/* Для переключения на карусель раскомментируйте строку ниже и закомментируйте ProblemSolutionVertical */}
        {/* <ProblemSolutionCarousel 
          items={items}
          isIntersecting={isIntersecting}
          itemVariants={itemVariants}
        /> */}
      </div>

      {/* Desktop layout (sm+) - Horizontal */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Background accent line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>
          
          <div className="space-y-4 lg:space-y-6 xl:space-y-8">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={isIntersecting ? "visible" : "hidden"}
                  variants={itemVariants}
                  custom={index}
                  className="flex items-center gap-4 md:gap-6 lg:gap-8"
                >
                  {/* Problem side */}
                  <div className="flex-1 text-right">
                    <div className="inline-flex items-center gap-3 px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-xl bg-primary-blue/5 border border-primary-blue/30 justify-start">
                      <span className="line-through text-primary-blue/70 font-medium text-xs md:text-sm lg:text-base xl:text-lg">{item.problem}</span>
                      <IconComponent className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Center connector */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-primary-pink rounded-full"></div>
                    </div>
                  </div>

                  {/* Solution side */}
                  <div className="flex-1 text-left">
                    <div className="inline-flex items-center gap-3 px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-xl bg-primary-pink/5 border border-primary-pink/20 justify-end">
                      <IconComponent className="w-5 h-5 text-primary-pink/60" />
                      <span className="font-normal md:font-medium lg:font-medium text-primary-dark text-xs md:text-sm lg:text-base xl:text-lg">{item.solution}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionItems;