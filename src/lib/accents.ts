/* Per-page accent hues. Each product kept its own colour on the old site; this
   maps the accent name in frontmatter to token classes, so no page ever
   carries a hex code. Full class strings, so Tailwind can see them. */
export const accents = {
  cyan: { soft: 'bg-cyan-soft', softMd: 'md:bg-cyan-soft', solid: 'bg-cyan', ring: 'ring-cyan/40', text: 'text-cyan-deep' },
  periwinkle: { soft: 'bg-periwinkle-soft', softMd: 'md:bg-periwinkle-soft', solid: 'bg-periwinkle', ring: 'ring-periwinkle/40', text: 'text-cyan-deep' },
  mint: { soft: 'bg-mint-soft', softMd: 'md:bg-mint-soft', solid: 'bg-mint', ring: 'ring-mint/40', text: 'text-cyan-deep' },
  magenta: { soft: 'bg-magenta-soft', softMd: 'md:bg-magenta-soft', solid: 'bg-magenta', ring: 'ring-magenta/40', text: 'text-cyan-deep' },
  honey: { soft: 'bg-honey-soft', softMd: 'md:bg-honey-soft', solid: 'bg-honey', ring: 'ring-honey/50', text: 'text-honey-deep' },
} as const;

export type Accent = keyof typeof accents;
