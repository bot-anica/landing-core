import PricingPlanCard from './PricingPlanCard';
import { Currency, PartialSectionBGImagesProps, Tariff } from '../../../types/sections';
import PricingPlanCardSkeleton from './PricingPlanCardSkeleton';

interface PricingPlansGridProps {
  plans: Tariff[];
  isIntersecting: boolean;
  selectedCurrency: Currency;
  loading: boolean;
  bgImages?: PartialSectionBGImagesProps;
}

const PricingPlansGrid: React.FC<PricingPlansGridProps> = ({ plans, isIntersecting, selectedCurrency, loading, bgImages }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mb-8 lg:mb-12 sm:mb-16">
        {[...Array(3)].map((_, index) => (
          <PricingPlanCardSkeleton key={index} is_popular={index === 0} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mb-8 lg:mb-12 sm:mb-16">
      {plans.map((plan, index) => (
        <PricingPlanCard 
          bgImages={plan.is_popular ? bgImages : undefined}
          key={plan.id} 
          plan={plan} 
          isIntersecting={isIntersecting} 
          index={index} 
          selectedCurrency={selectedCurrency}
        />
      ))}
    </div>
  );
};

export default PricingPlansGrid;