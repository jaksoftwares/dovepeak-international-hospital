/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig