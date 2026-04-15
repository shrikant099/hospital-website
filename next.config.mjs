/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    unoptimized: false,
    qualities: [70, 75, 80, 90], 
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers(){
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          }
        ]
      }
    ]
  },
  experimental:{
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  async redirects() {
    return [
      // Purana redirect — rakho isko
      {
        source: "/our-doctors/",
        destination: "/our-doctors",
        permanent: true,
      },
      // Home visits redirects
      { source: "/home-visits/delhi", destination: "/delhi", permanent: true },
      { source: "/home-visits/noida", destination: "/noida", permanent: true },
      { source: "/home-visits/gurgaon", destination: "/gurgaon", permanent: true },
      { source: "/home-visits/ghaziabad", destination: "/ghaziabad", permanent: true },
      { source: "/home-visits/delhi-ncr", destination: "/delhi", permanent: true },
      { source: "/inquiry", destination: "/contact-us", permanent: true },
      // Services redirects
      { source: "/services/home-care", destination: "/delhi/doctor-at-home", permanent: true },
      { source: "/services/critical-care", destination: "/delhi/icu-at-home", permanent: true },
      { source: "/services/diagnostics", destination: "/delhi/blood-test-at-home", permanent: true },
      { source: "/services/other-services", destination: "/delhi/nurse-at-home", permanent: true },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.quickhomedoctor.com",
          }
        ],
        destination: "https://quickhomedoctor.com/:path*",
        permanent: true,
      }
    ];
  },
  
};

export default nextConfig;