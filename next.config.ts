/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // すべての API エンドポイントに適用
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // すべてのオリジンを許可（必要に応じて制限）
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
