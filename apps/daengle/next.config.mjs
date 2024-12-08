/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@daengle/design-system'],
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET: process.env.AWS_BUCKET,
  },
  images: {
    domains: ['daengle.s3.ap-northeast-2.amazonaws.com'], // 허용할 이미지 도메인 추가
  },
};

export default nextConfig;
