const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const svgr = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const modify = require('rollup-plugin-modify');
const image = require('@rollup/plugin-image');
const { join } = require('path');
const json = require('@rollup/plugin-json');

module.exports = (config) => {
  return {
    ...config,
    output: {
      ...(config.output ?? {}),
      sourcemap: false,
    },
    plugins: [
      json(),
      postcss({
        config: {
          path: join(__dirname, 'postcss.config.js'),
        },
        extensions: ['.css'],
        minimize: false,
        extract: true,
        inject: false,
        external: ['react', 'react-dom'],
      }),
      resolve(),
      copy({
        targets: [
          {
            src: 'libs/webb-ui-components/src/icons/tokens/*',
            dest: 'dist/libs/webb-ui-components/icons/tokens',
          },
          {
            src: 'libs/webb-ui-components/src/fonts/*',
            dest: 'dist/libs/webb-ui-components/fonts/',
          },
        ],
      }),
      typescript({
        tsconfig: 'libs/webb-ui-components/tsconfig.lib.json',
      }),
      svgr(),
      image(),
      commonjs(),
      modify({
        find: '../icons/tokens/',
        replace: './icons/tokens/',
      }),
    ],
  };
};
