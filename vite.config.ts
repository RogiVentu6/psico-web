import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages (project page) sirve la web bajo /patriciaortizpsicologia-web/.
// Al migrar a dominio propio, cambiar base a '/' y anadir public/CNAME.
export default defineConfig({
  base: '/patriciaortizpsicologia-web/',
  plugins: [react()],
});
