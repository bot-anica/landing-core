import type { FC } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Testimonial } from '../../../../types/sections';

interface SuccessStoriesTestimonialsProps {
  testimonials: Testimonial[];
  isIntersecting: boolean;
  testimonialVariants: Variants;
}

const renderIcon = (icon: any, color: string) => {
  const IconComponent = icon
  return <IconComponent className="w-10 h-10" style={{ color: color }} />
};

export const SuccessStoriesTestimonials: FC<SuccessStoriesTestimonialsProps> = ({
  testimonials,
  isIntersecting,
  testimonialVariants
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={testimonialVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300 group"
        >
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
              {renderIcon(testimonial.icon, testimonial.iconColor)}
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors duration-300">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-sm">
                {testimonial.role}
              </p>
            </div>
          </div>
          
          <blockquote className="text-gray-300 mb-4 italic leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-lg p-3 border-l-4 border-yellow-400">
            <p className="text-yellow-400 font-medium text-sm">
              ✨ {testimonial.achievement}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};