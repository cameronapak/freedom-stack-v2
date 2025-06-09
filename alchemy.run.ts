import alchemy from "alchemy";
// import { WranglerJson } from "alchemy/cloudflare";

// Initialize the Alchemy application scope
const app = await alchemy("my-first-app", {
  stage: "dev",
  phase: process.argv.includes("--destroy") ? "destroy" : "up"
});

// Generate wrangler.json for local development
// await WranglerJson("wrangler.json", {
//   worker
// });
