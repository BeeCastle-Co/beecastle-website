/* Find repeated structural blocks that should be data instead of markup.

   READ ONLY. This never writes, edits or moves a file. It prints a report and
   exits. That distinction matters: this repo previously accumulated 104
   one-off scripts that reached in and rewrote the source, and rule 2 forbids
   that. An analysis command that only reads is a different thing.

   Run it with: pnpm find-repeats

   Why it exists. Hand-repeated blocks are how a site rots: the tenth
   testimonial gets pasted in with slightly different markup, and changing the
   heading style then means editing ten places. Worse, the content is trapped
   in markup, so it cannot be moved into a CMS without a rewrite.

   Promoting repeats into a content collection is also the migration path to
   Contentful. A collection maps one to one onto a Contentful content type, and
   the frontmatter fields map onto its fields. */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const ROOT = process.cwd();
const SRC = join(ROOT, 'src');
const THRESHOLD = 3;          // three or more is a pattern, not a coincidence
const PROSE_CHARS = 40;       // text this long means it is content, not chrome

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (['.astro', '.md'].includes(extname(full))) out.push(full);
  }
  return out;
}

/** Strip the frontmatter and any <style>/<script> block: only markup counts. */
function markupOf(source) {
  return source
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '');
}

/** Blocks already generated from data are fine. Skip files that .map() them. */
function isGenerated(markup, className) {
  const near = new RegExp(`\\.map\\([^)]*\\)[\\s\\S]{0,400}${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  return near.test(markup);
}

const findings = [];

/* A class made only of Tailwind utilities is layout scaffolding, not a thing.
   Semantic classes (ct__card, post, tier) are what indicate a repeated entity. */
const UTILITY = /^(mx|my|mt|mb|ml|mr|p|px|py|pt|pb|w|h|max|min|flex|grid|gap|items|justify|text|font|bg|border|rounded|shadow|absolute|relative|block|inline|hidden|space|leading|tracking|overflow|z|top|bottom|left|right|order|col|row|sr|not|group|aspect|object|opacity|transition|duration|hover|focus|sm|md|lg|xl)[-:\[]/;

/* Bare utilities carry no dash, so the prefix test above misses them. */
const BARE = new Set([
  'flex', 'grid', 'block', 'inline', 'hidden', 'relative', 'absolute', 'fixed',
  'sticky', 'container', 'group', 'contents', 'static', 'visible', 'invisible',
  'truncate', 'italic', 'underline', 'uppercase', 'lowercase', 'capitalize',
  'rounded', 'border', 'shadow', 'prose', 'wrap', 'rv',
]);

const isSemantic = (cls) => !UTILITY.test(cls) && !BARE.has(cls);

for (const file of walk(SRC)) {
  const markup = markupOf(readFileSync(file, 'utf8'));
  const counts = new Map();

  for (const m of markup.matchAll(/<(\w+)[^>]*\sclass="([^"{}]+)"/g)) {
    const [, tag, cls] = m;
    const first = cls.trim().split(/\s+/)[0];
    if (!isSemantic(first)) continue;            // skip utility-only wrappers
    const key = `${tag}.${first}`;
    if (!counts.has(key)) counts.set(key, { count: 0, cls: first, tag, at: [] });
    const e = counts.get(key);
    e.count += 1;
    e.at.push(m.index);
  }

  for (const [key, e] of counts) {
    if (e.count < THRESHOLD) continue;
    if (isGenerated(markup, e.cls)) continue;

    /* Does each occurrence carry words? Sample a window after each one and
       take the median, so one long block does not carry the whole verdict. */
    const lengths = e.at.map((i) => {
      const text = markup.slice(i, i + 700).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      return text.length;
    }).sort((a, b) => a - b);
    const median = lengths[Math.floor(lengths.length / 2)] ?? 0;
    if (median < PROSE_CHARS) continue;          // layout repetition is fine

    const sample = markup.slice(e.at[0], e.at[0] + 700)
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 70);

    findings.push({ file: relative(ROOT, file), selector: key, count: e.count, sample });
  }
}

findings.sort((a, b) => b.count - a.count);

if (findings.length === 0) {
  console.log('\nNo hand-repeated content blocks. Anything repeated is generated from data.\n');
  process.exit(0);
}

console.log(`\nFound ${findings.length} repeated content block(s) written out by hand.\n`);
for (const f of findings) {
  console.log(`  ${f.count}x  ${f.selector}   in ${f.file}`);
  console.log(`      "${f.sample}..."`);
  console.log();
}

console.log(`Which one to use:

  A data array in src/data/
    Fixed lists that change when the code changes: blog categories, the
    nav links, the homepage tools.

  A content collection in src/content/
    Things the owner adds and removes over time: posts, testimonials, plans,
    products, team members. One Markdown file per entry, with a schema in
    src/content.config.ts that is checked at build time.

Prefer a collection when in doubt. It is the shape that moves to Contentful
later without a rewrite: a collection becomes a content type, and its
frontmatter fields become that type's fields.

This command only reads. It has changed nothing.
`);
