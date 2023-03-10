/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://json-api-mock.vercel.app/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig 
