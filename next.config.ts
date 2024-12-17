import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp",],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b4plastics.com",
      },
    ],
  },
};

export default nextConfig;
