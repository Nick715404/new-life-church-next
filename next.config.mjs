/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: `*`,
      },
    ],
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/events/youth-ural',
        destination: '/youthural',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
