import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface FAQBannerProps {
  isIntersecting: boolean;
}

const FAQBanner: React.FC<FAQBannerProps> = ({ isIntersecting }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="bg-primary-blue/5 rounded-xl p-4 md:p-6 lg:p-8 text-center border border-primary-blue/30"
    >
      <div className="flex justify-center mb-2 md:mb-3 lg:mb-4">
        <HelpCircle className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-primary-pink" />
      </div>
      <h3 className="text-base md:text-xl font-semibold text-primary-dark mb-2 md:mb-3 lg:mb-4">
        Не нашли ответ?
      </h3>
      <p className="text-gray-600 text-sm md:text-base">
        Все материалы курса содержат детальные объяснения и пошаговые инструкции для самостоятельного изучения
      </p>
    </motion.div>
  );
};

export default FAQBanner;