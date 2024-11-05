// import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/@:pokemonName',
        destination: '/p/:pokemonName',
      },
    ];
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
