/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@daengle/design-system'],
  images: {
    domains: ['daengle.s3.ap-northeast-2.amazonaws.com', 'i.namu.wiki'],
  },
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET: process.env.AWS_BUCKET,
  },
};

export default nextConfig;
