import type { MiddlewareNext } from "astro";
import type { APIContext } from "astro";
import { createRuntimeApp } from "bknd/adapter";
import { config } from "./bknd";

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const request = context.request;
  const url = new URL(request.url);

  const app = await createRuntimeApp(
    {
      ...config,
      onBuilt: async (app) => {
        app.registerAdminController({
          assetsPath: "/bknd/",
          adminBasepath: "/admin"
        });
      }
    },
    context
  );

  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/admin")) {
    const response = await app.fetch(request);
    if (response.status !== 404) {
      return response;
    }
  }

  return next();
}
