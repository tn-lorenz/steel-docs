// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
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
						{ label: 'Set up', slug: 'guides/getting-started/set-up' }, 
						{ label: 'For users', slug: 'guides/getting-started/for-users' }, 
						{ label: 'For developers', slug: 'guides/getting-started/for-devs' },
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
