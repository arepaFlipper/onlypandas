import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com", protocol: "https" },
      { hostname: "avatar.iran.liara.run", protocol: "https" },
      { hostname: "i.pravatar.cc", protocol: "https" },
    ],
  },
};

export default nextConfig;
