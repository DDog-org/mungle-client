/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@daengle/services'], // 모노레포의 공통 패키지 추가
};

export default nextConfig;
