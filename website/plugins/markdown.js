import path from 'node:path';
import { marked } from 'marked';
import { parse as parseYaml } from 'yaml';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const REQUIRED_FIELDS = ['title', 'date', 'summary'];
const WORDS_PER_MINUTE = 230;

// Compiles markdown posts to HTML at build time, so no markdown parser ships to the browser.
// Each `.md` module default-exports { slug, title, date, summary, draft, readingTime, html },
// or null for drafts in production builds so their content never ships.
export default function markdown() {
  let isBuild = false;

  return {
    name: 'markdown-posts',
    configResolved(config) {
      isBuild = config.command === 'build';
    },
    transform(source, id) {
      if (!id.endsWith('.md')) return null;

      const match = source.match(FRONTMATTER);
      if (!match) this.error(`${id}: missing frontmatter block`);

      const meta = parseYaml(match[1]) ?? {};
      const missing = REQUIRED_FIELDS.filter((field) => !meta[field]);
      if (missing.length) this.error(`${id}: frontmatter missing ${missing.join(', ')}`);

      if (isBuild && meta.draft) return { code: 'export default null;', map: null };

      const body = source.slice(match[0].length);
      const date = meta.date instanceof Date ? meta.date.toISOString().slice(0, 10) : String(meta.date);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) this.error(`${id}: date must be YYYY-MM-DD`);

      const words = body.split(/\s+/).filter(Boolean).length;
      const post = {
        ...meta,
        slug: path.basename(id, '.md'),
        date,
        draft: Boolean(meta.draft),
        readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
        html: marked.parse(body),
      };

      return { code: `export default ${JSON.stringify(post)};`, map: null };
    },
  };
}
