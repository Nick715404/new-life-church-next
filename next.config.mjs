/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '127.0.0.1'
      }
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;