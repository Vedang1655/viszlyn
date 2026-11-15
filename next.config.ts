import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // src/lib/bannerImage.tsx reads an article's hero PNG from public/ with a path built at
  // runtime, so file tracing would copy ALL of public/ (every hero image and entry photo)
  // into each article / opengraph-image / twitter-image function. Those routes are
  // pre-rendered at build time (and the code falls back to a generated banner), and public/
  // is served as static files anyway — so keep it out of the function bundles. This keeps
  // Vercel's Function Storage from growing with every new article.
  outputFileTracingExcludes: {
    "/rankings/**": ["./public/**/*"],
    // sharp (~47 MB with its native builds) is only used by next/image optimisation, which
    // this site doesn't use (plain <img>; share images are pre-rendered). Keep it out of
    // every function bundle.
    "/**": ["./node_modules/sharp/**/*", "./node_modules/@img/**/*"],
  },
};

export default nextConfig;
