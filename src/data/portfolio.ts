import type { Locale } from "../i18n/copy";

export interface Project {
  slug: string;
  name: string;
  /** Live site, when there is one to link to. */
  url?: string;
  /** Basename of a file in src/images/portfolio (screenshot, 16:9). */
  image?: string;
  /** Basename of a logo in src/images/portfolio, shown in the grid. */
  logo?: string;
  stack: string[];
  description: Record<Locale, string[]>;
  /** Shown instead of a live link, e.g. while a site is unlaunched. */
  note?: Record<Locale, string>;
}

export const projects: Project[] = [
  {
    slug: "menswear-list",
    name: "Menswear List",
    url: "https://menswearlist.com",
    image: "menswear-list",
    stack: [
      "Next.js 16",
      "Payload 3",
      "PostgreSQL",
      "Neon",
      "TypeScript",
      "Tailwind CSS",
    ],
    description: {
      en: [
        "A private-order menswear store. Members of the list get early access to limited releases from one brand at a time, each drop running on its own countdown until orders close.",
        "Payload 3 runs the admin and the API, Next.js 16 renders the storefront, and Postgres is hosted on Neon. The whole site is bilingual, Polish and English.",
      ],
      pl: [
        "Sklep w modelu private order. Członkowie listy dostają wcześniejszy dostęp do limitowanych wydań kolejnych marek — każdy drop ma własne odliczanie do zamknięcia zamówień.",
        "Payload 3 obsługuje panel i API, Next.js 16 renderuje sklep, a Postgres stoi na Neonie. Całość dwujęzyczna, po polsku i po angielsku.",
      ],
    },
  },
  {
    slug: "i-love-montessori",
    name: "I Love Montessori",
    stack: [
      "Next.js 16",
      "React 19",
      "Payload 3",
      "PostgreSQL",
      "Docker",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    description: {
      en: [
        "A Montessori preschool site with its own content management. Payload 3 is mounted inside a Next.js host, so the admin UI, the REST API and the GraphQL API all ship as a single deployable.",
        "The public site is a separate Next.js 16 app that renders content from that CMS. Local development runs Postgres in Docker, so a new machine needs one command to come up.",
      ],
      pl: [
        "Strona przedszkola montessoriańskiego z własnym zarządzaniem treścią. Payload 3 jest osadzony wewnątrz hosta Next.js, więc panel, API REST i API GraphQL wdrażają się jako jedna aplikacja.",
        "Publiczna strona to osobna aplikacja Next.js 16, która renderuje treści z tego CMS-a. Lokalnie Postgres stoi w Dockerze, więc nowa maszyna wstaje jedną komendą.",
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
    logo: "carpol-de-logo",
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
        "Carpol is a company specialising in car body conversions for professional use.",
        "The site runs on WordPress as a CMS with custom post types, galleries and forms generated over AJAX. Written from scratch, styled with Tailwind CSS.",
      ],
      pl: [
        "Carpol to firma specjalizująca się w zabudowach samochodów do zastosowań profesjonalnych.",
        "Strona działa na WordPressie jako CMS, z własnymi typami wpisów, galeriami i formularzami generowanymi przez AJAX. Napisana od zera, ostylowana Tailwind CSS.",
      ],
    },
  },
  {
    slug: "bluba",
    name: "Bluba",
    url: "https://bluba.studio",
    image: "bluba",
    logo: "bluba-logo",
    stack: ["Shopify", "Liquid", "JavaScript"],
    description: {
      en: [
        "Bluba creates custom, minimalistic 3D printed home decorations and accessories.",
        "A Shopify storefront with a custom Liquid theme.",
      ],
      pl: [
        "Bluba tworzy autorskie, minimalistyczne dekoracje i akcesoria do domu drukowane w 3D.",
        "Sklep na Shopify z autorskim motywem w Liquidzie.",
      ],
    },
  },
];

export const findProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
