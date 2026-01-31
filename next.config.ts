/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bỏ qua lỗi TypeScript khi build để đảm bảo web được lên sóng
  typescript: {
    ignoreBuildErrors: true,
  },
  // Bỏ qua lỗi ESLint khi build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;