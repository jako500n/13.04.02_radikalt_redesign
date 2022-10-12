// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        billet: resolve(__dirname, "src/billet.html"),
        frivillige: resolve(__dirname, "src/frivillige.html"),
        om: resolve(__dirname, "src/om.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        program: resolve(__dirname, "src/program.html"),
        singleview: resolve(__dirname, "src/singleview.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
