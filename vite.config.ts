import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Violet-UI',
      fileName: (format) => `violet-ui.${format}.js`,
    },
  },
  plugins: [svelte()],
})
