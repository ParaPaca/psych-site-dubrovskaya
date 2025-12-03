import { seoConfig } from '@/lib/seo';

export default function sitemap() {
  const lastModified = new Date();
  const base = seoConfig.siteUrl;

  return [
    {
      url: `${base}/`,
      lastModified,
    },
    {
      url: `${base}/education`,
      lastModified,
    },
    {
      url: `${base}/consent`,
      lastModified,
    },
    {
      url: `${base}/faq`,
      lastModified,
    },
    {
      url: `${base}/main`,
      lastModified,
    },
  ];
}
