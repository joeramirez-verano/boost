import { defineConfig } from 'vite';
import path from 'path'
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: '/boost/',
  server: {
    port: 3000,
    open: true,
  },
  define: {
    __API_BASE__: JSON.stringify('https://zenleafdispensaries.com/'),
  },
    build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/index-BT_039v4.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/index-Dm-0xfUw.css';
          }
          return 'assets/[name][extname]';
        },
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
