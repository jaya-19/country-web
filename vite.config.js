import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default output directory for Vite
  },
  base: process.env.NODE_ENV === 'production' ? '/your-app/' : '/',
});

