import { getCollection } from 'astro:content';
import { DATE_LOCALES, type Locale } from '../i18n';

export const getPublishedNews = async () =>
  (await getCollection('news', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

// Dates are written as plain `YYYY-MM-DD` in frontmatter, which parses to UTC
// midnight — format in UTC too, or visitors west of UTC see the previous day.
export const formatNewsDate = (date: Date, locale: Locale = 'en') =>
  date.toLocaleDateString(DATE_LOCALES[locale], { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
