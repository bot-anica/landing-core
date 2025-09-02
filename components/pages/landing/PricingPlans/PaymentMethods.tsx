import type { FC } from 'react';
import { Currency } from '../../../../types/sections';
import { cn } from '../../../../utils/cn';

interface PaymentMethodsProps {
  currencies: Currency[];
  selectedCurrency: Currency | null;
  onCurrencyChange: (currency: Currency) => void;
}

const PaymentMethods: FC<PaymentMethodsProps> = ({ 
  currencies, 
  selectedCurrency, 
  onCurrencyChange 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {currencies.map((currency) => (
        <button
          key={currency.code}
          onClick={() => onCurrencyChange(currency)}
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-colors cursor-pointer",
            selectedCurrency?.code === currency.code
              ? "bg-primary-pink/80 text-white"
              : "bg-primary-pink/30 text-primary-dark hover:bg-primary-pink/50"
          )}
        >
          <span className="mr-1.5">{currency.symbol}</span>
          {currency.name || currency.code}
        </button>
      ))}
    </div>
  );
};

export default PaymentMethods;