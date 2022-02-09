
   
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const config: UserConfig = {
  alias: [
    {
      find: '@',
      replacement: path.resolve(__dirname, 'src'),
    },
  ],
  plugins: [vue()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Unlocked',
      fileName: (format) => `Unlocked.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: [{
        format: 'esm',
        dir: 'dist/esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        entryFileNames: '[name].js',
      },
      {
        format: 'umd',
        // Provide global variables to use in the UMD build
        // for externalized deps
        dir: 'dist/umd',
        globals: {
          vue: 'Vue',
        },
      }],
    },
  },
}

export default config