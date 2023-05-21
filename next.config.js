/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'images.pexels.com', 'demo.theme404.com']
  }
}

module.exports = nextConfig
