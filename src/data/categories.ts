/* Blog categories. Each gets a listing page at /categories/<slug>/, the same
   addresses the old site used. Colours are token names, never hex. The label
   and blurb are UI strings in src/i18n/en-AU.yml, under blog.categories.<slug>. */
import { t } from '../i18n';

export const CATEGORY_SLUGS = [
  'best-practices',
  'feature-release',
  'insights',
  'news-and-events',
  'training',
  'case-study',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

const tones: Record<CategorySlug, string> = {
  'best-practices': 'bg-magenta-soft text-ink',
  'feature-release': 'bg-cyan-soft text-ink',
  insights: 'bg-periwinkle-soft text-ink',
  'news-and-events': 'bg-honey-soft text-ink',
  training: 'bg-mint-soft text-ink',
  'case-study': 'bg-paper-2 text-ink',
};

export const categories = Object.fromEntries(
  CATEGORY_SLUGS.map((slug) => [
    slug,
    {
      label: t(`blog.categories.${slug}.label`),
      blurb: t(`blog.categories.${slug}.blurb`),
      tone: tones[slug],
    },
  ]),
) as Record<CategorySlug, { label: string; blurb: string; tone: string }>;
