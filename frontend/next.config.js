/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    hostname: process.env.HOST_NAME,
  },
};

module.exports = nextConfig;
