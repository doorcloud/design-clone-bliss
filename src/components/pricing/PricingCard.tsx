
import React from "react";
import { PricingFeature } from "./PricingFeature";

interface PricingFeatureType {
  icon?: string;
  title: string;
  description: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: PricingFeatureType[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "primary" | "outline";
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  popular,
  buttonText,
  buttonVariant = "outline",
}) => {
  return (
    <div
      className={`bg-white shrink-0 w-[260px] p-4 rounded-2xl relative
      ${popular ? "shadow-[0px_8px_10px_rgba(0,0,0,0.1)] border-[rgba(21,102,227,1)]" : "border-gray-100"} 
      border-solid border-2 max-md:px-4`}
    >
      {popular && (
        <div className="bg-[rgba(0,0,0,0)] absolute z-0 w-[111px] max-w-full text-sm text-white font-medium whitespace-nowrap right-[100px] -top-3.5">
          <div className="self-stretch shadow-[0px_4px_6px_rgba(0,0,0,0.1)] w-full gap-2.5 pl-6 pr-[23px] py-[9px] rounded-full max-md:px-5 bg-[rgba(21,102,227,1)]">
            Populaire
          </div>
        </div>
      )}
      <div className="bg-[rgba(0,0,0,0)] w-full text-gray-800 whitespace-nowrap leading-none">
        <div className="text-xl font-bold">{title}</div>
        <div className="bg-[rgba(0,0,0,0)] flex w-full flex-col items-stretch text-center">
          <div className="text-3xl font-bold self-center max-md:text-2xl">
            {price}
          </div>
          <div className="text-base font-normal">{period}</div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] w-full mt-4">
        {features.map((feature, index) => (
          <div key={index} className={index > 0 ? "mt-2" : ""}>
            <PricingFeature {...feature} />
          </div>
        ))}
      </div>
      <div
        className={`self-stretch w-full gap-2.5 text-base font-normal text-center mt-4 py-2 px-3 rounded-xl cursor-pointer
          ${
            buttonVariant === "primary"
              ? "text-white bg-[rgba(21,102,227,1)]"
              : "text-[rgba(21,102,227,1)] border-[rgba(21,102,227,1)] border-solid border-2"
          }`}
      >
        {buttonText}
      </div>
    </div>
  );
};
