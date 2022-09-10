/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@components': path.resolve(__dirname, './components'),
        '@pages': path.resolve(__dirname, './pages'),
        '@styles': path.resolve(__dirname, './styles'),
        '@types': path.resolve(__dirname, './types'),
        '@utils': path.resolve(__dirname, './utils'),
      },
      ...config.resolve
    };
    return config;
  }
}

module.exports = nextConfig