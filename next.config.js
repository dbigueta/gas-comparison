/** @type {import('next').NextConfig} */
const repo = 'https://dbigueta.github.io/gas-comparison';
const assetPrefix = `/${repo}`;
const basePath = `/${repo}`;

const nextConfig = {
  output: 'export',
  experimental: {
    images: {
      unoptimized: true,
    },
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
  basePath: basePath,
};

module.exports = nextConfig;
