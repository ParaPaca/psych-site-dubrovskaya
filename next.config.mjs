/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,  // оставляем
  typedRoutes: true,    // переносим из experimental
  experimental: {
    ppr: false,
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
