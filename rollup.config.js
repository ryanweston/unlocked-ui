import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2'

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue']

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        dir: 'dist/esm',
        preserveModules: true, // preserve file names and directory structure
        preserveModulesRoot: 'src',
        exports: 'named',
      },
      {
        format: 'cjs',
        dir: 'dist/cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
      }
    ],
    external: [
      'vue'
    ],
    plugins: [
      vue(),
      peerDepsExternal(),
      typescript(),
      // removes external peer dependecies from the bundle
      // import statements aren't included in the bundle, node resolve
      // allows us to to tell rollup what external dependencies to include
      // in the bundle. 
      nodeResolve({
        ignoreGlobal: false,
        include: ['node_modules/**'],
        extensions
      }),
      // convert commonjs modules to es6 to be used by rollup bundle
      commonjs({ 
        ignoreGlobal: false,
        include: 'node_modules/**',
      }),
    ],
  }
]