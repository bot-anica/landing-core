import type { FC } from 'react';
import { Currency } from '../../../types/sections';

interface PaymentMethodsProps {
  currencies: Currency[];
}

const PaymentMethods: FC<PaymentMethodsProps> = ({ currencies }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {currencies.map((currency) => (
        <span
          key={currency.code}
          className="inline-flex items-center px-3 py-1 bg-primary-pink/30 text-primary-dark rounded-full text-xs md:text-sm font-medium"
        >
          {currency.name || currency.code}
        </span>
      ))}
    </div>
  );
};

export default PaymentMethods;