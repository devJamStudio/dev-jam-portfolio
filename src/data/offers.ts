import type { Locale } from "../i18n/copy";

export interface Offer {
  id: string;
  name: Record<Locale, string>;
  features: Record<Locale, string[]>;
  /** Omitted when the work is scoped per project rather than sold at a floor price. */
  pricePln?: number;
  priceEuro?: number;
}

export const offers: Offer[] = [
  {
    id: "automation-ai",
    name: { en: "Automation & AI", pl: "Automatyzacja i AI" },
    features: {
      en: [
        "Workflow audit — we find the manual work worth killing",
        "AI agents and LLM integrations (Claude, OpenAI)",
        "n8n, Zapier or custom Python automations",
        "Connects the tools you already pay for",
        "Handover with docs and monitoring",
      ],
      pl: [
        "Audyt procesów — znajdujemy ręczną robotę, którą warto zabić",
        "Agenci AI i integracje LLM (Claude, OpenAI)",
        "Automatyzacje w n8n, Zapierze lub własne w Pythonie",
        "Łączy narzędzia, za które już płacisz",
        "Przekazanie z dokumentacją i monitoringiem",
      ],
    },
  },
  {
    id: "devops",
    name: { en: "DevOps", pl: "DevOps" },
    features: {
      en: [
        "CI/CD pipeline — deploy on merge, roll back on red",
        "Dockerised environments, dev through prod",
        "Infrastructure as code with Terraform",
        "Monitoring, logs and alerts that reach a human",
        "A runbook, so the next person on call isn't me",
      ],
      pl: [
        "Pipeline CI/CD — deploy po mergu, rollback gdy testy padną",
        "Środowiska w Dockerze, od dev do produkcji",
        "Infrastruktura jako kod w Terraformie",
        "Monitoring, logi i alerty, które trafiają do człowieka",
        "Runbook, żeby następnym dyżurnym nie byłem ja",
      ],
    },
  },
  {
    id: "landing-page",
    name: { en: "Landing Page", pl: "Landing Page" },
    pricePln: 1300,
    priceEuro: 300,
    features: {
      en: [
        "Single page",
        "Custom layout",
        "Responsive design",
        "CMS",
        "Prepared for SEO",
        "Animations",
        "Optimized",
      ],
      pl: [
        "Jedna strona",
        "Autorski layout",
        "Responsywny design",
        "CMS",
        "Przygotowana pod SEO",
        "Animacje",
        "Zoptymalizowana",
      ],
    },
  },
  {
    id: "multi-page",
    name: { en: "Multi-page", pl: "Strona wielopodstronowa" },
    pricePln: 2000,
    priceEuro: 500,
    features: {
      en: [
        "All features included in the Landing Page package",
        "5+ pages",
        "Headless (optionally)",
        "API integration (optionally)",
      ],
      pl: [
        "Wszystko z pakietu Landing Page",
        "5+ podstron",
        "Headless (opcjonalnie)",
        "Integracja z API (opcjonalnie)",
      ],
    },
  },
  {
    id: "e-commerce",
    name: { en: "E-commerce", pl: "E-commerce" },
    pricePln: 3000,
    priceEuro: 750,
    features: {
      en: [
        "All features included in the Multi-page package",
        "Product listing and categorization",
        "Secure payment gateway setup for safe transactions",
        "WooCommerce or Shopify integration",
      ],
      pl: [
        "Wszystko z pakietu wielopodstronowego",
        "Listing i kategoryzacja produktów",
        "Skonfigurowana, bezpieczna bramka płatnicza",
        "Integracja z WooCommerce lub Shopify",
      ],
    },
  },
];
