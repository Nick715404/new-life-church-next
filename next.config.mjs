/** @type {import('next').NextConfig} */

import { hostname } from 'os';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '127.0.0.1'
      }
    ]
  }
};

export default nextConfig;