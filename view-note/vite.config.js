import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "viewNote",
      filename: "remoteEntry.js",
      exposes: {
        "./ViewNote": "./src/ViewNote.jsx",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build :{
    target: 'esnext',
    minify:false
  },
  server: {
    port: 5003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: true
  },
});
