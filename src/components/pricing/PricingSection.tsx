import React, { useState } from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingSavingsBanner } from "./PricingSavingsBanner";
import { PricingCard } from "./PricingCard";
import { PricingFooter } from "./PricingFooter";

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

export const PricingSection: React.FC = () => {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="bg-white shadow-[0px_25px_50px_rgba(0,0,0,0.25)] overflow-hidden p-8 rounded-3xl max-md:px-5">
      <PricingHeader period={period} onPeriodChange={setPeriod} />

      <PricingSavingsBanner />

      <div className="bg-[rgba(0,0,0,0)] flex w-full gap-8 flex-wrap mt-[45px] max-md:max-w-full max-md:mt-10">
        <PricingCard
          title="Starter"
          price="225,000"
          period="XOF/mois"
          features={starterFeatures}
          buttonText="Commencer"
          buttonVariant="outline"
        />

        <PricingCard
          title="Pro"
          price="1,300,000"
          period="XOF/mois"
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
  );
};
