import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbyh1vo7TFReaYXreMwg8-cgbujh1YfdBHjC42DrHRDBzQZI3jbQNTBhmf0axufqU8FC9A/exec',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
