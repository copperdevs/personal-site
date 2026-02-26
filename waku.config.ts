import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "waku/config";

export default defineConfig({
	vite: {
		environments: {
			rsc: {
				optimizeDeps: {
					include: ["hono/tiny"],
				},
				build: {
					rollupOptions: {
						platform: "neutral",
					} as never,
				},
			},
			ssr: {
				optimizeDeps: {
					include: ["waku > rsc-html-stream/server"],
				},
				build: {
					rollupOptions: {
						platform: "neutral",
					} as never,
				},
			},
		},
		plugins: [
			tsconfigPaths(),
			react({
				babel: {
					plugins: ["babel-plugin-react-compiler"],
				},
			}),
			cloudflare({
				viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
				inspectorPort: false,
			}),
		],
	},
});
