import type { Locale } from "../i18n/copy";

export interface Project {
  slug: string;
  name: string;
  /** Live site, when there is one to link to. */
  url?: string;
  /** Basename of a file in src/images/portfolio (screenshot, 16:9). */
  image?: string;
  stack: string[];
  description: Record<Locale, string[]>;
  /** Shown instead of a live link, e.g. while a site is unlaunched. */
  note?: Record<Locale, string>;
}

export const projects: Project[] = [
  {
    slug: "top-ceramics",
    name: "Top Ceramics",
    // Staging until the production cutover; then switch to https://topceramics.co.uk
    url: "https://stg.topceramics.co.uk",
    image: "topceramics",
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP 8.3",
      "Bedrock",
      "Acorn",
      "Blade",
      "Tailwind CSS 4",
      "Vite",
    ],
    description: {
      en: [
        "A UK tile retailer selling bathroom, kitchen, wall and floor tiles online, with unlimited free samples delivered next working day.",
        "A full rebuild of the WooCommerce store on Roots Bedrock and Acorn — a custom Blade theme with Tailwind CSS 4 and Vite, product search, sample ordering and a scripted migration from the old site.",
      ],
      pl: [
        "Brytyjski sklep z płytkami — łazienkowymi, kuchennymi, ściennymi i podłogowymi — z nielimitowanymi darmowymi próbkami dostarczanymi następnego dnia roboczego.",
        "Przebudowa sklepu WooCommerce od zera na Roots Bedrock i Acorn — autorski motyw w Blade z Tailwind CSS 4 i Vite, wyszukiwarka produktów, zamawianie próbek i skryptowana migracja ze starej strony.",
      ],
    },
  },
  {
    slug: "menswear-list",
    name: "Menswear List",
    url: "https://menswearlist.com",
    image: "menswear-list",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Payload 3",
      "PostgreSQL",
      "Neon",
    ],
    description: {
      en: [
        "A private-order menswear store. Members of the list get early access to limited releases from one brand at a time, each drop running on its own countdown until orders close.",
        "The storefront is Next.js 16, bilingual Polish and English, with a Payload 3 back end and Postgres on Neon behind it.",
      ],
      pl: [
        "Sklep w modelu private order. Członkowie listy dostają wcześniejszy dostęp do limitowanych wydań kolejnych marek — każdy drop ma własne odliczanie do zamknięcia zamówień.",
        "Sklep to Next.js 16, dwujęzyczny — po polsku i po angielsku — z backendem na Payload 3 i Postgresem na Neonie.",
      ],
    },
  },
  {
    slug: "collo-italiano",
    name: "Collo Italiano",
    url: "https://colloitaliano.com",
    image: "colloitaliano",
    stack: ["Shopify", "Liquid", "JavaScript"],
    description: {
      en: [
        "A multibrand boutique for classic men's elegance — ties, pocket squares and accessories, curated rather than mass stocked.",
        "A Shopify storefront on a custom theme, running in Polish and English, with the current promotion and the free-delivery threshold kept in the announcement bar rather than buried on a terms page.",
      ],
      pl: [
        "Multibrandowy butik z klasyczną męską elegancją — krawaty, poszetki i dodatki, kolekcjonowane, a nie masowo magazynowane.",
        "Sklep na Shopify z autorskim motywem, po polsku i po angielsku, z aktualną promocją i progiem darmowej dostawy w pasku u góry, zamiast schowanych w regulaminie.",
      ],
    },
  },
  {
    slug: "i-love-montessori",
    name: "I Love Montessori",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Payload 3",
      "PostgreSQL",
      "Docker",
    ],
    description: {
      en: [
        "The public site for a Montessori preschool, built on Next.js 16 and React 19, with Framer Motion carrying the movement through the page.",
        "Everything on it is editable — the copy comes from a Payload 3 back end rather than being baked into the markup, so the school changes its own pages without touching code.",
      ],
      pl: [
        "Publiczna strona przedszkola montessoriańskiego, zbudowana na Next.js 16 i React 19, z ruchem prowadzonym przez Framer Motion.",
        "Wszystko na niej jest edytowalne — treści pochodzą z backendu na Payload 3, zamiast siedzieć na sztywno w kodzie, więc przedszkole zmienia swoje strony bez dotykania kodu.",
      ],
    },
    note: {
      en: "The admin is deployed; the public site has not launched yet.",
      pl: "Panel jest wdrożony; publiczna strona jeszcze nie wystartowała.",
    },
  },
  {
    slug: "rentcar-cash",
    name: "RentCar Cash",
    url: "https://rentcaris.netlify.app",
    image: "rentcaris",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    description: {
      en: [
        "A management system for a premium car rental fleet. Behind the login it handles rentals, booking records and statistics for the people running the fleet rather than the people renting from it.",
        "Built as a Next.js app on Netlify, with light and dark themes that persist per user.",
      ],
      pl: [
        "System zarządzania wypożyczalnią samochodów premium. Za loginem obsługuje wypożyczenia, rejestr rezerwacji i statystyki — dla osób prowadzących flotę, nie dla wynajmujących.",
        "Zbudowany jako aplikacja Next.js na Netlify, z jasnym i ciemnym motywem zapamiętywanym per użytkownik.",
      ],
    },
  },
  {
    slug: "carpol-de",
    name: "Carpol DE",
    url: "https://carpol-fahrzeugbau.com",
    image: "carpol-de",
    stack: [
      "WordPress",
      "PHP",
      "JavaScript",
      "AJAX",
      "Tailwind CSS",
      "SCSS",
      "Webpack",
      "Figma",
    ],
    description: {
      en: [
        "Carpol builds vehicle bodies and conversions for professional fleets — as a group, over 8,000 delivery vans a year.",
        "A German-language WordPress build with custom post types, galleries and forms loaded over AJAX. Written from scratch, styled with Tailwind CSS.",
      ],
      pl: [
        "Carpol produkuje zabudowy pojazdów dla flot profesjonalnych — jako grupa ponad 8000 samochodów dostawczych rocznie.",
        "Niemieckojęzyczna strona na WordPressie z własnymi typami wpisów, galeriami i formularzami ładowanymi przez AJAX. Napisana od zera, ostylowana Tailwind CSS.",
      ],
    },
  },
  {
    slug: "bluba",
    name: "Bluba",
    url: "https://bluba.studio",
    image: "bluba",
    stack: ["Shopify", "Liquid", "JavaScript"],
    description: {
      en: [
        "Bluba Studio makes modular interior lighting printed in 3D — configurable lamps in soothing colours, aimed at a sustainable way of living.",
        "A Shopify storefront on a custom Liquid theme, selling across markets with currency and region switching.",
      ],
      pl: [
        "Bluba Studio tworzy modułowe oświetlenie wnętrz drukowane w 3D — konfigurowalne lampy w kojących kolorach, z myślą o zrównoważonym stylu życia.",
        "Sklep na Shopify z autorskim motywem w Liquidzie, sprzedający na wiele rynków, z przełącznikiem waluty i regionu.",
      ],
    },
  },
];

export const findProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
