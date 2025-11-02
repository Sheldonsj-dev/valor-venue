import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep base "/" for a custom domain on GitHub Pages.
// HashRouter will handle routes, and we copy dist/404.html after build.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});