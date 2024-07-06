/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        // hostname: 'chel.wolrus.org'
        hostname: '127.0.0.1'
      }
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;