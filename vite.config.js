import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import createCompressionPlugin from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    createCompressionPlugin({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240, // 10KB
      minRatio: 0.8,
      filter: /\.(js|mjs|html|css|json|txt|ico|svg|md|markdown)$/,
      deleteOriginalAssets: false,
    }),
  ],
});
