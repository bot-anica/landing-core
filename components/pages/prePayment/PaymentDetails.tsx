import { FC } from 'react';
import { Loader2, Shield } from 'lucide-react';
import { Currency } from '../../../types/sections';
import PaymentMethods from '../landing/PricingPlans/PaymentMethods';
import { Button } from '../../common';

interface PaymentDetailsProps {
  availableCurrencies: Currency[];
  selectedCurrency: Currency | null;
  onCurrencyChange: (currency: Currency) => void;
  name: string;
  onNameChange: (name: string) => void;
  email: string;
  onEmailChange: (email: string) => void;
  error: string | null;
  isLoading: boolean;
  onSubmit: () => void;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ availableCurrencies, selectedCurrency, onCurrencyChange, name, onNameChange, email, onEmailChange, error, isLoading, onSubmit }) => (
  <div className="flex-1">
    <h2 className="text-2xl font-bold text-primary-dark mb-6">Данные для оплаты</h2>
    <div className="mb-6">
      <label htmlFor="currency" className="block text-gray-700 text-sm font-bold mb-2">Валюта оплаты *</label>
      <PaymentMethods
        currencies={availableCurrencies}
        selectedCurrency={selectedCurrency}
        onCurrencyChange={onCurrencyChange}
      />
    </div>
    <div className="mb-6">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Имя (необязательно)</label>
      <input
        type="text"
        id="name"
        className="appearance-none border border-primary-blue/15 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        placeholder="Введите ваше имя"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email *</label>
      <input
        type="email"
        id="email"
        className="appearance-none border border-primary-blue/15 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        placeholder="your.email@example.com"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        required
      />
      <p className="text-xs text-gray-500 mt-1">На этот email будут отправлены материалы курса</p>
    </div>
    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    <Button
      onClick={onSubmit}
      disabled={isLoading}
      className="w-full mb-4"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Создание инвойса...
        </>
      ) : (
        "Перейти к оплате"
      )}
    </Button>
    <p className="max-w-sm text-xs text-gray-500 text-center mb-8 mx-auto">Нажимая кнопку, вы соглашаетесь с условиями предоставления услуг</p>
    <div className="bg-white rounded-xl p-4 md:p-5 lg:p-6 flex gap-4 border border-primary-blue/15">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
        <Shield className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
      </div>
      <div>
        <h4 className="text-sm md:text-base font-bold text-primary-dark mb-1">
          Гарантия качества
        </h4>
        <p className="text-gray-600 text-sm">
          Материалы проверены на практике. Доступ навсегда.
        </p>
      </div>
    </div>
  </div>
);

export default PaymentDetails;
