import type { CollectionEntry } from 'astro:content';

export const PUBLICATION_KINDS = ['journal', 'conference', 'preprint'] as const;
export type PublicationKind = (typeof PUBLICATION_KINDS)[number];

// Journal article, conference paper or preprint. Imported entries carry `kind`
// (from the BibTeX entry type); hand-written files without it are classified by venue.
export const publicationKind = (entry: CollectionEntry<'publications'>): PublicationKind => {
  const { kind, venue } = entry.data;
  if (kind) return kind;
  if (/arxiv|preprint/i.test(venue)) return 'preprint';
  if (/conference|symposium|summit|proceedings|workshop|meeting|congress|\bconf\b/i.test(venue)) return 'conference';
  return 'journal';
};
