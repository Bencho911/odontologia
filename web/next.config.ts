import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 exige declarar las calidades permitidas: son las que usan los componentes.
    qualities: [75, 82, 85, 88],
  },
};

export default nextConfig;
