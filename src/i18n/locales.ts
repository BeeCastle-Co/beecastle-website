/* The languages the site offers, in menu order. Add one here (with its flag
   in Flag.astro and its YAML overlay) and it appears in the footer menu. */
export const LOCALES = [
  { code: 'en-AU', name: 'English (Australia)', flag: 'au' },
  { code: 'en-US', name: 'English (US)', flag: 'us' },
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];
