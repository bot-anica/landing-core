import { FC } from 'react';
import { Shield } from 'lucide-react';

const SecurityMessage: FC = () => (
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
);

export default SecurityMessage;
