import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      {
        find: "@containers",
        replacement: resolve(__dirname, "./src/containers"),
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "./src/components"),
      },
      { find: "@assets", replacement: resolve(__dirname, "./src/assets") },
      { find: "@styles", replacement: resolve(__dirname, "./src/styles") },
      {
        find: "@constants",
        replacement: resolve(__dirname, "./src/constants"),
      },
      { find: "@hooks", replacement: resolve(__dirname, "./src/hooks") },
      { find: "@types", replacement: resolve(__dirname, "./src/types") },
      { find: "@context", replacement: resolve(__dirname, "./src/context") },
      { find: "@services", replacement: resolve(__dirname, "./src/services") },
    ],
  },
});
