import { motion } from 'framer-motion';
import { Card } from '../../../common';
import { FC, useMemo } from 'react';
import { Currency, PartialSectionBGImagesProps, Tariff } from '../../../../types/sections';
import CardHeader from './PricingPlanCard/CardHeader';
import CardPrice from './PricingPlanCard/CardPrice';
import CardFeatures from './PricingPlanCard/CardFeatures';
import CardButton from './PricingPlanCard/CardButton';
import CardDescription from './PricingPlanCard/CardDescription';

interface PricingPlanCardProps {
  plan: Tariff;
  bgImages: PartialSectionBGImagesProps | null;
  isIntersecting: boolean;
  index: number;
  selectedCurrency: Currency;
}

const PricingPlanCard: FC<PricingPlanCardProps> = ({ plan, bgImages, isIntersecting, index, selectedCurrency }) => {
  const price = useMemo(() => {
    return plan.prices.find(p => p.currency.code === selectedCurrency.code);
  }, [plan.prices, selectedCurrency]);

  if (!price) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative h-full flex flex-col"
    >
      <Card
        variant={plan.is_popular ? "popular" : "default"}
        padding="lg"
        className="h-full flex flex-col"
        childrenWrapperClassName="h-full flex flex-col"
        bgImages={bgImages || undefined}
      >
        <div className="flex-1">
          <CardHeader name={plan.name} />
          <CardPrice price={price} />
          <CardDescription description={plan.description} />
          <CardFeatures features={plan.features} isIntersecting={isIntersecting} cardIndex={index} />
        </div>
        <div className="mt-auto">
          <CardButton isPopular={plan.is_popular} plan={plan} />
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingPlanCard;
