/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:3001/api/:path*",
        }
      ];
    },
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kiwkiw-upload-image.firebaseapp.com',
          port: '',
          pathname: 'kiwkiw-upload-image.appspot.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  