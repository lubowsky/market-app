import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';


export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    outDir: '../build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name)
          return `static/${ext.slice(1)}/${assetInfo.name}`
        },
      },
    },
  },
})
