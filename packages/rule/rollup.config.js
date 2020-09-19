import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default [
  {
    plugins: [babel()],
    input: 'src/index.js',
    output: [{ file: pkg.main, format: 'es' }],
  },
]
