import { nodePolyfills } from "vite-plugin-node-polyfills";
import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  build: {
    target: "es2020",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  plugins: [sveltekit(), nodePolyfills()],
  define: {
    __APP_VERSION__: 1,
  },
};

export default config;
