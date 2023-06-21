import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(() => {
  dotenv.config();
  return {
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
      }),
    ],
    build: {
      sourcemap: true,
    },
  };
});
