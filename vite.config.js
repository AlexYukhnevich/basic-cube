import { defineConfig } from 'vite';

export default defineConfig({
  root: "src/",
  publicDir: "static/",
  server: {
    port: 4200,
    host: '0.0.0.0',
    // open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  }
})