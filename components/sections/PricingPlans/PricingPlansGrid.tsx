import { motion } from 'framer-motion';
import PricingPlanCard from './PricingPlanCard';
import { Currency, Tariff } from '../../../types/sections';

interface PricingPlansGridProps {
  plans: Tariff[];
  isIntersecting: boolean;
  selectedCurrency: Currency;
}

const PricingPlansGrid: React.FC<PricingPlansGridProps> = ({ plans, isIntersecting, selectedCurrency }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mb-8 lg:mb-12 sm:mb-16">
      {plans.map((plan, index) => (
        <PricingPlanCard 
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