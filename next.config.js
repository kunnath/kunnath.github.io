/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
