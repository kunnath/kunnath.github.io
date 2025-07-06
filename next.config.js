/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['vercel.app']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  swcMinify: true,
};

module.exports = nextConfig;
