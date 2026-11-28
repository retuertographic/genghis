import type { NextConfig } from "next";

/**
 * GITHUB_PAGES=true builds a static export for GitHub Pages (see .github/workflows/pages.yml),
 * served from NEXT_PUBLIC_BASE_PATH (e.g. "/genghis"). Otherwise: standalone server build.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

/** Images are pre-sized by scripts/optimize-images.mjs and picked by src/image-loader.ts. */
const images: NextConfig["images"] = {
  loader: "custom",
  loaderFile: "./src/image-loader.ts",
  deviceSizes: [640, 828, 1080, 1200, 1920],
  imageSizes: [64, 128, 256, 384],
};

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath,
      images,
      experimental: { globalNotFound: true },
    }
  : {
      output: "standalone",
      trailingSlash: true,
      images,
      experimental: { globalNotFound: true },
    };

export default nextConfig;
