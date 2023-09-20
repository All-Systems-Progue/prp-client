import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ svgr(), react() ],
  resolve: {
    alias: {
      "@src": fileURLToPath(new URL('./src', import.meta.url)),
      "@utils": fileURLToPath(new URL('./src/utils', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@views": fileURLToPath(new URL('./src/views', import.meta.url))
    }
  },
  server: {
    port: 3000
  },
});
