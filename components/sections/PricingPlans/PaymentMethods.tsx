import type { FC } from 'react';
import { CURRENCIES } from '../../../constants/pricingPlans';
import { CurrencyCode } from '../../../hooks/useAvailableCurrencies';

interface PaymentMethodsProps {
  currencies: CurrencyCode[];
}

const PaymentMethods: FC<PaymentMethodsProps> = ({ currencies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {currencies.map((code) => (
        <span
          key={code}
          className="inline-flex items-center px-3 py-1 bg-primary-pink/30 text-primary-dark rounded-full text-xs md:text-sm font-medium"
        >
          {CURRENCIES[code]?.name || code}
        </span>
      ))}
    </div>
  );
};

export default PaymentMethods;