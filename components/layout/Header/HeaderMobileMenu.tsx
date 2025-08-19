import { motion, AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';
import { ButtonSize, ButtonVariant } from '../../../types/common';
import { LinkItem, CTAItem } from '../../../types/sections';
import HeaderCTAButtonsMobile from './HeaderCTAButtonsMobile';
import HeaderNavigationMobile from './HeaderNavigationMobile';

export interface HeaderMobileMenuProps {
  links: LinkItem[];
  ctaButtons: CTAItem[];
  isOpen: boolean;
  onClose: () => void;
}

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({ links, ctaButtons, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
          animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <HeaderNavigationMobile links={links} onClose={onClose} />
          <HeaderCTAButtonsMobile ctaButtons={ctaButtons} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobileMenu;