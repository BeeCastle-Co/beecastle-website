import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '../lib/blog';

/* RSS for the blog. Linked from the head of every page. */
export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  return rss({
    title: 'BeeCastle blog',
    description: 'Ideas, guides and product news for MSPs.',
    site: site!,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: p.data.categories,
    })),
  });
};
