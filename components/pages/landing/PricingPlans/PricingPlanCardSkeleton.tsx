import { FC } from "react";
import { Card } from "../../../common";
import CardHeaderSkeleton from "./PricingPlanCardSkeleton/CardHeaderSkeleton";
import CardPriceSkeleton from "./PricingPlanCardSkeleton/CardPriceSkeleton";
import CardDescriptionSkeleton from "./PricingPlanCardSkeleton/CardDescriptionSkeleton";
import CardFeaturesSkeleton from "./PricingPlanCardSkeleton/CardFeaturesSkeleton";
import CardButtonSkeleton from "./PricingPlanCardSkeleton/CardButtonSkeleton";

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
          <CardHeaderSkeleton />
          <CardPriceSkeleton />
          <CardDescriptionSkeleton />
          <CardFeaturesSkeleton />
        </div>
        <div className="mt-auto">
          <CardButtonSkeleton isPopular={is_popular} />
        </div>
      </Card>
    </div>
  );
};

export default PricingPlanCardSkeleton;
