import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ ADD THIS BLOCK
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },

  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;