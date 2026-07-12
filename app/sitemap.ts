import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const ROUTES = [
  '',
  'about',
  'group',
  'announcements',
  'shareholders',
  'contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `https://jienterprise.org/${route ? `${route}/` : ''}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
