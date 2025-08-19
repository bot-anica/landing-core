import { FC } from "react";
import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderMobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HeaderMobileMenuButton: FC<HeaderMobileMenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 flex items-center justify-center w-10 h-10"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full h-full"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-full h-full"
          >
            <Menu size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default HeaderMobileMenuButton;
