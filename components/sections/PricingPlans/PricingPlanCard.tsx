import { motion } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';
import { Button, Card } from '../../common';
import { FC, useState } from 'react';
import { ButtonSize, ButtonVariant } from '../../../types/common';
import { Tariff } from '../../../types/sections';

interface PricingPlanCardProps {
  plan: Tariff;
  isIntersecting: boolean;
  index: number;
}

const PricingPlanCard: FC<PricingPlanCardProps> = ({ plan, isIntersecting, index }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyButton = async () => {
    try {
      setIsLoading(true);
      // In a real project, the URL should be in environment variables
      const n8nWebhookUrl = (import.meta as any).env?.VITE_N8N_WEBHOOK_URL || 'https://your-n8n-url/render/webhook/pay';
      const res = await fetch(`${n8nWebhookUrl}?tariff=${plan.id}`);

      if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (!data.invoice_url) {
        throw new Error('Invoice URL not received');
      }

      window.open(data.invoice_url, '_blank');
    } catch (error) {
      console.error('Error creating invoice:', error);

      let errorMessage = 'Произошла ошибка при создании инвойса. Пожалуйста, попробуйте позже.';

      if (error instanceof Error) {
        if ((import.meta as any).env?.DEV) {
          errorMessage += ` Детали: ${error.message}`;
        }
      }

      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  const price = plan.prices[0];
  const features = plan.features.split('\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative h-full flex flex-col ${
        plan.is_popular ? 'xl:scale-105' : ''
      }`}
    >
      <Card
        variant={plan.is_popular ? "elevated" : "default"}
        padding="lg"
        className="h-full flex flex-col"
      >
      <div className="text-center mb-6 xl:mb-8">
        <h3 className="text-2xl sm:text-lg md:text-2xl lg:text-lg xl:text-2xl font-bold text-primary-dark mb-3 sm:mb-4">
          {plan.name}
        </h3>
        <div className="mb-2">
          {price.discount_price && (
            <span className="text-gray-400 line-through text-base sm:text-lg mr-2">
              {+price.price} {price.currency.symbol}
            </span>
          )}
          <span className="text-3xl sm:text-4xl font-bold text-primary-pink">
            {price.discount_price ? +price.discount_price : +price.price} {price.currency.symbol}
          </span>
        </div>
        <p className="italic text-gray-600 text-sm xl:text-base">
          {plan.description}
        </p>
      </div>
      {/* Features */}
      <ul className="space-y-2 xl:space-y-3 mb-6 xl:mb-8 flex-grow">
        {features.map((feature, featureIndex) => (
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
      <div className="mt-auto">
        <Button
          variant={plan.is_popular ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY}
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
            "Начать обучение"
          )}
        </Button>
      </div>
      </Card>
    </motion.div>
  );
};

export default PricingPlanCard;
