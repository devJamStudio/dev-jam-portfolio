import type { Locale } from "../i18n/copy";

export interface Offer {
  id: string;
  name: Record<Locale, string>;
  features: Record<Locale, string[]>;
  /** Omitted when the work is scoped per project rather than sold at a floor price. */
  pricePln?: number;
  priceEuro?: number;
}

// Features say what the client gets; the tool goes in brackets when naming it
// helps someone technical.
export const offers: Offer[] = [
  {
    id: "automation-ai",
    name: { en: "Automation & AI", pl: "Automatyzacja i AI" },
    features: {
      en: [
        "A review of how work gets done now, to find the manual steps worth removing",
        "AI assistants connected to your data and tools (Claude)",
        "Automations in n8n, Zapier or custom Python",
        "Links between the tools you already pay for",
        "Documentation and monitoring at handover",
      ],
      pl: [
        "Przegląd obecnego sposobu pracy i wskazanie ręcznych czynności, które warto usunąć",
        "Asystenci AI podłączeni do Twoich danych i narzędzi (Claude)",
        "Automatyzacje w n8n, Zapierze albo własne w Pythonie",
        "Połączenia między narzędziami, za które już płacisz",
        "Dokumentacja i monitoring przy przekazaniu",
      ],
    },
  },
  {
    id: "devops",
    name: { en: "Hosting & deployments (DevOps)", pl: "Hosting i wdrożenia (DevOps)" },
    features: {
      en: [
        "Automatic releases: an approved change goes live and is rolled back if tests fail (CI/CD)",
        "Identical environments on a laptop, on staging and in production (Docker)",
        "Servers described in code, so they can be rebuilt at any time (Terraform)",
        "Logs and alerts that reach a person",
        "A runbook your team can follow without me",
      ],
      pl: [
        "Automatyczne wdrożenia: zatwierdzona zmiana trafia na produkcję, a gdy testy nie przejdą, jest cofana (CI/CD)",
        "Takie samo środowisko na laptopie, na stagingu i na produkcji (Docker)",
        "Serwery opisane w kodzie, więc da się je odtworzyć w każdej chwili (Terraform)",
        "Logi i alerty, które trafiają do człowieka",
        "Instrukcja, z którą zespół poradzi sobie beze mnie",
      ],
    },
  },
  {
    id: "landing-page",
    name: { en: "Landing Page", pl: "Landing page" },
    pricePln: 1300,
    priceEuro: 300,
    features: {
      en: [
        "One page designed for your brand",
        "Looks right on phones and desktops",
        "Content you can change yourself (CMS)",
        "Titles, descriptions and a sitemap for Google",
        "Subtle animations",
        "Fast loading",
      ],
      pl: [
        "Jedna strona zaprojektowana pod Twoją markę",
        "Dobrze wygląda na telefonie i na komputerze",
        "Treści zmieniasz samodzielnie (CMS)",
        "Tytuły, opisy i mapa strony dla Google",
        "Delikatne animacje",
        "Szybkie ładowanie",
      ],
    },
  },
  {
    id: "multi-page",
    name: { en: "Company website", pl: "Strona firmowa" },
    pricePln: 2000,
    priceEuro: 500,
    features: {
      en: [
        "Everything from the Landing Page package",
        "Five or more subpages",
        "Headless build for extra speed (optional)",
        "Connection to outside tools through an API (optional)",
      ],
      pl: [
        "Wszystko z pakietu Landing page",
        "Pięć lub więcej podstron",
        "Wersja headless dla większej szybkości (opcjonalnie)",
        "Połączenie z zewnętrznymi narzędziami przez API (opcjonalnie)",
      ],
    },
  },
  {
    id: "e-commerce",
    name: { en: "Online store", pl: "Sklep internetowy" },
    pricePln: 3000,
    priceEuro: 750,
    features: {
      en: [
        "Everything from the Company website package",
        "Products, categories and filters",
        "Online payments configured and tested",
        "Built on WooCommerce or Shopify",
      ],
      pl: [
        "Wszystko z pakietu Strona firmowa",
        "Produkty, kategorie i filtry",
        "Płatności online skonfigurowane i przetestowane",
        "Na WooCommerce albo Shopify",
      ],
    },
  },
];
