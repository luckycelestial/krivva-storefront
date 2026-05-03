import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - allowedDevOrigins is required for local network HMR access in some environments
  allowedDevOrigins: ["172.17.7.70"],
  experimental: {
    // Other experimental options if any
  },
};

export default nextConfig;
