import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://copperdevs.com",
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [
    sitemap(),
    umami({ id: "bc408a92-1357-4f9b-86ad-5f608ff9e04d" }),
  ],
});
