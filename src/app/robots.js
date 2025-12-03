import { seoConfig } from '@/lib/seo';

export default function robots() {
  const base = seoConfig.siteUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
