import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "i.pravatar.cc"],
    remotePatterns: [{ hostname: "res.cloudinary.com", protocol: "https" },]
  }
};

export default nextConfig;
