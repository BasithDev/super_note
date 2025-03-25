import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "listNotes",
      filename: "remoteEntry.js",
      exposes: {
        "./ListNotes": "./src/ListNotes.jsx",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build :{
    target: 'esnext',
    minify:false
  },
  server: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
