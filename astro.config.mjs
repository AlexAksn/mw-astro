import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import lit from '@astrojs/lit';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
    site: 'https://alexaksn.github.io', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    base: '/mw-astro', // The base path of your project. If your project is hosted at https://my-site.dev/blog/, the base path would be "/blog".
    sitemap: true, // Generate sitemap (set to "false" to disable)
    integrations: [sitemap(), mdx(), lit(), icon(), relativeLinks()], // Add renderers to the config
});