/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  trailingSlash: true,
  assetPrefix: '/',
};

module.exports = nextConfig;
