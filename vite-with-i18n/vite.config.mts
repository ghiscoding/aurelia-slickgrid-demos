import aurelia from '@aurelia/vite-plugin';
import { defineConfig, type PluginOption } from 'vite';

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [
    aurelia({
      useDev: true,
    }) as PluginOption,
  ],
  preview: {
    port: 7920,
  },
  server: {
    port: 7920,
    cors: true,
    host: 'localhost',
    hmr: {
      clientPort: 7920,
    },
  },
  build: {
    emptyOutDir: true,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }

          return 'index';
        },
      },
    },
  },
  optimizeDeps: {
    include: ['jspdf'],
  },
  resolve: {
    alias: {
      jspdf: 'jspdf/dist/jspdf.es.min.js',
    },
  },
});
