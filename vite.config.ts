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
        target: 'https://script.google.com/macros/s/AKfycbz1OsVATBozZnN0Yix3nMZFhXqmKoUMDW21QByl-6qRkgN9axnGIHV8R3Wh1DSZ5qsiLw/exec',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
