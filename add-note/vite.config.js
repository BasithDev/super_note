import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "addNote",
      filename: "remoteEntry.js",
      exposes: {
        "./AddNote": "./src/AddNote.jsx",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build :{
    target: 'esnext',
    minify:false
  },
  server: {
    port: 5001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: true
  },
});