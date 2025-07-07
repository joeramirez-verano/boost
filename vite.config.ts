import { defineConfig } from 'vite';
import path from 'path'
import react from "@vitejs/plugin-react"
import { Buffer } from 'buffer'

const wpAhorization = Buffer.from(`${process.env.VITE_WORDPRESS_APPLICATION_USERNAME}:${process.env.wpAppPass}`).toString('base64')
export default defineConfig({
  base: '/boost/',
  server: {
    port: 3000,
    open: true,
  },
  define: {
    __API_BASE__: JSON.stringify('https://zenleafdispensaries.com/'),
    __WP_AUTHORIZATION__:JSON.stringify(wpAhorization),
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
