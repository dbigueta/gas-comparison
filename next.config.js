/** @type {import('next').NextConfig} */
const repo = 'gas-comparison';
const assetPrefix = `/${repo}/`;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  assetPrefix: assetPrefix,
};

module.exports = nextConfig;
