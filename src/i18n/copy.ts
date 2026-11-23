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

// Writing rules for this file: the home page and the offer speak to a business
// owner in plain words; technical detail belongs on About and in the project
// pages. Polish is written as Polish, not translated line by line. Do not
// reuse a phrase or call to action that another page already carries.

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
      "Websites That Sell",
      "Online Stores",
      "AI Automation",
      "Less Manual Work",
      "Shopify & WordPress",
      "DevOps & CI/CD",
    ],
    heading: "Websites, online stores and business automation",
    tagline:
      "Websites and online stores, plus automation that takes the manual work off your team.",
    ctaOffer: "See prices",
    ctaContact: "Get in touch",
    pillarsTitle: "Two things I do",
    pillars: [
      {
        title: "Websites and online stores",
        body: "From a one-page site to a full store on WooCommerce or Shopify. It loads fast, you can edit it yourself, and Google can read it from day one.",
        points: [
          "Landing pages from 1300 PLN, stores from 3000 PLN",
          "WordPress, WooCommerce, Shopify, Next.js",
          "Moving an old store to a new one, products and orders included",
        ],
      },
      {
        title: "Automation and AI",
        body: "Orders retyped between systems, reports put together by hand, stock updated in three places. I connect the tools so that this happens without anyone touching it.",
        points: [
          "Store, marketplaces and invoicing kept in step",
          "AI assistants that answer questions and sort incoming messages",
          "Releases and backups that nobody has to remember",
        ],
      },
    ],
    recentTitle: "Recent work",
    allWork: "All projects",
  },
  about: {
    title: "One person, from the first call to the handover",
    paragraphs: [
      "devJam Studio is a one-person studio. You talk to whoever does the work, so nothing gets lost between a salesperson, a project manager and a developer.",
      "I build two things. The first is websites and online stores on WordPress, WooCommerce, Shopify and Next.js. The second is the automation around them: syncing products and orders between systems, AI assistants, and releases that go out without manual steps.",
      "The two usually meet. A store rebuilt for a UK tile retailer came with a plugin that sends products, stock and prices to eBay and B&Q and brings the orders back, so nobody types them in twice.",
      "I am based in Poland and work remotely with clients here and abroad, in Polish and English.",
    ],
    doesTitle: "What I can take on",
    does: [
      "Company websites and landing pages",
      "Online stores on WooCommerce and Shopify",
      "Moving a site or store to a new platform",
      "Connecting a store with marketplaces, invoicing and other tools",
      "AI assistants and automations built on Claude, n8n or custom code",
      "Hosting, deployments and monitoring: Docker, Terraform, CI/CD",
    ],
  },
  offer: {
    title: "Offer",
    intro:
      "Websites and stores have starting prices. Automation and infrastructure are quoted per project, because no two setups are alike.",
    scopedTitle: "Automation and infrastructure",
    scopedIntro:
      "A short call comes first; after it you get a fixed price for the scope we agreed.",
    webTitle: "Websites and stores",
    webIntro: "Prices start here. The final figure depends on scope and content.",
    stepsTitle: "How it works",
    steps: [
      { title: "Short call", body: "You describe what you need and what is in the way. Free, about 30 minutes." },
      { title: "Fixed quote", body: "Scope, price and timeline arrive in writing before any work begins." },
      { title: "Build and handover", body: "You see progress along the way and receive the result with documentation." },
    ],
    from: "From",
    quote: "Quoted per project",
    cta: "Ask for a quote",
  },
  stack: {
    title: "Tools I work with",
    intro: "What I reach for, grouped by the kind of problem it solves.",
    groups: {
      automation: "Automation & AI",
      devops: "DevOps & Infrastructure",
      web: "Web & Commerce",
    },
  },
  portfolio: {
    title: "Portfolio",
    intro:
      "Stores, company sites and internal systems I designed, built or rebuilt.",
    empty: "Nothing published here yet.",
    aboutLabel: "About",
    stackLabel: "Stack",
    visit: "Visit the site",
  },
  contact: {
    title: "Say hello",
    subtitle:
      "Write what you need: a new site, a store, or a process you want off your plate. English or Polish.",
    name: "Your name",
    email: "Email",
    message: "Your message",
    send: "Send a message",
    thanks: "Thank you!",
    thanksBody: "I'll be in touch soon.",
    failed: "That didn't send. Email me instead:",
    orEmail: "Prefer email?",
    honeypot: "Leave this field empty",
  },
  footer: {
    cta: "Got a project? Write to me.",
  },
  notFound: {
    title: "Page not found",
    body: "That page does not exist. It may have been moved or renamed.",
    cta: "Back home",
  },
  seo: {
    // Keyed by unprefixed path. Titles are complete (brand included).
    pages: {
      "/": {
        title: "Websites, online stores and AI automation | devJam Studio",
        description:
          "devJam Studio builds websites and online stores on WordPress, WooCommerce, Shopify and Next.js, and automates the manual work around them. Remote, from Poland.",
      },
      "/offer/": {
        title: "Website, online store and automation pricing | devJam Studio",
        description:
          "Landing pages from 1300 PLN, multi-page sites from 2000 PLN, online stores from 3000 PLN. Automation, AI and DevOps quoted per project after a free call.",
      },
      "/portfolio/": {
        title: "Portfolio: WooCommerce, Shopify and Next.js projects | devJam Studio",
        description:
          "Case studies: a WooCommerce store rebuilt for a UK retailer, a marketplace sync plugin for eBay and B&Q, Shopify boutiques and Next.js sites on Payload CMS.",
      },
      "/about/": {
        title: "About devJam Studio: web developer and automation engineer",
        description:
          "A one-person studio from Poland. Websites and online stores, integrations between systems, AI assistants and DevOps. Working remotely in Polish and English.",
      },
      "/contact/": {
        title: "Contact devJam Studio: quote for a website, store or automation",
        description:
          "Describe your project and get a fixed quote. Use the form or write to dev.jam.studio@gmail.com. English and Polish.",
      },
    } as Record<string, { title: string; description: string }>,
    description:
      "devJam Studio: websites, online stores and automation. WordPress, WooCommerce, Shopify, Next.js, AI assistants and DevOps, delivered remotely from Poland.",
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
      "Strony, które sprzedają",
      "Sklepy internetowe",
      "Automatyzacja AI",
      "Mniej ręcznej roboty",
      "Shopify i WordPress",
      "DevOps i CI/CD",
    ],
    heading: "Strony internetowe, sklepy i automatyzacja w firmie",
    tagline:
      "Strony i sklepy internetowe oraz automatyzacja, która zdejmuje z zespołu ręczną robotę.",
    ctaOffer: "Zobacz ceny",
    ctaContact: "Napisz do mnie",
    pillarsTitle: "Czym się zajmuję",
    pillars: [
      {
        title: "Strony i sklepy internetowe",
        body: "Od prostej wizytówki po pełny sklep na WooCommerce albo Shopify. Szybko się ładuje, treści zmieniasz samodzielnie, a Google widzi ją od pierwszego dnia.",
        points: [
          "Landing page od 1300 zł, sklep od 3000 zł",
          "WordPress, WooCommerce, Shopify, Next.js",
          "Przeniesienie starego sklepu na nowy razem z produktami i zamówieniami",
        ],
      },
      {
        title: "Automatyzacja i AI",
        body: "Zamówienia przepisywane między systemami, raporty sklejane ręcznie, stany magazynowe poprawiane w trzech miejscach. Łączę narzędzia tak, żeby działo się to bez niczyjego udziału.",
        points: [
          "Sklep, marketplace'y i faktury zawsze zgodne ze sobą",
          "Asystenci AI, którzy odpowiadają na pytania i segregują wiadomości",
          "Wdrożenia i kopie zapasowe, o których nikt nie musi pamiętać",
        ],
      },
    ],
    recentTitle: "Ostatnie realizacje",
    allWork: "Wszystkie projekty",
  },
  about: {
    title: "Jedna osoba od pierwszej rozmowy do oddania projektu",
    paragraphs: [
      "devJam Studio to jednoosobowa pracownia. Rozmawiasz z tym, kto faktycznie wykonuje pracę, więc nic nie ginie po drodze między handlowcem, kierownikiem projektu i programistą.",
      "Robię dwie rzeczy. Pierwsza to strony i sklepy internetowe na WordPressie, WooCommerce, Shopify i Next.js. Druga to automatyzacja wokół nich: synchronizacja produktów i zamówień między systemami, asystenci AI oraz wdrożenia, które nie wymagają ręcznych kroków.",
      "Zwykle jedno łączy się z drugim. Do sklepu przebudowanego dla brytyjskiego sprzedawcy płytek powstała wtyczka, która wysyła produkty, stany i ceny na eBay i do B&Q, a zamówienia ściąga z powrotem. Nikt nie wpisuje ich dwa razy.",
      "Mieszkam w Polsce i pracuję zdalnie z klientami z kraju i z zagranicy, po polsku i po angielsku.",
    ],
    doesTitle: "Co mogę wziąć na siebie",
    does: [
      "Strony firmowe i landing page",
      "Sklepy internetowe na WooCommerce i Shopify",
      "Migrację strony lub sklepu na nową platformę",
      "Połączenie sklepu z marketplace'ami, fakturowaniem i innymi narzędziami",
      "Asystentów AI i automatyzacje na Claude, n8n albo we własnym kodzie",
      "Hosting, wdrożenia i monitoring: Docker, Terraform, CI/CD",
    ],
  },
  offer: {
    title: "Oferta",
    intro:
      "Strony i sklepy mają ceny startowe. Automatyzację i infrastrukturę wyceniam indywidualnie, bo każda firma działa trochę inaczej.",
    scopedTitle: "Automatyzacja i infrastruktura",
    scopedIntro:
      "Zaczynamy od krótkiej rozmowy, a po niej dostajesz stałą cenę za ustalony zakres.",
    webTitle: "Strony i sklepy",
    webIntro: "Ceny od. Ostateczna kwota zależy od zakresu i treści.",
    stepsTitle: "Jak wygląda współpraca",
    steps: [
      { title: "Krótka rozmowa", body: "Mówisz, czego potrzebujesz i co dziś przeszkadza. Bezpłatnie, około 30 minut." },
      { title: "Stała wycena", body: "Zakres, cenę i termin dostajesz na piśmie, zanim zacznę pracę." },
      { title: "Realizacja i przekazanie", body: "Po drodze widzisz postępy, a na koniec dostajesz całość z dokumentacją." },
    ],
    from: "Od",
    quote: "Wycena indywidualna",
    cta: "Poproś o wycenę",
  },
  stack: {
    title: "Narzędzia, z którymi pracuję",
    intro: "Po co sięgam, pogrupowane według rodzaju problemu.",
    groups: {
      automation: "Automatyzacja i AI",
      devops: "DevOps i infrastruktura",
      web: "Web i e-commerce",
    },
  },
  portfolio: {
    title: "Portfolio",
    intro:
      "Sklepy, strony firmowe i systemy wewnętrzne, które zaprojektowałem, zbudowałem albo przebudowałem.",
    empty: "Nic tu jeszcze nie opublikowano.",
    aboutLabel: "O projekcie",
    stackLabel: "Technologie",
    visit: "Wejdź na stronę",
  },
  contact: {
    title: "Odezwij się",
    subtitle:
      "Opisz, czego potrzebujesz: nowej strony, sklepu albo procesu, który chcesz mieć z głowy. Po polsku lub po angielsku.",
    name: "Imię",
    email: "E-mail",
    message: "Wiadomość",
    send: "Wyślij wiadomość",
    thanks: "Dziękuję!",
    thanksBody: "Odezwę się niedługo.",
    failed: "Nie udało się wysłać. Napisz do mnie mailem:",
    orEmail: "Wolisz maila?",
    honeypot: "Zostaw to pole puste",
  },
  footer: {
    cta: "Masz projekt? Pogadajmy.",
  },
  notFound: {
    title: "Nie znaleziono strony",
    body: "Taka strona nie istnieje. Mogła zostać przeniesiona lub zmienić nazwę.",
    cta: "Wróć na start",
  },
  seo: {
    pages: {
      "/": {
        title: "Strony internetowe, sklepy i automatyzacja AI | devJam Studio",
        description:
          "Tworzę strony internetowe i sklepy na WordPressie, WooCommerce, Shopify i Next.js oraz automatyzuję ręczną pracę wokół nich. Zdalnie, z Polski.",
      },
      "/offer/": {
        title: "Cennik: strona internetowa, sklep, automatyzacja | devJam Studio",
        description:
          "Landing page od 1300 zł, strona firmowa od 2000 zł, sklep internetowy od 3000 zł. Automatyzacja, AI i DevOps wyceniane indywidualnie po bezpłatnej rozmowie.",
      },
      "/portfolio/": {
        title: "Portfolio: realizacje WooCommerce, Shopify i Next.js | devJam Studio",
        description:
          "Realizacje: sklep WooCommerce przebudowany dla brytyjskiej firmy, wtyczka łącząca sklep z eBay i B&Q, butiki na Shopify i strony Next.js na Payload CMS.",
      },
      "/about/": {
        title: "O devJam Studio: programista stron i automatyzacji",
        description:
          "Jednoosobowa pracownia z Polski. Strony i sklepy internetowe, integracje między systemami, asystenci AI i DevOps. Praca zdalna po polsku i po angielsku.",
      },
      "/contact/": {
        title: "Kontakt z devJam Studio: wycena strony, sklepu lub automatyzacji",
        description:
          "Opisz projekt i odbierz stałą wycenę. Skorzystaj z formularza albo napisz na dev.jam.studio@gmail.com. Po polsku i po angielsku.",
      },
    },
    description:
      "devJam Studio: strony internetowe, sklepy i automatyzacja. WordPress, WooCommerce, Shopify, Next.js, asystenci AI i DevOps, zdalnie z Polski.",
  },
};

export const copy: Record<Locale, typeof en> = { en, pl };
