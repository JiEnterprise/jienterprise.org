import type { MetadataRoute } from 'next';
import { businesses, stories } from '@/lib/data';

// Required for `output: export` — emit sitemap.xml at build time.
export const dynamic = 'force-static';

const BASE = 'https://jienterprise.org';

const legalDocs = ['privacy-policy', 'terms-of-use', 'cookie-policy', 'disclaimer'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/news',
    '/subsidiaries',
    '/careers',
    '/investor-relations',
    '/sustainability',
    '/contact',
  ].map((path) => ({
    url: `${BASE}${path}/`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  return [
    ...staticRoutes,
    ...stories.map((s) => ({
      url: `${BASE}/news/${s.slug}/`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...businesses.map((b) => ({
      url: `${BASE}/subsidiaries/${b.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...legalDocs.map((doc) => ({
      url: `${BASE}/legal/${doc}/`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
