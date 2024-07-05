/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'chel.wolrus.org'
      }
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;