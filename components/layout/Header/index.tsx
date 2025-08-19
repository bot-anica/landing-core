import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import HeaderMobileMenu from './HeaderMobileMenu';
import { cn } from '../../../utils/cn';
import HeaderLogoLink from './HeaderLogoLink';
import HeaderCTAButtons from './HeaderCTAButtons';
import { useHeader } from '../../../hooks/useHeader';
import HeaderNavigation from './HeaderNavigation';
import HeaderMobileMenuButton from './HeaderMobileMenuButton';

const Header: FC = () => {
  const { ctaButtons, navigationLinks } = useHeader();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled || isOpen 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-[56px] lg:h-[72px] py-1 sm:py-2 lg:py-4">
          <HeaderLogoLink />
          
          {/* Desktop Navigation */}
          <HeaderNavigation links={navigationLinks} />
          
          {/* CTA Button */}
          <HeaderCTAButtons ctaButtons={ctaButtons} />
          
          {/* Mobile menu button */}
          <HeaderMobileMenuButton isOpen={isOpen} onClick={handleClick} />
        </div>
        
        {/* Mobile Navigation */}
        <HeaderMobileMenu links={navigationLinks} ctaButtons={ctaButtons} isOpen={isOpen} onClose={handleClose} />
      </div>
    </motion.header>
  );
};

export default Header;