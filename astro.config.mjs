// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { site } from './src/site';

export default defineConfig({
  site: site.url,
  integrations: [
    sitemap({
      filter: (page) => !site.noIndexPaths.includes(page.replace(site.url, '')),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
