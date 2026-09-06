// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://studentkit.in',
  redirects: {
    '/tools/average-speed-calculator': '/tools/speed-calculator/',
    '/tools/average-velocity-calculator': '/tools/velocity-calculator/',
    '/tools/organic-functional-groups-reference': '/tools/organic-functional-groups/'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});