module.exports = {
  presets: [
    ['@babel/env', { modules: 'commonjs' }],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        labelFormat: '[dirname]__[local]',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/proposal-class-properties',
      {
        loose: true,
      },
    ],
    'babel-plugin-parameter-decorator',
    'react-hot-loader/babel',
  ],
}
