/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    Alpine: import("alpinejs").Alpine;
  }
}

declare namespace App {
  interface Locals {
    user?: {
      token: string;
    };
  }
}

export {};
