/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "localhost",
      "d2gpdf5dvnjyvd.cloudfront.net",
    ],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2gpdf5dvnjyvd.cloudfront.net",
        port: "",
        pathname: "/",
      },
    ],
  },

  env: {
    GET_COFFEES_URL: process.env.GET_COFFEES_URL,
  },


};

export default nextConfig;