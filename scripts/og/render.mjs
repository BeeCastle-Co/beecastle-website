/* Renders og.html to public/og-default.png at 1200x630.
   Run from the repo root: node scripts/og/render.mjs
   Needs Playwright (npx playwright install chromium) the first time. */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
const here = fileURLToPath(new URL('.', import.meta.url));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.goto(`file://${here}og.html`, { waitUntil: 'networkidle' });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: `${here}../../public/og-default.png` });
await b.close();
console.log('Wrote public/og-default.png');
