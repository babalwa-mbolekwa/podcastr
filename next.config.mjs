/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lovely-flamingo-139.convex.cloud',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sleek-capybara-771.convex.cloud',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '/**',
      },
    ],
    qualities: [75], // 👈 required in Next.js 16
  },
}

export default nextConfig
