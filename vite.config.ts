import { defineConfig } from 'vite';
import path from 'path'
import react from "@vitejs/plugin-react"

export default defineConfig({
    base: '/boost/',
    // Add your Vite configuration options here
    server: {
        port: 3000,
        open: true,
    },
    define: {
    __API_BASE__: JSON.stringify('https://zenleafdispensaries.com/'),
  },
    build: {
        outDir: 'dist',
    }, 
     plugins: [react()],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
