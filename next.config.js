/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode for better performance
  swcMinify: true,
  images: {
    domains: ['assets.example.com'],
  },
  // Performance optimizations
  experimental: {
    // Modern JavaScript optimizations
    optimizeCss: true,
    // Reduce bundle size by disabling some development features in production
    optimizePackageImports: ['react-icons'],
    scrollRestoration: true,
  },
};

