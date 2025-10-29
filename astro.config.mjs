import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from "starlight-ion-theme";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
      starlight({
          plugins: [ion()],
          customCss: [
              './src/styles/global.css',
      		],
          title: {
              en: 'Steel-Docs',
              'de': 'Steel-Doku',
      		},
          social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/MwChEHnAbh' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/4lve/SteelMC' }],
          sidebar: [
              {
                  label: 'Getting started',
                  // We don't fore labels here so the pages can either fallback to their (language-specific) title or a sidebar override from the frontmatter!
                  items: [
                      { slug: 'guides/getting-started/set-up' },
                      { slug: 'guides/getting-started/for-users' },
                      { slug: 'guides/getting-started/for-devs' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
          
          defaultLocale: 'root',
          locales: {
              // English docs in `src/content/docs/en/`
              root: {
                  label: 'English',
                  lang: 'en'
              },
              // Sprich Deutsch, du Hurensohn :O) `src/content/docs/de/`
              'de': {
                  label: 'Deutsch',
                  lang: 'de',
              },
          },
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});