/* Blog categories. Each gets a listing page at /categories/<slug>/, the same
   addresses the old site used. Colours are token names, never hex. */
export const CATEGORY_SLUGS = [
  'best-practices',
  'feature-release',
  'insights',
  'news-and-events',
  'training',
  'case-study',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export const categories: Record<CategorySlug, { label: string; blurb: string; tone: string }> = {
  'best-practices': {
    label: 'Best practices',
    blurb: 'How the best MSPs run account management, goal setting and growth.',
    tone: 'bg-magenta-soft text-ink',
  },
  'feature-release': {
    label: 'Feature release',
    blurb: 'What is new in BeeCastle, and how to get the most out of it.',
    tone: 'bg-cyan-soft text-ink',
  },
  insights: {
    label: 'Insights',
    blurb: 'Data, benchmarks and ideas for growing a managed services business.',
    tone: 'bg-periwinkle-soft text-ink',
  },
  'news-and-events': {
    label: 'News and events',
    blurb: 'Company news, webinars and events from the BeeCastle team.',
    tone: 'bg-honey-soft text-ink',
  },
  training: {
    label: 'Training',
    blurb: 'Step-by-step guides for setting up your PSA and BeeCastle.',
    tone: 'bg-mint-soft text-ink',
  },
  'case-study': {
    label: 'Case study',
    blurb: 'How MSPs around the world use BeeCastle.',
    tone: 'bg-paper-2 text-ink',
  },
};
