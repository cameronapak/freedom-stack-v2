import type { AstroGlobal } from "astro";
import { getApp as getBkndApp } from "bknd/adapter/astro";
import config from "../bknd.config";

export { config };

export async function getApp() {
  return await getBkndApp(config);
}

export async function getApi(requestHeaders: Headers, opts?: { mode: "static" } | { mode?: "dynamic"; verify?: boolean }) {
  const app = await getApp();

  if (opts?.mode !== "static" && opts?.verify) {
    const api = app.getApi({ headers: requestHeaders });
    await api.verifyAuth();
    return api;
  }

  return app.getApi();
}
