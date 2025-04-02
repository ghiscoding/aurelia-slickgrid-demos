import { defineConfig, PluginOption } from 'vite';
import aurelia from '@aurelia/vite-plugin';
// import { resolve } from 'path';

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  esbuild: {
    target: "es2020"
  },
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src') // Adjust if your source folder is different
  //   }
  // },
  plugins: [
    aurelia({
      // useDev: true,
    }) as PluginOption,
  ],
  preview: {
    port: 8082,
  },
  server: {
    port: 8082,
    cors: true,
    host: 'localhost',
    hmr: {
      clientPort: 8082,
    },
  },
  build: {
    outDir: 'website',
    emptyOutDir: true,
    sourcemap: true
  }
});
