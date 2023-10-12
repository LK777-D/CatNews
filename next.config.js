const net = require("net");

if (net.setDefaultAutoSelectFamily) {
  net.setDefaultAutoSelectFamily(false);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
