/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.DOMAIN_HOST,
  },
  async rewrites() {
    return [
      {
        source: "/categories",
        destination:
          "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories",
      },
      {
        source: "/books",
        destination:
          "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books",
      },
    ];
  },
  images: {
    domains: ["cdn.sejutacita.id"],
  },
};

module.exports = nextConfig;
