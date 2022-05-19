/**
 * astro.config.mjs
 * Configuration file for Astro to allow customization and added features.
 */

// Imports
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// Config
export default defineConfig({
    site: 'https://astro-preact-sandbox-netlify.app/',
    integrations: [preact(), sitemap()]
});