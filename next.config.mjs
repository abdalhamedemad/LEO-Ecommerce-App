/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.wixstatic.com", "images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
    // unoptimized: true,
    minimumCacheTTL: 60000,
    // Optimize image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Set format preferences
    formats: ["image/webp"],
  },
  // Increase timeout for static page generation (includes image optimization)
  staticPageGenerationTimeout: 180000,
};

export default nextConfig;
