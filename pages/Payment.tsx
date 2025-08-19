import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Shield, CreditCard } from 'lucide-react';
import { PricingService } from '../services/PricingService';
import { useGeolocation } from '../hooks/useGeolocation';
import { useAvailableCurrencies } from '../hooks/useAvailableCurrencies';
import { cn } from '../utils/cn';
import SEOHead from '../components/common/SEOHead';
import { useSEO } from '../hooks/useSEO';

const Payment = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const { location } = useGeolocation();
  const availableCurrencies = useAvailableCurrencies(location);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const planData = plan ? PricingService.getPlanById(plan) : undefined;
  
  // SEO конфигурация с динамическим заголовком
  const seoConfig = useSEO('payment', {
    title: planData ? `Оплата тарифа "${planData.title}"` : 'Оплата курса',
    description: planData 
      ? `Оплата тарифа "${planData.title}" курса по созданию Telegram-ботов. ${planData.tagline}`
      : 'Оплата курса по созданию Telegram-ботов. Выберите подходящий тариф и начните обучение.'
  });

  // Фильтрация валют по геолокации
  // const getAvailableCurrencies = () => {
  //   const base = ['USD', 'EUR', 'USDT'];
  //   if (location === 'RU') return [...base, 'RUB'];
  //   if (location === 'UA') return [...base, 'UAH'];
  //   return base;
  // };

  const handleBack = () => {
    // Сохранение позиции скролла
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    navigate('/', { state: { scrollPosition } });
  };

  useEffect(() => {
    // Восстановление позиции скролла при возврате
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(scrollPosition));
      }, 100);
    }
  }, []);

  if (!planData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">План не найден</h1>
          <button onClick={handleBack} className="btn btn-primary">
            Вернуться назад
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-pink transition-colors"
            >
              <ArrowLeft size={20} />
              Вернуться к выбору пакета
            </button>
          </div>

          {/* Plan Details */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-dark mb-4">
              {planData.title}
            </h1>
            <div className="text-6xl font-bold text-gradient mb-2">
              ${planData.price}
            </div>
            {planData.popular && (
              <div className="inline-block bg-primary-pink text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярный выбор
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              Что включено:
            </h3>
            <ul className="space-y-3">
              {planData.features.map((feature: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Currency Selection */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              Выберите валюту оплаты:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {availableCurrencies.map((currency) => (
                <button
                  key={currency}
                  onClick={() => setSelectedCurrency(currency)}
                  className={cn(
                    'p-4 rounded-lg border-2 transition-all duration-200',
                    selectedCurrency === currency
                      ? 'border-primary-pink bg-primary-pink/10 shadow-md'
                      : 'border-gray-200 hover:border-primary-border hover:bg-gray-50'
                  )}
                >
                  <div className="font-semibold text-primary-dark">
                    {currency}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Security Info */}
          <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <h4 className="font-medium text-green-800">Безопасная оплата</h4>
                <p className="text-sm text-green-700">
                  Все платежи обрабатываются через защищенное соединение
                </p>
              </div>
            </div>
          </div>

          {/* NowPayments Integration Placeholder */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CreditCard className="w-6 h-6 text-gray-600" />
              <p className="text-gray-600 font-medium">
                Форма оплаты NowPayments
              </p>
            </div>
            <p className="text-gray-500 mb-4 text-sm">
              Здесь будет интегрирована форма оплаты с поддержкой выбранной валюты
            </p>
            <button className="btn btn-primary">
              Перейти к оплате
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;