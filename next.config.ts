import type { NextConfig } from "next";

const isToss = process.env.IS_TOSS === 'true';

const nextConfig: NextConfig = {
  output: isToss ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
