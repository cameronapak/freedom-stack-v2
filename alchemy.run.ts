/// <reference types="node" />

import alchemy from "alchemy";
import { D1Database, WranglerJson, Vite, Website } from "alchemy/cloudflare";
import path from "node:path";

// Initialize the Alchemy application scope
const app = await alchemy("my-first-app", {
  stage: "dev",
  phase: process.argv.includes("--destroy") ? "destroy" : "up"
});

const db = await D1Database("fs-v2-db", {
  name: "fs-v2-db"
});

const worker = await Website("fs-v2-astro-website", {
  // Default build command, can be overridden by props.command
  command: "npm run build",
  // Default entry point for @astrojs/cloudflare adapter
  main: path.join("dist", "_worker.js"),
  // Default static assets directory for @astrojs/cloudflare adapter
  assets: "dist",
  // Enable nodejs_compat flag for Astro compatibility
  compatibilityFlags: ["nodejs_compat"],
  // Enable wrangler by default, common for Astro/Cloudflare deployments
  wrangler: true,
  bindings: {
    DB: db
  }
});

console.log({
  url: worker.url
});

// Generate wrangler.json for local development
await WranglerJson("wrangler.json", {
  worker
});

await app.finalize();
