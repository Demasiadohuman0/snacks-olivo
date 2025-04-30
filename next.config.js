/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["files.stripe.com"],
  },
};

module.exports = nextConfig;
