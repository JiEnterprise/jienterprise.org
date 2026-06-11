import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site (HTML/CSS/JS) in `out/` for free static hosting.
  output: "export",
  // Emit `route/index.html` so static hosts resolve nested paths cleanly.
  trailingSlash: true,
  // Static export can't use the Next image optimizer.
  images: { unoptimized: true },
};

export default nextConfig;
