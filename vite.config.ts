import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-is': 'react-is/cjs/react-is.development.js', // Replace with the correct path
    },
  },
});
