import { resolve } from 'node:path';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['crypto-js', 'pdfjs-dist'],
  },
  assetsInclude: [
    '**/*.worker.js',
    '**/*.worker.min.js',
    '**/*.worker.mjs',
    '**/*.worker.min.mjs',
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
