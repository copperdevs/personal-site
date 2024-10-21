import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

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
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
