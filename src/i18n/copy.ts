export type Locale = "en" | "pl";
export type StackGroupId = "automation" | "devops" | "web";

export const locales: Locale[] = ["en", "pl"];
export const defaultLocale: Locale = "en";

/** "/about" -> "/pl/about" for the non-default locale. */
export const localePath = (path: string, locale: Locale): string =>
  locale === defaultLocale ? path : `/${locale}${path === "/" ? "" : path}`;

/** Set on every page by onCreatePage in gatsby-node.ts. */
export interface LocalePageContext {
  locale?: Locale;
  /** This page's path without the locale prefix, e.g. "/about/". */
  basePath?: string;
}

const en = {
  langLabel: "PL",
  nav: {
    home: "Home",
    offer: "Offer",
    portfolio: "Portfolio",
    stack: "Stack",
    about: "About",
    contact: "Contact",
  },
  index: {
    slogans: [
      "Are You ready to JAM?",
      "AI Automation",
      "DevOps Pipelines",
      "CI/CD That Ships Itself",
      "Agentic Workflows",
      "Infrastructure as Code",
      "Web Development",
      "Shopify & WordPress",
    ],
    heading: "AI automation, DevOps pipelines and web development",
    tagline:
      "I build the automation layer — pipelines, agents and integrations — and the web products that sit on top of it.",
    ctaOffer: "See the offer",
    ctaContact: "Start a project",
  },
  about: {
    title: "Automation first. Web second.",
    paragraphs: [
      "devJam Studio is a one-person shop. I build the machinery that makes software ship on its own: CI/CD pipelines, infrastructure as code, and AI agents that take the repetitive work off your desk.",
      "Most jobs start the same way. Something gets done by hand every week, everyone knows it, and nobody has had time to kill it. I find that thing, wire it into a pipeline or an agent, and hand it back running.",
      "I still build sites and stores — Shopify, WordPress, headless Gatsby — because that is where a lot of the manual work lives. The difference is what happens after launch: deploys, content syncs, reports and integrations run themselves.",
      "Based in Poland. I work in English and Polish.",
    ],
    doesTitle: "What that looks like",
    does: [
      "CI/CD pipelines that deploy on merge and roll back on red",
      "Infrastructure as code — Docker, Terraform, Kubernetes",
      "AI agents and LLM integrations wired into real systems",
      "Workflow automation across the tools you already pay for",
      "Web and e-commerce builds that maintain themselves",
    ],
  },
  offer: {
    title: "Offer",
    intro:
      "Automation and infrastructure are scoped per project. The web packages have a floor price.",
    from: "From",
    quote: "Priced per scope",
    cta: "Contact me",
  },
  stack: {
    title: "Stack",
    intro: "What I reach for, grouped by the kind of problem it solves.",
    groups: {
      automation: "Automation & AI",
      devops: "DevOps & Infrastructure",
      web: "Web",
    },
  },
  portfolio: {
    title: "Portfolio",
    intro: "Selected work. Automation case studies are being written up.",
    cta: "Check it out",
    empty: "Nothing published here yet.",
    aboutLabel: "About",
    stackLabel: "Stack",
    visit: "Visit the site",
  },
  contact: {
    title: "Contact Me",
    subtitle: "I speak english & polish",
    name: "Your name",
    email: "Email",
    message: "Your message",
    send: "Send a message",
    thanks: "Thank you!",
    thanksBody: "I'll be in touch soon.",
  },
  notFound: {
    title: "Page not found",
    body: "That page does not exist. It may have been moved or renamed.",
    cta: "Back home",
  },
  seo: {
    description:
      "devJam Studio — DevOps, AI and automation. CI/CD pipelines, infrastructure as code, AI agents, and the web builds that sit on top of them.",
  },
};

const pl: typeof en = {
  langLabel: "EN",
  nav: {
    home: "Start",
    offer: "Oferta",
    portfolio: "Portfolio",
    stack: "Stack",
    about: "O mnie",
    contact: "Kontakt",
  },
  index: {
    slogans: [
      "Gotowy na JAM?",
      "Automatyzacja AI",
      "Pipeline'y DevOps",
      "CI/CD, które wdraża się samo",
      "Agentowe workflow",
      "Infrastruktura jako kod",
      "Tworzenie stron",
      "Shopify i WordPress",
    ],
    heading: "Automatyzacja AI, pipeline'y DevOps i tworzenie stron",
    tagline:
      "Buduję warstwę automatyzacji — pipeline'y, agentów i integracje — oraz produkty webowe, które na niej stoją.",
    ctaOffer: "Zobacz ofertę",
    ctaContact: "Zacznij projekt",
  },
  about: {
    title: "Najpierw automatyzacja. Potem web.",
    paragraphs: [
      "devJam Studio to jednoosobowy warsztat. Buduję maszynerię, dzięki której oprogramowanie wdraża się samo: pipeline'y CI/CD, infrastrukturę jako kod i agentów AI, którzy zdejmują z biurka powtarzalną robotę.",
      "Większość zleceń zaczyna się tak samo. Coś jest robione ręcznie co tydzień, wszyscy o tym wiedzą i nikt nie miał czasu tego zabić. Znajduję tę rzecz, wpinam ją w pipeline albo agenta i oddaję działającą.",
      "Nadal robię strony i sklepy — Shopify, WordPress, headless Gatsby — bo to właśnie tam siedzi sporo ręcznej roboty. Różnica jest w tym, co dzieje się po starcie: deploye, synchronizacje treści, raporty i integracje działają same.",
      "Działam z Polski. Pracuję po polsku i po angielsku.",
    ],
    doesTitle: "Jak to wygląda w praktyce",
    does: [
      "Pipeline'y CI/CD, które wdrażają po mergu i cofają zmiany, gdy testy padną",
      "Infrastruktura jako kod — Docker, Terraform, Kubernetes",
      "Agenci AI i integracje LLM wpięte w prawdziwe systemy",
      "Automatyzacja przepływów między narzędziami, za które już płacisz",
      "Strony i sklepy, które utrzymują się same",
    ],
  },
  offer: {
    title: "Oferta",
    intro:
      "Automatyzację i infrastrukturę wyceniam pod projekt. Pakiety webowe mają cenę minimalną.",
    from: "Od",
    quote: "Wycena pod zakres",
    cta: "Napisz do mnie",
  },
  stack: {
    title: "Stack",
    intro: "Po co sięgam, pogrupowane według rodzaju problemu.",
    groups: {
      automation: "Automatyzacja i AI",
      devops: "DevOps i infrastruktura",
      web: "Web",
    },
  },
  portfolio: {
    title: "Portfolio",
    intro: "Wybrane realizacje. Case studies z automatyzacji są w opracowaniu.",
    cta: "Zobacz projekt",
    empty: "Nic tu jeszcze nie opublikowano.",
    aboutLabel: "O projekcie",
    stackLabel: "Stack",
    visit: "Wejdź na stronę",
  },
  contact: {
    title: "Napisz do mnie",
    subtitle: "Mówię po polsku i po angielsku",
    name: "Imię",
    email: "E-mail",
    message: "Wiadomość",
    send: "Wyślij wiadomość",
    thanks: "Dziękuję!",
    thanksBody: "Odezwę się niedługo.",
  },
  notFound: {
    title: "Nie znaleziono strony",
    body: "Taka strona nie istnieje. Mogła zostać przeniesiona lub zmienić nazwę.",
    cta: "Wróć na start",
  },
  seo: {
    description:
      "devJam Studio — DevOps, AI i automatyzacja. Pipeline'y CI/CD, infrastruktura jako kod, agenci AI i strony, które na nich stoją.",
  },
};

export const copy: Record<Locale, typeof en> = { en, pl };
