import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Currency } from '../../../types/sections';
import PaymentMethods from './PaymentMethods';

interface PricingPlansPaymentProps {
  availableCurrencies: Currency[];
  isIntersecting: boolean;
}

const PricingPlansPayment: React.FC<PricingPlansPaymentProps> = ({ 
  availableCurrencies, 
  isIntersecting,
}) => {
  return (
    <>
      {/* Payment Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-sm md:text-base text-center mb-8 lg:mb-12 flex flex-col items-center gap-3 md:gap-4"
      >
        <p className="text-gray-600">
          Цены указаны в долларах США. Для оплаты можете использовать
        </p>
        <PaymentMethods currencies={availableCurrencies} />
      </motion.div>

      {/* Quality Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
      >
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
      </motion.div>
    </>
  );
};

export default PricingPlansPayment;