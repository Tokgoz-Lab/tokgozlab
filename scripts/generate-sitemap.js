import fs from 'fs';
import path from 'path';

// Builds dist/sitemap.xml from the generated pages themselves: every
// dist/**/index.html whose robots meta allows indexing is listed under its
// canonical URL, with the hreflang alternates the page declares. Reading the
// built HTML — instead of re-deriving routes from src/content — keeps the
// sitemap in lockstep with Layout.astro: slugs (Astro lowercases them),
// drafts, noindex pages (search, Turkish publication copies) and language
// pairs all come out exactly as the pages state them, already percent-encoded.
const DIST_DIR = path.join(process.cwd(), 'dist');

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];

const entries = fs
  .readdirSync(DIST_DIR, { recursive: true })
  .filter((file) => path.basename(file) === 'index.html')
  .flatMap((file) => {
    const html = fs.readFileSync(path.join(DIST_DIR, file), 'utf8');
    const tags = html.slice(0, html.indexOf('</head>')).match(/<(?:link|meta)\b[^>]*>/g) ?? [];
    const robots = tags.find((tag) => attr(tag, 'name') === 'robots');
    const canonical = tags.find((tag) => attr(tag, 'rel') === 'canonical');
    if (!canonical || attr(robots ?? '', 'content')?.includes('noindex')) return [];
    const alternates = tags
      .filter((tag) => attr(tag, 'rel') === 'alternate' && attr(tag, 'hreflang'))
      .map((tag) => ({ hreflang: attr(tag, 'hreflang'), href: attr(tag, 'href') }));
    return [{ loc: attr(canonical, 'href'), alternates }];
  })
  .sort((a, b) => a.loc.localeCompare(b.loc));

const urlEntries = entries
  .map(({ loc, alternates }) =>
    [
      `  <url>`,
      `    <loc>${loc}</loc>`,
      ...alternates.map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`),
      `  </url>`,
    ].join('\n'),
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries}\n</urlset>\n`;

fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml written with ${entries.length} URLs`);
