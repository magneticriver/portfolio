// Static sitemap of every page on the site.
const pages = import.meta.glob('./**/*.astro', { eager: false });

export function GET() {
  const urls = Object.keys(pages)
    .map((p) => p.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '/'))
    .filter((p) => p !== '/404')
    .map((p) => `  <url><loc>https://mohitkhanduri.com${p === '/' ? '/' : p}</loc></url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
