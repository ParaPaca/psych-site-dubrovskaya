import { buildMetadata } from '@/lib/seo';
import HomePage from './main/home-page';

export function generateMetadata() {
  return buildMetadata({ path: '/' });
}

export default function RootPage() {
  return <HomePage />;
}
