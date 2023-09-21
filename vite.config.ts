import { fileURLToPath, URL } from "node:url";

import svgr from "@honkhonk/vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@src": fileURLToPath(new URL("./src", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@redux": fileURLToPath(new URL("./src/redux", import.meta.url)),
      "@users": fileURLToPath(new URL("./src/users", import.meta.url)),
      "@reviews": fileURLToPath(new URL("./src/reviews", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
