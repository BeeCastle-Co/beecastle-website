/* UI strings. en-AU.yml holds every string and is what the static HTML is
   built with; en-US.yml is an overlay of only the keys that differ, plus a
   spelling map. US visitors get the overlay applied in the browser by
   src/components/Localise.astro, so every page keeps a single URL.

   Both files are parsed at build time. A missing key throws, which fails
   the build, so a typo in a key never reaches the site. */
import { parse } from 'yaml';
import auSource from './en-AU.yml?raw';
import usSource from './en-US.yml?raw';

export type Vars = Record<string, string | number>;
type Tree = { [key: string]: string | Tree };

/** Flattens nested YAML into dotted keys: { nav: { about } } becomes "nav.about". */
function flatten(tree: Tree, prefix = '', out: Record<string, string> = {}): Record<string, string> {
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') out[path] = value;
    else if (value && typeof value === 'object') flatten(value, path, out);
    else throw new Error(`[i18n] ${path}: expected text or a nested group, got ${JSON.stringify(value)}`);
  }
  return out;
}

const au = flatten(parse(auSource) as Tree);
const { spelling: spellingSource = {}, ...usTree } = (parse(usSource) ?? {}) as Tree & { spelling?: Record<string, string> };

/** The US overlay: only the keys whose wording differs, as dotted keys. */
export const usOverlay = flatten(usTree as Tree);

for (const key of Object.keys(usOverlay)) {
  if (!(key in au)) throw new Error(`[i18n] en-US.yml has "${key}", which is not in en-AU.yml`);
}

/** AU to US word map, lower case, applied whole-word in the browser. */
export const usSpelling: Record<string, string> = Object.fromEntries(
  Object.entries(spellingSource).map(([from, to]) => [from.toLowerCase(), String(to).toLowerCase()]),
);

const fill = (text: string, vars?: Vars) =>
  vars ? text.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match)) : text;

/** The en-AU string for a key, with {placeholders} filled from vars. */
export function t(key: string, vars?: Vars): string {
  const text = au[key];
  if (text === undefined) throw new Error(`[i18n] missing key "${key}" in src/i18n/en-AU.yml`);
  return fill(text, vars);
}

/** True when the key exists, for optional strings. */
export const has = (key: string) => key in au;

/** Splits "Plans to suit [[every MSP]]." into the text before the marked
    words, the marked words, punctuation that sticks to them, and the rest.
    The client script in Localise.astro splits the same way. */
export function splitMark(text: string) {
  const match = /^([\s\S]*?)\[\[([\s\S]+?)\]\]([.,!?;:]*)([\s\S]*)$/.exec(text);
  if (!match) return { before: text, mark: '', glue: '', after: '' };
  const [, before, mark, glue, after] = match;
  return { before, mark, glue, after };
}
