import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/antigravity-pulse",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
