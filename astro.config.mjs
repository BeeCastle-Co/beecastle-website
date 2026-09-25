// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import { readdirSync, readFileSync } from 'node:fs';

const FALLBACK = 'https://www.beecastle.com';

/* Canonical URLs and the sitemap are built from `site`.

   Netlify does NOT expand variables inside netlify.toml, so the deploy
   context is read here instead:

     CONTEXT           production | deploy-preview | branch-deploy
     URL               the production address
     DEPLOY_PRIME_URL  this preview or branch's own address

   so a preview describes itself rather than claiming to be the live site. */
function resolveSite() {
  const candidates = [
    process.env.PUBLIC_SITE_URL,
    process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL,
    FALLBACK,
  ];

  for (const value of candidates) {
    if (!value) continue;
    try {
      return new URL(value).href;
    } catch {
      console.warn(`[site] ignoring unusable site URL: ${JSON.stringify(value)}`);
    }
  }
  return FALLBACK;
}

/* Map of /blog/<slug>/ to the post's published date, for sitemap lastmod.
   Read straight off disk because astro:content does not exist in this file. */
const blogDates = new Map();
for (const file of readdirSync('./src/content/blog')) {
  if (!file.endsWith('.md')) continue;
  const fm = readFileSync(`./src/content/blog/${file}`, 'utf8').split('---')[1] ?? '';
  const match = fm.match(/^date:\s*(\S+)/m);
  if (match) {
    blogDates.set(`/blog/${file.replace(/\.md$/, '')}/`, new Date(match[1]).toISOString());
  }
}

export default defineConfig({
  site: resolveSite(),
  trailingSlash: 'ignore',

  /* Self-hosted fonts, matching the product (beecastle-server uses the same
     two families through next/font). Downloaded at build time and served
     from this origin, so nothing is requested from Google at runtime. */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      weights: [400, 500, 600, 700, 800],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],

  /* Old URLs that moved. Everything else keeps the address it had on the
     Hugo site, so existing links and search rankings carry over. */
  redirects: {
    '/categories': '/blog/',
    /* Two posts had "..." in their old slugs, which Astro normalises away. */
    '/blog/in-case-you-missed-it...beecastle-product-updates-april-may-2021':
      '/blog/in-case-you-missed-it-beecastle-product-updates-april-may-2021/',
    '/blog/in-case-you-missed-it...beecastle-product-updates-february-2021':
      '/blog/in-case-you-missed-it-beecastle-product-updates-february-2021/',
  },

  integrations: [
    sitemap({
      /* Thank-you pages are noindex, so they stay out of the sitemap too. */
      filter: (page) => !/\/thanks\/$/.test(new URL(page).pathname),
      serialize: (item) => {
        const date = blogDates.get(new URL(item.url).pathname);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
