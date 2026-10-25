---
title: A Style Guide for the Journal
date: 2026-10-24
summary: Every element the post template supports, in one place, for checking typography.
draft: true
---

This opening paragraph gets the drop cap and full-ink colour, so a post should open with a real sentence rather than a heading or an image. Everything below exercises one element of the prose styles.

## A section heading

Body copy runs at a comfortable measure with **strong emphasis**, *italic emphasis*, [an inline link](https://example.com), and `inline code` for identifiers like `import.meta.glob`.

### A small-caps subheading

- Unordered lists use an en dash in the accent colour
- Keep items parallel in grammar
- Nest sparingly

1. Ordered lists use italic numerals
2. Use them when sequence matters

> A blockquote renders as a pull quote: italic display type behind a single accent rule.

```js
// Fenced code sits on a slightly deeper paper tone
const posts = import.meta.glob('../posts/*.md', { eager: true });
```

| Element | Markdown       |
| ------- | -------------- |
| Rule    | `---`          |
| Image   | `![alt](/src)` |

---

A short centred rule, above, marks a change of scene.
