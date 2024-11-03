import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/@:pokemonName',
        destination: '/p/:pokemonName',
      },
    ];
  },
};

export default nextConfig;
