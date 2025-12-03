import { buildMetadata } from '@/lib/seo';
import HomePage from './home-page';

export function generateMetadata() {
  return buildMetadata({
    path: '/main',
    canonical: '/',
  });
}

export default function MainPage() {
  return <HomePage />;
}
