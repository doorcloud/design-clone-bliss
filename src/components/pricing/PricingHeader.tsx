import React from "react";

interface PricingHeaderProps {
  onPeriodChange: (period: "monthly" | "yearly") => void;
  period: "monthly" | "yearly";
}

export const PricingHeader: React.FC<PricingHeaderProps> = ({
  onPeriodChange,
  period,
}) => {
  return (
    <div className="bg-[rgba(0,0,0,0)] flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
      <div className="bg-[rgba(0,0,0,0)] self-stretch min-w-60 leading-none w-[367px] my-auto">
        <h1 className="text-gray-800 text-3xl font-bold">Nos Tarifs</h1>
        <p className="text-gray-600 text-base font-normal mt-2.5">
          Choisissez le plan qui correspond à vos besoins
        </p>
      </div>
      <div className="bg-[rgba(0,0,0,0)] self-stretch flex items-center gap-4 w-[236px] my-auto">
        <div className="bg-gray-100 self-stretch flex items-center text-sm font-medium whitespace-nowrap text-center my-auto p-1 rounded-lg">
          <button
            onClick={() => onPeriodChange("monthly")}
            className={`self-stretch gap-2.5 px-4 py-[9px] rounded-md
              ${
                period === "monthly"
                  ? "bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] text-gray-800"
                  : "bg-transparent text-gray-600"
              }`}
          >
            Mensuel
          </button>
          <button
            onClick={() => onPeriodChange("yearly")}
            className={`self-stretch gap-2.5 px-4 py-[9px] rounded-md
              ${
                period === "yearly"
                  ? "bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] text-gray-800"
                  : "bg-transparent text-gray-600"
              }`}
          >
            Annuel
          </button>
        </div>
        <button className="bg-[rgba(0,0,0,0)] self-stretch flex items-center gap-2.5 justify-center w-9 my-auto">
          <div className="self-stretch flex min-h-6 w-[18px] items-center overflow-hidden justify-center my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/d66ab616925b7c9cd346c63c101d518ee5d9032e?placeholderIfAbsent=true"
              className="aspect-[0.75] object-contain w-[18px] self-stretch my-auto"
              alt="Info"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
