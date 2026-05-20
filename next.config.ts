import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bodnarhvac.com",
      },
    ],
  },
};

export default nextConfig;
