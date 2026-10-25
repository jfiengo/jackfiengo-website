---
name: blog-post
description: Format a draft into a blog post for this site's /writing section. Use when adding, importing, or editing a post, or when given an Obsidian note or Google Doc draft to publish.
---

# Blog post

Posts are markdown files in `website/src/posts/`. `website/plugins/markdown.js` compiles them to HTML at build time, and `website/src/pages/Post.css` (`.prose`) styles every element. The author's words are the content: you **typeset** the draft, you don't rewrite it. Fix markup, structure, and obvious typos; leave voice, phrasing, and argument alone unless asked.

## Steps

1. **File.** Create `website/src/posts/<slug>.md`. The filename is the URL (`/writing/<slug>`): lowercase, hyphenated, 3–6 words, no date prefix. Renaming a published post breaks its link, so pick the slug once.
2. **Frontmatter.** The build fails if `title`, `date`, or `summary` is missing:
   ```yaml
   ---
   title: Sentence case, no trailing period
   date: 2026-10-24          # YYYY-MM-DD, the publish date
   summary: One sentence, under ~25 words, shown on the index and as the dek under the title.
   draft: true               # optional; drafts show only in `npm run dev`
   ---
   ```
   Draft the summary from the post if the author didn't give one, and flag it for their review.
3. **Body.** Apply every rule in *Typesetting rules* below.
4. **Verify.** `cd website && npm run build` passes, and `npm run lint` is clean. Report the URL path and anything you changed beyond markup (the summary you wrote, typos fixed, Obsidian syntax converted).

## Typesetting rules

- **Opening.** The first block is a paragraph: it gets the drop cap. Move a leading heading, image, or quote below the first paragraph.
- **No H1.** The title comes from frontmatter. Sections are `##`; subsections `###`; nothing deeper.
- **Headings** are short and in sentence case, with no trailing punctuation.
- **Paragraphs** are separated by one blank line, and each paragraph is one unwrapped line (Obsidian and Google Docs exports often hard-wrap or double-space).
- **Lists** use `-` and `1.`, and the items are grammatically parallel. Turn prose that is secretly a list into a list only when the author's draft already reads that way.
- **Blockquotes** render as large italic pull quotes, so keep them to a sentence or two of real quotation or a highlighted line.
- **Code** blocks are fenced with a language tag. Inline `code` is for identifiers, commands, and file names.
- **Typography.** Use curly quotes and apostrophes (“ ” ‘ ’), an em dash (—) with no spaces for asides, an en dash (–) for ranges, and `…` for ellipses. Leave code spans and blocks untouched.
- **Scene breaks** are `---` on its own line.
- **Links** are inline `[text](url)` with descriptive text, never "click here". Footnotes aren't supported, so turn them into inline parentheticals or links.
- **Images** go in `website/public/writing/<slug>/` and are referenced as `![Alt text describing the image](/writing/<slug>/name.jpg)` on their own line. Every image gets real alt text, and files are compressed to under ~300 KB.

## Converting from sources

- **Obsidian.** `[[Note]]` and `[[Note|text]]` become plain text, or a real link if the target is public. `![[image.png]]` becomes a standard image (copy the file per the image rule). Callouts (`> [!note]`) become a plain paragraph or a blockquote. Remove `#tags` and Obsidian-only frontmatter keys.
- **Google Docs.** Export with *File → Download → Markdown*. Remove escaped characters (`\-`, `\*`), stray `**` around whitespace, and base64-embedded images (save them as files instead).

`website/src/posts/style-guide.md` is a draft showing every supported element. Run `npm run dev` and open `/writing/style-guide` to check how anything renders.
