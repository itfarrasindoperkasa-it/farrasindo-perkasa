import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Rewrites untuk proxy ke API eksternal
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: "https://api.example.com/:path*", // Ganti dengan API URL Anda
      },
      // Contoh untuk multiple API endpoints
      // {
      //   source: '/backend/:path*',
      //   destination: 'http://localhost:8000/:path*',
      // },
    ];
  },

  // Headers untuk CORS (jika diperlukan)
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
