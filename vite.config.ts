import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";

export default defineConfig({
  plugins: [tailwindcss(), react(), {
    name: "public-policy-files",
    generateBundle() {
      for (const fileName of ["privacy.html", "sitemap.xml"]) {
        this.emitFile({
          type: "asset",
          fileName,
          source: readFileSync(new URL(`./public/${fileName}`, import.meta.url)),
        });
      }
    },
  }],
  publicDir: "web-public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
