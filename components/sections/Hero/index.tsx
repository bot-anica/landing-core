import type { FC } from 'react';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { useHero } from '../../../hooks/useHero';
import { useHeroAnimations } from '../../../hooks/useHeroAnimations';
import HeroCTA from './HeroCTA';
import HeroBenefits from './HeroBenefits';
import { SectionBackground, SectionSplitter } from '../../common';
import HeroImageHorizontalSmall from '../../../assets/images/heroImage/HeroImageHorizontalSmall.png';
import HeroImageHorizontalMiddle from '../../../assets/images/heroImage/HeroImageHorizontalMiddle.png';
import HeroImageVerticalLarge from '../../../assets/images/heroImage/HeroImageVerticalLarge.png';
import HeroImageVerticalExtraLarge from '../../../assets/images/heroImage/HeroImageVerticalExtraLarge.png';
import HeroSubtitle from './HeroSubtitle';
import HeroTitle from './HeroTitle';

const Hero: FC = () => {
  const { data, bgImages } = useHero();
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
            <HeroBenefits benefits={data.benefits} itemVariants={itemVariants} />
            <div className="grid gap-12 md:gap-0 mb-12 lg:mt-4 lg:mb-4">
              <HeroTitle title={data.title} itemVariants={itemVariants} />
              <img src={HeroImageHorizontalSmall} alt="" className="block sm:hidden relative z-10" />
              <img src={HeroImageHorizontalMiddle} alt="" className="hidden sm:block md:hidden relative z-10 m-auto" />
            </div>

            <div>
              <HeroSubtitle subtitle={data.subtitle} itemVariants={itemVariants} />
              <HeroCTA cta={data.cta} itemVariants={itemVariants} />
            </div>
          </motion.div>
        </div>
        <img src={HeroImageVerticalLarge} alt="" className="hidden md:block lg:hidden relative z-10" />
        <img src={HeroImageVerticalExtraLarge} alt="" className="hidden lg:block relative z-10" />
      </div>
    </section>
  );
};

export default memo(Hero);