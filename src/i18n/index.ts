import { withBase } from '../config';
import en from './en';

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr: en };

// BCP 47 tags for Intl date formatting.
export const DATE_LOCALES: Record<Locale, string> = { en: 'en-US', tr: 'tr-TR' };

// Astro derives currentLocale from the URL, so pages under /tr/ (including the
// English page components they render) resolve to 'tr' and everything else to 'en'.
export const getI18n = (astro: { currentLocale: string | undefined }) => {
  const locale: Locale = astro.currentLocale === 'tr' ? 'tr' : 'en';
  return { locale, t: dictionaries[locale] };
};

// For page links only. Assets (logos, favicons, /og/, /pagefind/) keep using
// withBase directly — prefixing them with /tr would 404.
export const localizePath = (path: string, locale: Locale) => withBase(locale === 'tr' ? `/tr${path}` : path);
