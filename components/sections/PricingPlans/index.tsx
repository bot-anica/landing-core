import { FC, useMemo } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { usePricingPlans } from '../../../hooks/usePricingPlans';
import { BackgroundElements, SectionBackground, SectionHeader } from '../../common';
import PricingPlansGrid from './PricingPlansGrid';
import PricingPlansPayment from './PricingPlansPayment';
import { Currency } from '../../../types/sections';

const PricingPlans: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { header, plans, bgImages, loading } = usePricingPlans();

  const availableCurrencies = useMemo((): Currency[] => {
    if (!plans || plans.length === 0) {
      return [];
    }
    return plans[0].prices.map(price => price.currency);
  }, [plans]);

  return (
    <section ref={ref as any} id="pricing" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        {/* Pricing Cards */}
        {loading ? (
          <div className="text-center text-white text-2xl">Загрузка...</div>
        ) : (
          <PricingPlansGrid plans={plans} isIntersecting={isIntersecting as boolean} />
        )}

        {/* Payment Options */}
        <PricingPlansPayment 
          availableCurrencies={availableCurrencies}
          isIntersecting={isIntersecting as boolean}
        />
      </div>
    </section>
  );
};

export default PricingPlans;