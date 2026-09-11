import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Print-To-Frame-Website-V3/', // <--- THIS IS REQUIRED (must match your repo name exactly)
  plugins: [react()],
});
