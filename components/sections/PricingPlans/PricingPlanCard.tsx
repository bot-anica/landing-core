import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { Button, Card } from '../../common';
import { FC, useState } from 'react';
import { ButtonSize } from '../../../types/common';
import { PricingPlan } from '../../../types/sections';

interface PricingPlanCardProps {
  plan: PricingPlan;
  isIntersecting: boolean;
  index: number;
}

const PricingPlanCard: FC<PricingPlanCardProps> = ({ plan, isIntersecting, index }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyButton = async () => {
    try {
      setIsLoading(true);
      // Вызываем функцию для генерации инвойса
      // В реальном проекте URL должен быть в переменных окружения
      const n8nWebhookUrl = (import.meta as any).env?.VITE_N8N_WEBHOOK_URL || 'https://your-n8n-url/render/webhook/pay';
      const res = await fetch(`${n8nWebhookUrl}?tariff=${plan.id}`);
      
      // Проверяем статус ответа
      if (!res.ok) {
        throw new Error(`Ошибка API: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      
      // Проверяем, что в ответе есть URL для оплаты
      if (!data.invoice_url) {
        throw new Error('Не получен URL для оплаты');
      }
      
      // Открываем страницу оплаты в новом окне
      window.open(data.invoice_url, '_blank');
    } catch (error) {
      console.error('Ошибка при создании инвойса:', error);
      
      // Показываем пользователю более информативное сообщение об ошибке
      let errorMessage = 'Произошла ошибка при создании инвойса. Пожалуйста, попробуйте позже.';
      
      if (error instanceof Error) {
        // Для разработки можно показать более подробную информацию
        if ((import.meta as any).env?.DEV) {
          errorMessage += ` Детали: ${error.message}`;
        }
      }
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative h-full flex flex-col ${
        plan.popular ? 'xl:scale-105' : ''
      }`}
    >
      <Card
        variant={plan.popular ? "elevated" : "default"}
        padding="lg"
        className="h-full flex flex-col"
      >
      {/* Popular Badge */}
      {/* {plan.popular && (
        <div className="w-auto absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-pink to-primary-blue text-white px-3 sm:px-4 py-1 rounded-full text-xs xl:text-sm font-semibold">
            Лучшее предложение
          </div>
        </div>
      )} */}
      {/* Plan Content */}
      <div className="text-center mb-6 xl:mb-8">
        <h3 className="text-2xl sm:text-lg md:text-2xl lg:text-lg xl:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">
          {plan.title}
        </h3>
        <div className="mb-2">
          {plan.originalPrice && (
            <span className="text-gray-400 line-through text-base sm:text-lg mr-2">
              {plan.originalPrice}
            </span>
          )}
          <span className="text-3xl sm:text-4xl font-bold text-primary-pink">
            {plan.price}
          </span>
        </div>
        <p className="italic text-gray-600 text-sm xl:text-base">
          {plan.tagline}
        </p>
      </div>
      {/* Features */}
      <ul className="space-y-2 xl:space-y-3 mb-6 xl:mb-8 flex-grow">
        {plan.features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
            className="flex items-center gap-2 sm:gap-3 text-gray-700"
          >
            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-primary-pink/10 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-2 h-2 sm:w-3 sm:h-3 text-primary-pink" />
            </div>
            <span className="text-sm">{feature}</span>
          </motion.li>
        ))}
      </ul>
      {/* CTA Button - прижат к низу */}
      <div className="mt-auto">
        <Button
          variant={plan.buttonStyle}
          size={ButtonSize.LG}
          className="w-full touch-spacing"
          disabled={isLoading}
          onClick={handleBuyButton}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Создание инвойса...
            </>
          ) : (
            plan.buttonText
          )}
        </Button>
      </div>
      </Card>
    </motion.div>
  );
};

export default PricingPlanCard;