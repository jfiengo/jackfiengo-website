const modules = import.meta.glob('../posts/*.md', { eager: true, import: 'default' });

// Drafts compile to null in production builds (see plugins/markdown.js).
export const posts = Object.values(modules)
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
