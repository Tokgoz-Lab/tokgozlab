import { getCollection, type CollectionEntry } from 'astro:content';

// Author names are compared as whole names (never surname-only, so a namesake
// collaborator isn't claimed) after Unicode NFC normalisation, whitespace
// collapsing and case folding — "Tokgöz" typed with a combining diaeresis or
// in different case still matches.
export const normalizeName = (name: string) => name.normalize('NFC').replace(/\s+/g, ' ').trim().toLocaleLowerCase('tr');

// A team member's `name` plus any `authorNames` spellings used in author lists.
export const memberNames = (member: CollectionEntry<'team'>) =>
  new Set([member.data.name, ...(member.data.authorNames ?? [])].map(normalizeName));

let labNames: Promise<Set<string>> | undefined;

// Every team entry (alumni included) counts as a lab author.
export const getLabAuthorMatcher = async () => {
  labNames ??= getCollection('team').then((team) => new Set(team.flatMap((member) => [...memberNames(member)])));
  const names = await labNames;
  return (author: string) => names.has(normalizeName(author));
};
