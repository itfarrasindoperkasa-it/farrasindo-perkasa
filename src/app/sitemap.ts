import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://farrasindo-cp.co.id";
  const currentDate = new Date();

  // Define all static routes with priorities and change frequencies
  const routes = [
    // Homepage (redirect, low priority)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    // Indonesian pages (primary market, highest priority)
    {
      url: `${baseUrl}/id`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/id/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/id/product-service`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/id/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/id/news-event`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/id/career`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/id/csr`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/id/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // English pages (secondary market)
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/product-service`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/en/news-event`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/career`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/en/csr`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return routes;
}
