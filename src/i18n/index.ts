import { withBase } from '../config';
import en from './en';
import tr from './tr';

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr };

// The deploy workflow runs `astro build`, not `astro check`, so the Dictionary
// type alone won't stop a missing Turkish string from shipping as blank text.
const missingKeys = (source: object, target: object, path = ''): string[] =>
  Object.entries(source).flatMap(([key, value]) =>
    !(key in target)
      ? [path + key]
      : value && typeof value === 'object'
        ? missingKeys(value, (target as Record<string, object>)[key], `${path}${key}.`)
        : [],
  );
const missing = missingKeys(en, tr);
if (missing.length) throw new Error(`src/i18n/tr.ts is missing: ${missing.join(', ')}`);

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

// The same page in the other language. Every route except the 404 exists in both.
export const switchLocalePath = (pathname: string, to: Locale) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return localizePath(pathname.slice(base.length).replace(/^\/tr(?=\/|$)/, '') || '/', to);
};
