import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages (project page) sirve la web bajo /psico-web/.
// Al migrar a dominio propio, cambiar base a '/' y anadir public/CNAME.
export default defineConfig({
  base: '/psico-web/',
  plugins: [react()],
});
