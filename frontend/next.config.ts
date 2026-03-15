import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trends.nz",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.trends.nz",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.myshopify.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
