/* Renders the tiny subset of Markdown allowed inside frontmatter strings:
   **bold**, *italic* and [text](url). Everything else is escaped, so a stray
   angle bracket in copy can never become markup. Used with set:html. */
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text: string): string {
  return escape(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, label, href) => {
      const external = /^https?:/.test(href);
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`;
    });
}

/** Turns a heading into an anchor id: "Revenue Changes" becomes "revenue-changes". */
export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });

/** Whole dollars with separators: 13712 becomes "$13,712". */
export const money = (n: number) => `$${Math.round(n).toLocaleString('en-AU')}`;
