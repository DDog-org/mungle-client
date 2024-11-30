/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@daengle/design-system'],
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET: process.env.AWS_BUCKET,
  },
  reactStrictMode: true,
  transpilePackages: ['@daengle/design-system', '@daengle/services'],
};

export default nextConfig;
