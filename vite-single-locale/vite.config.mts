import aurelia from "@aurelia/vite-plugin";
import babel from "@rolldown/plugin-babel";
import { defineConfig, type PluginOption } from "vite";

// import { resolve } from 'path';

export default defineConfig({
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  esbuild: {
    target: "es2020",
  },
  plugins: [
    aurelia({
      useDev: true,
    }) as PluginOption,
    babel({
      plugins: [["@babel/plugin-proposal-decorators", { version: "2023-11" }]],
    }),
  ],
  preview: {
    port: 7910,
  },
  server: {
    port: 7910,
    cors: true,
    host: "localhost",
    hmr: {
      clientPort: 7910,
    },
  },
  build: {
    emptyOutDir: true,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }

          return "index";
        },
      },
    },
  },
});
