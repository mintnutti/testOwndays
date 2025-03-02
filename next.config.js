/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
