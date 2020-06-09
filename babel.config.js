module.exports = {
  presets: [
    ['@babel/env', { modules: 'commonjs' }],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }],
    '@babel/preset-react',
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
