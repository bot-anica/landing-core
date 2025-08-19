import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { FC } from 'react';
import { Lesson } from '../../../types/sections';

interface LessonCardProps {
  lesson: Lesson;
  IconComponent: React.ComponentType<any>;
  isEven: boolean;
  isIntersecting: boolean;
  index: number;
}

const LessonCard: FC<LessonCardProps> = ({ lesson, IconComponent, isEven, isIntersecting, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-300 hover:border-primary-pink/30 h-full flex flex-col overflow-hidden"
  >
    {/* Background Icon */}
    <div className={`absolute ${isEven ? '-bottom-4 -right-12' : '-top-4 -right-12'} opacity-5`}>
      <IconComponent className="w-48 h-48 text-primary-blue" />
    </div>
    {/* Header - номер и название на одной строке */}
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="w-10 h-10 bg-transparent border-2 border-primary-blue/30 rounded-full flex items-center justify-center text-primary-blue font-bold text-sm">
        {lesson.id}
      </div>
      <h3 className="text-md font-bold text-primary-dark leading-tight flex-1">
        {lesson.title}
      </h3>
    </div>
    {/* Content - flex-grow для заполнения пространства */}
    <div className="flex-grow flex flex-col relative z-10">
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
        {lesson.description}
      </p>
      {/* Result Badge - прижат к низу */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 border border-green-100 mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-green-600">
            <Check className="w-3 h-3 text-green-600" />
          </div>
          <span className="text-xs text-green-700 font-medium">
            {lesson.result}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default LessonCard;