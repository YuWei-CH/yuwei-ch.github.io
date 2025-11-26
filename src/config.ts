import { en } from "./config/locales/en";
import { zh } from "./config/locales/zh";

export const locales = { en, zh } as const;
export type LocaleKey = keyof typeof locales;
export type SiteConfig = (typeof locales)[LocaleKey];
export const localeEntries = Object.entries(locales) as [LocaleKey, SiteConfig][];
export const defaultLocale: LocaleKey = "en";
