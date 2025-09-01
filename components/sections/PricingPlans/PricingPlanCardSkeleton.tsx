import { FC } from "react";
import { Card } from "../../common";

export interface PricingPlanCardSkeletonProps {
  is_popular?: boolean;
}

const PricingPlanCardSkeleton: FC<PricingPlanCardSkeletonProps> = ({
  is_popular,
}) => {
  return (
    <div
      className="relative h-auto md:h-[487px] lg:h-[475px] xl:h-[547px] flex flex-col animate-pulse"
    >
      <Card
        padding="lg"
        className="h-full flex flex-col"
        childrenWrapperClassName="h-full flex flex-col"
        variant={is_popular ? "elevated" : "default"}
      >
        <div className="flex-1">
          <div className="text-center mb-6 xl:mb-8">
            <div className="h-[32px] lg:h-[28px] xl:h-[33.6px] bg-gray-100 rounded-md w-3/4 mx-auto mb-3 sm:mb-4"></div>
            <div className="h-[40px] md:h-[49px] lg:h-[59px] xl:h-[62px] bg-primary-pink/20 rounded-md w-1/2 mx-auto mb-2"></div>
            <div className="h-[20px] xl:h-[25px] bg-gray-100 rounded-md w-5/6 mx-auto"></div>
          </div>
          <ul className="space-y-2 xl:space-y-3 mb-6 xl:mb-8 flex-grow">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-[20px] xl:h-[21px] bg-primary-pink/10 rounded-full flex-shrink-0 mt-0.5"></div>
                <div className="h-[20px] xl:h-[21px] bg-gray-100 rounded-md w-full"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <div
            className={`h-[44px] md:h-[52px] lg:h-[60px] rounded-lg w-full ${
              is_popular
                ? "bg-gradient-to-r from-primary-pink/20 to-primary-blue/20"
                : "bg-gray-100"
            }`}
          ></div>
        </div>
      </Card>
    </div>
  );
};

export default PricingPlanCardSkeleton;
