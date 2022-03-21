import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cesium from "vite-plugin-cesium";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      "/api.e-stat.go.jp": {
        target: "http://api.e-stat.go.jp",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api.e-stat.go.jp/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@rf": "/src",
    },
  },
  plugins: [react(), cesium()],
});
