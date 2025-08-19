import type { FC } from 'react';
import { useAvailableCurrencies } from '../../../hooks/useAvailableCurrencies';
import { useGeolocation } from '../../../hooks/useGeolocation';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { usePricingPlans } from '../../../hooks/usePricingPlans';
import { BackgroundElements, SectionBackground, SectionHeader } from '../../common';
import PricingPlansGrid from './PricingPlansGrid';
import PricingPlansPayment from './PricingPlansPayment';

const PricingPlans: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { location } = useGeolocation();
  const availableCurrencies = useAvailableCurrencies(location);
  const { header, plans, bgImages } = usePricingPlans();

  return (
    <section ref={ref as any} id="pricing" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden">
      <SectionBackground bgImages={bgImages} lazy />
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        {/* Pricing Cards */}
        <PricingPlansGrid plans={plans} isIntersecting={isIntersecting as boolean} />

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