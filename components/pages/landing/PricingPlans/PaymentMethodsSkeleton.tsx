import type { FC } from 'react';

const PaymentMethodsSkeleton: FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`h-7 rounded-full w-20 ${i === 0 ? "bg-primary-pink/50" : "bg-primary-pink/20"}`}
        />
      ))}
    </div>
  );
};

export default PaymentMethodsSkeleton;
