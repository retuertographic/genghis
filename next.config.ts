import type { NextConfig } from "next";

/**
 * GITHUB_PAGES=true builds a static export for GitHub Pages (see .github/workflows/pages.yml),
 * served from NEXT_PUBLIC_BASE_PATH (e.g. "/genghis"). Otherwise: standalone server build.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      trailingSlash: true,
      basePath,
      images: { unoptimized: true },
    }
  : {
      output: "standalone",
      trailingSlash: true,
    };

export default nextConfig;
