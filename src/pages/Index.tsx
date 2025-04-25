
import React from "react";
import { PricingDialogTrigger } from "@/components/pricing/PricingDialog";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6">Notre Plateforme</h1>
        <p className="text-gray-600 mb-8 text-center max-w-xl">
          Découvrez nos offres pour développeurs et entreprises avec des ressources flexibles pour tous vos besoins.
        </p>
        
        <PricingDialogTrigger buttonText="Voir nos tarifs" />
        
        <div className="mt-12 text-center text-gray-500">
          <p>Facile à intégrer dans votre application Angular</p>
          <code className="block mt-4 bg-gray-100 p-4 rounded-md text-sm">
            &lt;app-pricing-dialog&gt;&lt;/app-pricing-dialog&gt;
          </code>
        </div>
      </div>
    </main>
  );
};

export default Index;
