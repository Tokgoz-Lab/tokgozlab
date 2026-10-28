import { getEntry, type CollectionEntry } from 'astro:content';
import type { Locale } from '.';

const translationCollections = { research: 'researchTr', team: 'teamTr', news: 'newsTr' } as const;

// Overlays the Turkish translation (if any) on an English entry. `source` is what
// render() should render, and `fallback` marks English content shown on a Turkish
// page — wrap it in lang="en" so screen readers and CSS casing treat it as English.
export const localizeEntry = async <E extends CollectionEntry<'research' | 'team' | 'news'>>(entry: E, locale: Locale) => {
  const translation = locale === 'tr' ? await getEntry(translationCollections[entry.collection], entry.id) : undefined;
  return {
    data: { ...entry.data, ...translation?.data } as E['data'],
    source: translation ?? entry,
    fallback: locale === 'tr' && !translation,
  };
};
