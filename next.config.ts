/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // すべての API エンドポイントに適用
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://next-server-component-test.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS, POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
