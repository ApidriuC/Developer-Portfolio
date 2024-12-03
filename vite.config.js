import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Developer-Portfolio/',
  assetsInclude: ['**/*.svg'],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ]
    }
  }
})
