/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    formats: ["image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
