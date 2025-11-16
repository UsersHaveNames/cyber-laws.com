// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

// Self-contained config to avoid cross-module import cycles.

export const SUPPORTED_LANGUAGES = {
  en: "en",
  es: "es",
} as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[keyof typeof SUPPORTED_LANGUAGES];

type Config = {
  title: string;
  description: string;
  lang: SupportedLanguage;
  profile: {
    author: string;
    description?: string;
  },
  settings: {
    paginationSize: number,
  },
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const DEFAULT_LANG: SupportedLanguage = SUPPORTED_LANGUAGES.en;

export const siteConfig: Config = {
  title: "Cyber Laws",
  description: "Practical insights at the intersection of cybersecurity and regulation.",
  lang: DEFAULT_LANG,
  profile: {
    author: "Cyber Laws",
    description: "A blog about EU cybersecurity laws, frameworks, and practical implementation.",
  },
  settings: {
    paginationSize: 10,
  },
};

/** 
  These are your social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "GitHub",
    link: "https://github.com/UsersHaveNames/cyber-laws.com",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn – Andrei",
    link: "https://www.linkedin.com/in/andreimungiu/",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn – Valeria",
    link: "https://www.linkedin.com/in/mungiu-valeria-a489442a8/",
  },
  {
    icon: "mdi:rss",
    friendlyName: "RSS",
    link: "/rss.xml",
  },
];

// Keep in sync with nav keys
export type NavKey = "home" | "about" | "blog" | "projects" | "archive";
export const NAV_LINKS: NavKey[] = [
  "home", "about", "blog", "projects", "archive"
];
