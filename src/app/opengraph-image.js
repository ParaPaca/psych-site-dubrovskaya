import { ImageResponse } from 'next/og';
import { seoConfig } from '@/lib/seo';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0F0D0C 0%, #2B1F17 100%)',
          color: '#F5E5DA',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        }}>
        <p
          style={{
            color: '#F2C6A2',
            fontSize: 28,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
          Клинический психолог
        </p>
        <h1
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            margin: '18px 0 12px',
            fontFamily: 'Lora, Georgia, serif',
          }}>
          {seoConfig.defaultTitle}
        </h1>
        <p
          style={{
            fontSize: 28,
            maxWidth: 820,
            lineHeight: 1.4,
            margin: 0,
            color: '#E8D7CB',
          }}>
          {seoConfig.defaultDescription}
        </p>
        <div
          style={{
            marginTop: 36,
            display: 'flex',
            alignSelf: 'flex-start',
            alignItems: 'center',
            gap: 12,
            padding: '12px 18px',
            borderRadius: 999,
            backgroundColor: '#F5E2D4',
            color: '#2B1F17',
            fontWeight: 700,
            fontSize: 24,
          }}>
          <span>yana-dubrovskaya</span>
          <span style={{ color: '#D9642E' }}>•</span>
          <span>Психотерапия онлайн</span>
        </div>
      </div>
    ),
    size
  );
}
