// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://tokgozlab.com',
  // English stays unprefixed at the root; Turkish lives under /tr/. Never set
  // `fallback`: in a static build it emits a redirect stub or an English copy
  // under /tr/ for every page without a Turkish route.
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: /** @type {any} */ ([tailwindcss()]),
    build: {
      assetsInlineLimit: 10240,
    }
  },

  integrations: [react()]
});
