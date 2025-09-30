import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.elisahertzler.com'

const staticRoutes = ['/']
const caseStudySlugs = [
  'peers-solutions',
  'enterprise-expansion',
  'ai-product-strategy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: path === '/' ? 1 : 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ]
  return entries
}


