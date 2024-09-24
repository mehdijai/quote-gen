import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@style": path.resolve(__dirname, "./src/scss"),
      "@page": path.resolve(__dirname, "./src/pages"),
      "@cmp": path.resolve(__dirname, "./src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@style/main.scss";`,
      },
    },
  },
});
