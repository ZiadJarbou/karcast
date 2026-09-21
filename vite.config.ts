import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  publicDir: "web-public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});