// TODO: проставить потом реальный урл
const defaultUrl =
  (
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://psych-site-dubrovskaya.vercel.app'
  ).replace(/\/$/, '') || 'http://localhost:3000';

export const seoConfig = {
  siteUrl: defaultUrl,
  defaultTitle: 'Яна Дубровская — клинический психолог',
  defaultDescription:
    'Помогаю справляться с тревогой и стрессом, выстраивать отношения, находить опору в себе и достигать целей.',
  ogPath: '/opengraph-image',
};

export function getMetadataBase() {
  try {
    return new URL(defaultUrl);
  } catch {
    return new URL('http://localhost:3000');
  }
}

export function buildMetadata({
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  path = '/',
  canonical,
}) {
  const canonicalPath = canonical || path || '/';
  const imageUrl = `${seoConfig.siteUrl}${seoConfig.ogPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: seoConfig.defaultTitle,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'ru_RU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
