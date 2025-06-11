import { defineMiddleware } from "astro:middleware";
import { createRuntimeApp } from "bknd/adapter";
import { d1 } from "bknd/adapter/cloudflare";
import type { AstroBkndIntegrationOptions } from "./bknd.integration";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const request = context.request;
  const url = new URL(request.url);
  // @ts-ignore
  const cf = context.locals.runtime;
  // @ts-ignore
  const config = context.locals.bknd as unknown as AstroBkndIntegrationOptions;

  const app = await createRuntimeApp(
    {
      ...config,
      connection: d1({ binding: cf.env.DB }),
      onBuilt: async (app) => {
        app.registerAdminController({
          assetsPath: "/bknd/",
          adminBasepath: "/admin",
          ...config.adminOptions
        });
        if (config.onBuilt) {
          await config.onBuilt(app);
        }
      }
    },
    cf.env
  );

  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/admin")) {
    const response = await app.fetch(request, cf.env);
    if (response.status !== 404) {
      return response;
    }
  }

  return next();
});
