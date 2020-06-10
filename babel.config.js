const muiPlugins = [
  [
    'babel-plugin-transform-imports',
    {
      '@material-ui/core': {
        // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
        transform: '@material-ui/core/esm/${member}',
        preventFullImport: true,
      },
      '@material-ui/icons': {
        // Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
        transform: '@material-ui/icons/esm/${member}',
        preventFullImport: true,
      },
      'date-fns': {
        transform: 'date-fns/esm/${member}',
        preventFullImport: true,
      },
    },
  ],
]

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
    ...muiPlugins,
  ],
}
