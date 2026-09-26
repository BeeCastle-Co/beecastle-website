import { defineCollection, z, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS } from './data/categories';

/* Replica names, kept in a plain module (not the .astro registry) so this
   config does not import components. Must match REPLICA_NAMES in
   src/components/product/registry.ts. */
const REPLICAS = [
  'portfolio-health', 'company-overview', 'revenue-chart', 'whitespace-grid', 'whitespace-actions',
  'profitability', 'profitability-table', 'account-profitability', 'meeting-planner', 'health-score',
  'health-breakdown', 'client-stack', 'prospecting', 'product-summary', 'tiering', 'sales-dashboard',
  'activity', 'meeting-note', 'contacts', 'onboarding', 'monthly-profitability', 'profit-drilldown',
  'stack-builder',
] as const;
/* Named carousels; must match CAROUSEL_NAMES in src/components/product/carousels.ts. */
const CAROUSELS = ['whitespace', 'customer-success', 'profitability', 'sales'] as const;

/* Every collection here is shaped to become a Contentful content type later:
   one collection is one content type, and each frontmatter field is one field
   on that type. Keep fields flat and typed so that move needs no rewrite. */

/* Blog posts. One Markdown file per post in src/content/blog/. The filename
   is the URL: foo.md is published at /blog/foo/, the same address the post
   had on the old Hugo site. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      /** One or more of the slugs in src/data/categories.ts. */
      categories: z.array(z.enum(CATEGORY_SLUGS)).min(1),
      /** Shown on listing cards and used as the meta description. */
      summary: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/* A two-column block: words on one side, a picture on the other, alternating
   down the page. The building block of every product, solution and
   integration page. */
const featureSection = ({ image }: SchemaContext) =>
  z.object({
    /** Anchor id, so the features list at the top can link down to it. */
    id: z.string().optional(),
    heading: z.string(),
    /** Paragraphs. **bold** and [links](/x/) are allowed, nothing else. */
    paragraphs: z.array(z.string()).default([]),
    bullets: z.array(z.string()).default([]),
    image: image().optional(),
    imageAlt: z.string().optional(),
    /** A product replica (src/components/product/) shown instead of the image.
        Preferred over screenshots: sharp, current, and no real customer data. */
    replica: z.enum(REPLICAS).optional(),
    /** A small carousel of replicas instead of one, for features with more
        depth than one screen shows. Wins over replica and image. */
    carousel: z.enum(CAROUSELS).optional(),
    /** Optional button under the text. */
    cta: z.enum(['signup', 'demo']).optional(),
  });

/* The brand hue a page is tinted with. Lets each product keep its own colour,
   as it did on the old site, without anyone reaching for a hex code. */
const accent = z.enum(['cyan', 'periwinkle', 'mint', 'magenta', 'honey']);

const featurePage = ({ image }: SchemaContext) =>
  z.object({
    /** Short name, used in the nav and on cards. */
    name: z.string(),
    /** Small label above the headline. */
    eyebrow: z.string(),
    headline: z.string(),
    /** One sentence for the nav dropdown, cards and the meta description. */
    summary: z.string(),
    /** Hero paragraphs. Same inline rules as featureSection.paragraphs. */
    intro: z.array(z.string()).default([]),
    introBullets: z.array(z.string()).default([]),
    heroImage: image().optional(),
    heroImageAlt: z.string().optional(),
    /** Illustration name from src/assets/illustrations/, used on cards. */
    icon: z.string().optional(),
    accent: accent.default('cyan'),
    /** The "overview + features" panel under the hero. */
    overview: z
      .object({ heading: z.string(), body: z.string() })
      .optional(),
    sections: z.array(featureSection({ image })).default([]),
    /** Headline of the closing call-to-action band. */
    closing: z.string().default('Ready to see what BeeCastle can do for your MSP?'),
    /** "trial" offers the free trial; "contact" swaps it for Get in touch, for
        services such as BeeCastle Consult that are not a self-serve product. */
    ctaMode: z.enum(['trial', 'contact']).default('trial'),
    /** Include the "Join BeeCastle" sign-up panel near the foot of the page. */
    signup: z.boolean().default(true),
    /** Sort order in the nav and on listing pages. */
    order: z.number(),
    seoTitle: z.string().optional(),
    draft: z.boolean().default(false),
  });

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: featurePage,
});

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: featurePage,
});

const integrations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/integrations' }),
  schema: ({ image }) =>
    featurePage({ image }).extend({
      /** The partner's logo, for the integrations grid. */
      logo: image().optional(),
    }),
});

/* Customer quotes. The body is the quote itself, in Markdown so **bold**
   emphasis survives. */
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      company: z.string(),
      country: z.string().optional(),
      photo: image().optional(),
      order: z.number(),
      /** Show on the homepage. */
      featured: z.boolean().default(false),
    }),
});

/* Pricing plans. The body is optional small print shown under the card. */
const plans = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plans' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** Display price, for example "USD $299". Free text so "from" works. */
      price: z.string(),
      period: z.string().default('/month'),
      tagline: z.string(),
      features: z.array(z.string()).default([]),
      accent: accent.default('cyan'),
      image: image().optional(),
      highlighted: z.boolean().default(false),
      ctaLabel: z.string().default('Start free trial'),
      /** Where the plan's button goes. Unset: the app's sign-up page. */
      ctaHref: z.string().optional(),
      order: z.number(),
    }),
});

/* Legal pages: terms, privacy, the data processing addendum. Plain Markdown,
   each at the URL given by its `path`. */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blog, products, solutions, integrations, testimonials, plans, legal };
