import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    plugins: [babel({ extensions: ['.ts'] })],
    input: 'src/index.ts',
    output: [{ file: pkg.main, format: 'es' }],
  },
]
