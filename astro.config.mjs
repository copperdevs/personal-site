import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

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
	],
});
