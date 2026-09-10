import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  basePath: isGitHubPages ? "/Shamar-PDV-Site" : undefined,
  assetPrefix: isGitHubPages ? "/Shamar-PDV-Site/" : undefined
};

export default nextConfig;
