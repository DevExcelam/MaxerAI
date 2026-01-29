import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['clsx', 'tailwind-merge'],
  },
};

export default nextConfig;
