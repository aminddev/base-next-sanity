import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Performance: Enable React Compiler (if next version supports it)
  experimental: {
    // next 15+ has experimental support for compiler
  }
};

export default nextConfig;
