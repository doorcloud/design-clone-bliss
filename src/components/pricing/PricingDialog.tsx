import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PricingHeader } from "./PricingHeader";
import { PricingSavingsBanner } from "./PricingSavingsBanner";
import { PricingCard } from "./PricingCard";
import { PricingFooter } from "./PricingFooter";
import { Button } from "@/components/ui/button";

const monthlyMultiplier = 1.2; // 20% more expensive for monthly plans

// Base yearly prices in XOF
const baseYearlyPrices = {
  starter: 187500, // 225,000/1.2
  pro: 1083333, // 1,300,000/1.2
};

// Features remain the same
const starterFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/5ac4bba7fea5816a04b45cf9696e80a4a9e44670?placeholderIfAbsent=true",
    title: "4 vCPU",
    description: "Performance avancée",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/529430ca70cc2194549bec111994e6db621f57d6?placeholderIfAbsent=true",
    title: "8 GB RAM",
    description: "Mémoire étendue",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/fbd147426e9fcb9672ffeed52e1b9211666f5f6a?placeholderIfAbsent=true",
    title: "50 GB SSD",
    description: "Stockage haute performance",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/c36ea933802c4649ce74b29532cef89ffdae2277?placeholderIfAbsent=true",
    title: "50 GB Object",
    description: "Stockage flexible",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/8ad0d72cac20116dd4db0c917f9731533b1d70b3?placeholderIfAbsent=true",
    title: "100 GB Egress",
    description: "Bande passante élevée",
  },
];

const proFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/5ac4bba7fea5816a04b45cf9696e80a4a9e44670?placeholderIfAbsent=true",
    title: "24 vCPU",
    description: "Performance professionnelle",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/529430ca70cc2194549bec111994e6db621f57d6?placeholderIfAbsent=true",
    title: "48 GB RAM",
    description: "Mémoire professionnelle",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/fbd147426e9fcb9672ffeed52e1b9211666f5f6a?placeholderIfAbsent=true",
    title: "400 GB SSD",
    description: "Stockage entreprise",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/c36ea933802c4649ce74b29532cef89ffdae2277?placeholderIfAbsent=true",
    title: "1000 GB Object",
    description: "Stockage évolutif",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/8ad0d72cac20116dd4db0c917f9731533b1d70b3?placeholderIfAbsent=true",
    title: "3000 GB Egress",
    description: "Bande passante illimitée",
  },
];

const enterpriseFeatures = [
  {
    title: "Cluster K8s dédié",
    description: "Control plane managé",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/dd0c215fe2cdf0f8bc57a27476ecca93ee5d755f?placeholderIfAbsent=true",
    title: "SSO Enterprise",
    description: "AzureAD, Google WS, LDAP",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/7083b10422487637616c17970d49cc5cedc8a524?placeholderIfAbsent=true",
    title: "CI/CD & API illimités",
    description: "Sans restriction",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/6b4b78bc42ed3f5705207a926aa033bd9231dc0d?placeholderIfAbsent=true",
    title: "Export SIEM",
    description: "Logs, métriques, traces",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/05d46c3f8b9c407f9cce3111b0720bb1/f9a16f8c3a431fd2d33b473f4545634a0165c3ac?placeholderIfAbsent=true",
    title: "Support 24×7",
    description: "Support premium inclus",
  },
];

interface PricingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerButtonText?: string;
}

export const PricingDialog: React.FC<PricingDialogProps> = ({
  open,
  onOpenChange,
  triggerButtonText = "Voir les tarifs",
}) => {
  const [period, setPeriod] = useState<"monthly" | "yearly">("yearly");

  const formatPrice = (basePrice: number): string => {
    const price = period === "monthly" 
      ? Math.round(basePrice * monthlyMultiplier) 
      : basePrice;
    
    return price.toLocaleString("fr-FR").replace(/\s/g, ",");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-5xl p-0 bg-gray-50 overflow-hidden">
        <section className="bg-white shadow-[0px_25px_50px_rgba(0,0,0,0.25)] overflow-hidden p-8 rounded-3xl max-md:px-5">
          <PricingHeader period={period} onPeriodChange={setPeriod} />
          
          {period === "monthly" && <PricingSavingsBanner />}

          <div className="bg-[rgba(0,0,0,0)] flex w-full gap-8 flex-wrap mt-[45px] max-md:max-w-full max-md:mt-10">
            <PricingCard
              title="Starter"
              price={formatPrice(baseYearlyPrices.starter)}
              period={period === "monthly" ? "XOF/mois" : "XOF/an"}
              features={starterFeatures}
              buttonText="Commencer"
              buttonVariant="outline"
            />

            <PricingCard
              title="Pro"
              price={formatPrice(baseYearlyPrices.pro)}
              period={period === "monthly" ? "XOF/mois" : "XOF/an"}
              features={proFeatures}
              buttonText="Commencer l'essai"
              buttonVariant="primary"
              popular
            />

            <PricingCard
              title="Enterprise"
              price="Sur mesure"
              period=""
              features={enterpriseFeatures}
              buttonText="Contacter l'équipe"
              buttonVariant="outline"
            />
          </div>

          <PricingFooter />
        </section>
      </DialogContent>
    </Dialog>
  );
};

export const PricingDialogTrigger: React.FC<{ buttonText?: string }> = ({ 
  buttonText = "Voir les tarifs" 
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-blue-600 hover:bg-blue-700">
        {buttonText}
      </Button>
      <PricingDialog open={open} onOpenChange={setOpen} />
    </>
  );
};
