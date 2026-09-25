import type { APIRoute } from 'astro';

/* robots.txt, generated so previews and branch deploys can refuse indexing
   while production advertises the sitemap. */
export const GET: APIRoute = ({ site }) => {
  const isProduction = process.env.CONTEXT === 'production' || process.env.CONTEXT === undefined;
  const body = isProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
    : `# Preview deploy. Not for indexing.\nUser-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
