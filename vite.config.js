import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})
