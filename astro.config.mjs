// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import { getRelativeLocaleUrl } from 'astro:i18n';

import en from './src/content/i18n/en.json';
import de from './src/content/i18n/de.json';

//const t = Astro.currentLocale;
//const t = getRelativeLocaleUrl;
//const LOCALE = process.env.LANG;
//const t = LOCALE === 'en' ? en : de;

export default defineConfig({
	integrations: [
		starlight({
			title: {
        		en: 'Steel-Docs',
        		'de': 'Steel-Doku',
      		},
			social: [{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/MwChEHnAbh' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/4lve/SteelMC' }],
			sidebar: [
				{
					label: 'Getting started',
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
});
