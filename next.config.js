/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/testOwndays",
  assetPrefix: "/testOwndays",
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
