import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';


// export default defineConfig({
//   plugins: [react(), eslint()],
//   base: '/market-app',
//   build: {
//     outDir: 'build',
//     assetsDir: 'static',
//     rollupOptions: {
//       output: {
//         entryFileNames: `[name].[hash].js`,
//         chunkFileNames: `[name].[hash].js`,
//         assetFileNames: (assetInfo) => {
//           const ext = path.extname(assetInfo.name)
//           return `static/${ext.slice(1)}/${assetInfo.name}`
//         },
//       },
//     },
//   },
// })

// import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    outDir: 'build',
    assetsDir: 'static',
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (name.endsWith('.js')) {
            return 'static/js/[name].[hash][extname]';
          } else if (name.endsWith('.css')) {
            return 'static/css/[name].[hash][extname]';
          } else if (/\.(png|jpe?g|gif|svg|webp)$/i.test(name)) {
            return 'static/img/[name].[hash][extname]';
          } else {
            return 'static/[name].[hash][extname]';
          }
        },
      },
    },
  },
});
