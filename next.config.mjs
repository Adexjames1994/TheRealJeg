import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional separate output when verifying a build alongside the dev server.
  distDir: process.env.PORTFOLIO_BUILD_DIR || ".next",
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
