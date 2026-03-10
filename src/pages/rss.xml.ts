import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const perspectives = await getCollection('perspectives');

  // Filter out drafts
  const publishedPerspectives = perspectives.filter(
    (article) => !article.data.draft
  );

  // Sort by publish date (newest first)
  const sortedPerspectives = publishedPerspectives.sort(
    (a, b) =>
      new Date(b.data.publishDate).getTime() -
      new Date(a.data.publishDate).getTime()
  );

  return rss({
    title: 'Victor Thuo — Perspectives',
    description:
      'Insights on design, behavior change, and digital strategy from Victor Thuo',
    site: context.site,
    items: sortedPerspectives.map((article) => ({
      title: article.data.title,
      pubDate: article.data.publishDate,
      description: article.data.description,
      link: `/perspectives/${article.slug}`,
    })),
  });
}
