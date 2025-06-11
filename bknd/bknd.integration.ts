import { fileURLToPath } from "url";
import { join } from "path";
import type { AstroIntegration } from "astro";
import type { RuntimeBkndConfig } from "bknd/adapter";

export type AstroBkndIntegrationOptions = Pick<
  RuntimeBkndConfig,
  "app" | "onBuilt" | "beforeBuild" | "buildConfig" | "adminOptions"
> & {};

export function bknd(opts?: AstroBkndIntegrationOptions): AstroIntegration {
  return {
    name: "bknd",
    hooks: {
      "astro:config:setup": ({ updateConfig, addMiddleware, logger }) => {
        const root = fileURLToPath(new URL(".", import.meta.url));
        updateConfig({
          vite: {
            resolve: {
              alias: {
                // @TODO - Make this use miniflare
                "cloudflare:workers": join(root, "cf.js")
              }
            }
          }
        });

        addMiddleware({
          order: "pre",
          entrypoint: join(root, "middleware.ts")
        });
      },
      "astro:server:setup": ({ server }) => {
        const clientLocalsSymbol = Symbol.for("astro.locals");

        server.middlewares.use(async function middleware(req, _res, next) {
          Reflect.set(req, clientLocalsSymbol, {
            // @ts-ignore
            ...req[clientLocalsSymbol],
            bknd: opts
          });
          next();
        });
      }
    }
  };
}
