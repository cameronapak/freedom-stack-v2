import alchemy from "alchemy";
import { Worker, D1Database, WranglerJson } from "alchemy/cloudflare";

// Initialize the Alchemy application scope
const app = await alchemy("my-first-app", {
  stage: "dev",
  phase: process.argv.includes("--destroy") ? "destroy" : "up"
});

const db = await D1Database("fs-db", {
  name: "fs-db"
});

const worker = await Worker("fs-worker", {
  name: "fs-worker",
  compatibilityFlags: ["nodejs_compat"],
  entrypoint: "./dist/_worker.js/index.js",
  bindings: {
    DB: db
  }
});

// Generate wrangler.json for local development
await WranglerJson("wrangler.json", {
  worker
});

await app.finalize();
