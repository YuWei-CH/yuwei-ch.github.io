import { en } from "./config/locales/en";
import { zh } from "./config/locales/zh";
import type { SiteConfig } from "./config/schema";

export const locales: Record<"en" | "zh", SiteConfig> = { en, zh };
export type LocaleKey = keyof typeof locales;
export type { SiteConfig } from "./config/schema";
export const localeEntries = Object.entries(locales) as [LocaleKey, SiteConfig][];
export const defaultLocale: LocaleKey = "en";
export const pageMeta = (getMeta: (config: SiteConfig) => { title: string; description: string }) => ({
  en: getMeta(en),
  zh: getMeta(zh),
});

// Keep translated collections in the same order so both languages render the same content.
const collections = ["experience", "research", "news", "projects", "education", "memberships", "hobbies"] as const;
const assertAligned = (label: string, english: unknown, chinese: unknown) => {
  if (JSON.stringify(english) !== JSON.stringify(chinese)) {
    throw new Error(`English and Chinese ${label} must match.`);
  }
};

for (const collection of collections) {
  const englishIds = en[collection].map((item) => item.id);
  const chineseIds = zh[collection].map((item) => item.id);
  if (new Set(englishIds).size !== englishIds.length) {
    throw new Error(`English ${collection} IDs must be unique.`);
  }
  assertAligned(`${collection} IDs and order`, englishIds, chineseIds);
}

assertAligned("skills", en.skills, zh.skills);
assertAligned("social links", en.social, zh.social);
assertAligned("experience links", en.experience.map((item) => item.links?.map((link) => link.href) ?? []), zh.experience.map((item) => item.links?.map((link) => link.href) ?? []));
assertAligned("project links", en.projects.map((item) => item.link), zh.projects.map((item) => item.link));
assertAligned("publication links", en.research.map((item) => item.publicationLink), zh.research.map((item) => item.publicationLink));

const newsLinks = (items: SiteConfig["news"]) =>
  items.map((item) => Array.from(item.description.matchAll(/\]\((https?:\/\/[^)]+)\)/g), (match) => match[1]));
assertAligned("news links", newsLinks(en.news), newsLinks(zh.news));
