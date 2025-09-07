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
        target: 'https://script.google.com/macros/s/AKfycbyfYB-DGkeG-GW0NL-hmx20G10o0e6_vlYw3ltkENUOs8OE-fg8BZDOjGxkmxF8auqmpA/exec',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
