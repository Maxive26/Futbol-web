/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        port: "",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
