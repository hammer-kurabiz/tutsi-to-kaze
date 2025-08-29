// frontend/vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        publicDir: false,
        outDir: '../assets',
        manifest: false,
        rollupOptions: {
        input: {
            main: './main.js',
        },
        output: {
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name][extname]',
        },
        },
        emptyOutDir: false,
    },
});