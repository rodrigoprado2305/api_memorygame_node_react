import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import configs from 'resolver-options'; // Comment this line

export default defineConfig({
  plugins: [react()], // Remove configs({development: true})
  assetsInclude: ['**/*.mp3'],
  server: {
    hmr: {
      overlay: false,
    },
  },
});