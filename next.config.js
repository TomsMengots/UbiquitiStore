/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.ui.com",
        port: "",
        pathname: "/fingerprint/ui/icons/*",
      },
    ],
  },
};

module.exports = nextConfig;
