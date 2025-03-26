import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "host",
      remotes: {
        addNote: "http://localhost:5001/assets/remoteEntry.js",
        listNotes: "http://localhost:5002/assets/remoteEntry.js",
        viewNote: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build :{
    target: 'esnext',
    minify:false
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    cors: true
  },
});