import { FC, useMemo, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';
import { usePricingPlans } from '../../../../hooks/usePricingPlans';
import { BackgroundElements, SectionBackground, SectionHeader } from '../../../common';
import PricingPlansGrid from './PricingPlansGrid';
import PricingPlansPayment from './PricingPlansPayment';
import { Currency } from '../../../../types/sections';

const PricingPlans: FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const { header, plans, bgImages, popularPlanImages, isLoading: isPlansLoading } = usePricingPlans();
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);

  const availableCurrencies = useMemo((): Currency[] => {
    if (isPlansLoading || !plans || plans.length === 0) {
      return [];
    }
    return plans[0].prices.map(price => price.currency);
  }, [plans, isPlansLoading]);

  useEffect(() => {
    if (availableCurrencies.length > 0 && !selectedCurrency) {
      setSelectedCurrency(availableCurrencies[0]);
    }
  }, [availableCurrencies, selectedCurrency]);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  const sortedPlans = useMemo(() => {
    if (!plans) return [];
    return [...plans].sort((a, b) => {
      if (a.is_popular) return -1;
      if (b.is_popular) return 1;
      return 0;
    });
  }, [plans]);

  const isLoading = isPlansLoading || !selectedCurrency;

  if (!header || !bgImages) {
    return null; // Or a loading spinner
  }

  return (
    <section ref={ref as any} id="pricing" className="py-24 lg:py-28 xl:py-32 relative overflow-hidden bg-gradient-to-br from-primary-pink/15 to-primary-blue/5">
      <SectionBackground bgImages={bgImages} lazy />
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader title={header.title} subtitle={header.subtitle} isIntersecting={isIntersecting} />

        {/* Pricing Cards */}
        <PricingPlansGrid 
          plans={sortedPlans}
          popularPlanImages={popularPlanImages}
          isIntersecting={isIntersecting as boolean}
          selectedCurrency={selectedCurrency!}
          loading={isLoading}
        />

        {/* Payment Options */}
        <PricingPlansPayment 
          availableCurrencies={availableCurrencies}
          isIntersecting={isIntersecting as boolean}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={handleCurrencyChange}
          loading={isLoading}
        />
      </div>
    </section>
  );
};

export default PricingPlans;
