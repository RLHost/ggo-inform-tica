import { MetadataRoute } from 'next';
import { servicesData } from '../src/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ggoinformatica.com.br';

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ];

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
