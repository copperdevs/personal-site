import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

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
    integrations: [sitemap(), preact()],
});