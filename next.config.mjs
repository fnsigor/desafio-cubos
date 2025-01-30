/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ["image.tmdb.org"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'image.tmdb.org',
    //     port: '',
    //     pathname: 't/p/original',
    //     search: '',
    //   },
    // ],
  },
};

export default nextConfig;
