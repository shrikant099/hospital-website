/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  images: {
    unoptimized: true,
    qualities: [70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/our-doctors/",
        destination: "/our-doctors",
        permanent: true,
      },
    ];
  },

  // ✔ FIX WORKSPACE ROOT PROBLEM
  turbopack: {
    root: "/Users/macbookpro/Documents/Projects /hospital-website/client"
  },
};

export default nextConfig;
