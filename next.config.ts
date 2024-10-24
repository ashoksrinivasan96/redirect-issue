/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:country([a-z]{2})/legacy/kola",
        destination: "/:country/flavors/kola",
        permanent: true,
      },
      {
        source: "/:country([a-z]{2})/legacy/:slug*",
        destination: "/:country",
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;