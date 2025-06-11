import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { bknd } from "./bknd/bknd.integration";
import cloudflare from "@astrojs/cloudflare";
import { AppEvents } from "bknd";
import config from "./bknd.config.ts";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // https://github.com/withastro/astro/issues/12824#issuecomment-2563095382
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge"
      }
    }
  },
  integrations: [
    // config object is optional, just for demo purposes
    bknd({
      ...config,
      onBuilt: async (app) => {
        console.log("app built!");

        // listen for requests
        app.emgr.onEvent(
          AppEvents.AppRequest,
          (event) => {
            const url = new URL(event.params.request.url);
            console.log("request", url.pathname);
          },
          "sync"
        );
      },
      adminOptions: {
        ...config.adminOptions,
        // this is the default, but just for demo purposes
        // the path at where the admin panel will be available
        adminBasepath: "/admin"
      }
    })
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      persist: true,
      configPath: "wrangler.jsonc"
    }
  })
});
