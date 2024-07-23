/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        // hostname: 'wolrus-chel.ru'
        hostname: '127.0.0.1'
      }
    ]
  },
  reactStrictMode: false,
};

export default nextConfig;