import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import lightningcss from 'vite-plugin-lightningcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), lightningcss({
    browserslist: '>= 0.25%',
  }),],
})
