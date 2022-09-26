/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co', 'avatars.githubusercontent.com', 'media-exp1.licdn.com'],
  },
}

module.exports = nextConfig
