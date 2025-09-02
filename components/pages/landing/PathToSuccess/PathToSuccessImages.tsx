import type { FC } from 'react';
import { motion } from 'framer-motion';
import { PathToSuccessImages as PathToSuccessImagesType } from '../../../../types/sections';

interface PathToSuccessImagesProps {
  images: PathToSuccessImagesType;
  isIntersecting: boolean;
}

const PathToSuccessImages: FC<PathToSuccessImagesProps> = ({
  images,
  isIntersecting
}) => {
  return (
    <div className="mt-20 relative">
      {/* Dashboard Image */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src={images.renderDashboard}
          alt="Dashboard интерфейс"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </motion.div>
      
      {/* Telegram Bot Image */}
      <motion.div
        className="absolute -bottom-10 -right-10 z-20 w-64 h-64"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <img
          src={images.telegramBot}
          alt="Telegram бот"
          className="w-full h-full object-cover rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default PathToSuccessImages;