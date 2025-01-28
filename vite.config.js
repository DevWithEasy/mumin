import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mumin/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 500, // Adjust this value if you want to suppress warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example of manual chunking
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0]; // Create chunks for each npm package
          }
        },
      },
    },
  },
});