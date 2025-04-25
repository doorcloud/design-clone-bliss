
import React from "react";

interface PricingFeatureProps {
  icon?: string;
  title: string;
  description: string;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[rgba(0,0,0,0)] flex w-full items-center gap-2">
      <div className="self-stretch flex min-h-4 items-center overflow-hidden justify-center w-4 my-auto">
        {icon && (
          <div className="bg-[rgba(0,0,0,0)] self-stretch flex w-4 items-center gap-2.5 overflow-hidden h-4 my-auto">
            <img
              src={icon}
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="bg-[rgba(0,0,0,0)] self-stretch leading-none my-auto py-0.5">
        <div className="text-gray-800 text-sm font-medium">{title}</div>
        <div className="text-gray-500 text-xs font-normal">{description}</div>
      </div>
    </div>
  );
};
