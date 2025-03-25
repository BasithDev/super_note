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
        addNote: "http://localhost:4173/assets/remoteEntry.js",
        listNotes: "http://localhost:4174/assets/remoteEntry.js",
        viewNote: "http://localhost:4175/assets/remoteEntry.js",
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
    fs: {
      fs:{
        allow:[
          path.resolve(__dirname, "../add-note/src/**/*.{js,jsx,ts,tsx}"),
          path.resolve(__dirname, "../list-notes/src/**/*.{js,jsx,ts,tsx}"),
          path.resolve(__dirname, "../view-note/src/**/*.{js,jsx,ts,tsx}"),
        ]
      }
    },
  },
});