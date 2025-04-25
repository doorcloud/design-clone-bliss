import React from "react";

export const PricingFooter: React.FC = () => {
  return (
    <div className="bg-gray-50 w-full mt-[45px] p-8 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
      <p className="self-stretch bg-[rgba(0,0,0,0)] gap-2.5 text-base text-gray-600 font-normal text-center px-[268px] py-0.5 max-md:max-w-full max-md:px-5">
        Tous les prix sont en XOF (Franc CFA). La TVA peut s'appliquer selon
        votre pays.
      </p>
      <div className="bg-[rgba(0,0,0,0)] flex w-full items-center gap-3 justify-between flex-wrap mt-[17px] px-[392px] max-md:max-w-full max-md:px-5">
        <div className="text-gray-600 text-base font-normal leading-none text-center self-stretch w-[207px] my-auto">
          Besoin d'aide pour choisir ?
        </div>
        <button className="bg-[rgba(0,0,0,0)] self-stretch flex items-center gap-[7px] my-auto p-0.5">
          <span className="text-[rgba(21,102,227,1)] text-base font-medium text-center self-stretch w-[124px] my-auto">
            Contactez-nous
          </span>
          <div className="self-stretch flex h-4 items-center overflow-hidden justify-center w-3.5 my-auto">
            <div className="bg-[rgba(0,0,0,0)] self-stretch flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] my-auto py-0.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/c5fbf02eb56910f47990287ed76ca45e05276e17?placeholderIfAbsent=true"
                className="aspect-[1.17] object-contain w-3.5"
                alt="Contact arrow"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
