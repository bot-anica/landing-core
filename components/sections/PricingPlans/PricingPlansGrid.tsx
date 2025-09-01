import { motion } from 'framer-motion';
import PricingPlanCard from './PricingPlanCard';
import { Tariff } from '../../../types/sections';

interface PricingPlansGridProps {
  plans: Tariff[];
  isIntersecting: boolean;
}

const PricingPlansGrid: React.FC<PricingPlansGridProps> = ({ plans, isIntersecting }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mb-8 lg:mb-12 sm:mb-16">
      {plans.map((plan, index) => (
        <PricingPlanCard 
          key={plan.id} 
          plan={plan} 
          isIntersecting={isIntersecting} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default PricingPlansGrid;