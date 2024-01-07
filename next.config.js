/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.bookofthemonth.com",
        port: "",
        pathname: "/covers/list/**",
      },
    ],
  },
};

module.exports = nextConfig;
