/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    // PPR доступен только в canary-релизах Next.js; отключаем, чтобы билд не падал.
    ppr: false,
    typedRoutes: true,
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
