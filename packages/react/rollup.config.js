import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const basePlugins = [external(), resolve(), commonjs()];
const postcssConfig = require('./postcss.config');

/**
 * We have multiple output configs to support CommonJS and ES modules.
 */
export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },

    plugins: [
      ...basePlugins,
      postcss(postcssConfig),
      typescript({ declaration: true, declarationDir: 'dist/types' }),
    ],
  },
  // ES Module
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      ...basePlugins,
      postcss({
        ...postcssConfig,
        extract: false,
        inject: false,
      }),
      typescript(),
    ],
  },
];
