#!/usr/bin/env node
/**
 * Guard for the no-em-dash house rule (see CLAUDE.md).
 *
 * READ ONLY. Scans src/ for the em dash (U+2014) and fails the build if it
 * finds one. En dashes are allowed where genuinely correct, such as number
 * and date ranges, so they are not checked.
 *
 * Runs automatically before `pnpm build`. Run directly with `pnpm check:dashes`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'src');
const EXTS = ['.astro', '.ts', '.tsx', '.js', '.mjs', '.md', '.mdx', '.css', '.json', '.yaml', '.yml'];
const EM_DASH = String.fromCharCode(0x2014); // written as a code so this file passes its own rule

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.some((e) => name.endsWith(e))) out.push(full);
  }
  return out;
}

const offenders = [];
for (const file of walk(SRC)) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (line.includes(EM_DASH)) offenders.push(`${relative(ROOT, file)}:${i + 1}: ${line.trim()}`);
    });
}

if (offenders.length) {
  console.error(`\nEm dash check failed (${offenders.length}).`);
  console.error('Use a colon, a comma, a full stop or brackets instead, or rewrite the sentence.\n');
  for (const o of offenders) console.error('  ' + o);
  console.error('');
  process.exit(1);
}

console.log('No em dashes in src/.');
