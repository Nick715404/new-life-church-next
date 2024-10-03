/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: process.env.SITE_DOMEN,
			},
		],
	},
	reactStrictMode: false,
};

export default nextConfig;
