import type { FC } from 'react';

const PaymentMethodsSkeleton: FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-7 bg-gray-300 rounded-full w-20"
        />
      ))}
    </div>
  );
};

export default PaymentMethodsSkeleton;
