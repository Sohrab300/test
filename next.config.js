/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    quality: 75,
  },
};

module.exports = nextConfig;
