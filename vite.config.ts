import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: true, // Équivalent à 0.0.0.0
        // On retire la config HMR manuelle qui causait le conflit
        watch: {
          usePolling: true,
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react/jsx-runtime', 'swiper', 'swiper/react'],
        force: false
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: undefined
          }
        }
      }
    };
});
