
import React from "react";

export const PricingSavingsBanner: React.FC = () => {
  return (
    <div className="bg-[rgba(29,194,114,0.1)] flex w-full flex-col justify-center mt-[45px] px-px py-4 rounded-lg max-md:max-w-full max-md:mt-10">
      <div className="bg-[rgba(0,0,0,0)] flex items-center gap-6 justify-center flex-wrap py-0.5 max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-2">
          <div className="self-stretch flex min-h-4 items-center overflow-hidden justify-center w-4 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/620b5293355e602b40bdc812b194af850422a483?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Savings icon"
            />
          </div>
          <div className="text-[rgba(29,194,114,1)] text-base font-medium text-center">
            Économisez jusqu'à 20% avec un abonnement annuel
          </div>
        </div>
      </div>
    </div>
  );
};
