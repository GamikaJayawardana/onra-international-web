import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.onrainternational.com';
  const lastModified = new Date();

  return [
    // Main Pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/explore-universities`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Service Pages
    {
      url: `${baseUrl}/services/student-visas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/dependent-visas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/migration-advice`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/university-admission`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/visitor-visas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Legal & Policy Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}