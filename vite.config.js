import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// A-Frame registers <a-*> as web components at runtime; tell Vue to leave them alone.
export default defineConfig({
  base: "./",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("a-"),
        },
      },
    }),
  ],
});
