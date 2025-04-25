import React from "react";
import { PricingSection } from "@/components/pricing/PricingSection";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <PricingSection />
      </div>
    </main>
  );
};

export default Index;
