import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
console.log('Loaded vitest config');
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    server: {
        deps: {
          inline: [
            "react-native"
          ]
        }
      }
  }
});