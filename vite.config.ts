
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [vue()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Unlocked',
      fileName: format => `Unlocked.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: [{
        format: 'esm',
        dir: 'dist/esm',
        minifyInternalExports: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        entryFileNames: '[name].mjs',
      },
      ],
    },
  },
})
