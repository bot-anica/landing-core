import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useHero } from '../../../hooks/useHero';
import { useHeroAnimations } from '../../../hooks/useHeroAnimations';
import HeroCTA from './HeroCTA';
import HeroBenefits from './HeroBenefits';
import { SectionBackground, SectionSplitter } from '../../common';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';
import HeroImageInText from './HeroImageInText';
import HeroRightImage from './HeroRightImage';

const Hero: FC = () => {
  const { title, subtitle, benefits, cta, images, bgImages } = useHero();
  const { containerVariants, itemVariants } = useHeroAnimations();

  return (
    <section className={`bg-white relative min-h-screen flex items-center justify-center overflow-hidden pt-[56px] lg:pt-[72px]`}>
      <SectionBackground bgImages={bgImages} />
      <SectionSplitter top={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroBenefits benefits={benefits} itemVariants={itemVariants} />
            <div className="grid gap-12 mb-12 lg:mt-4 lg:mb-4">
              <HeroTitle title={title} itemVariants={itemVariants} />
              <HeroImageInText images={images.imagesInText} />
            </div>

            <div>
              <HeroSubtitle subtitle={subtitle} itemVariants={itemVariants} />
              <HeroCTA cta={cta} itemVariants={itemVariants} />
            </div>
          </motion.div>
        </div>
        <HeroRightImage images={images.rightImages} />
      </div>
    </section>
  );
};

export default memo(Hero);