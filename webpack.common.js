const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(png|jpe?g|gif|svg|swf)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name]-[hash:6].[ext]',
        },
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(woff|woff2|ttf|eot)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name]-[hash:6].[ext]',
        },
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(vtt)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: 'subtitles/[name]-[hash:6].[ext]',
        },
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(mp4|ogv|webm|mkv)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: 'subtitles/[name]-[hash:6].[ext]',
        },
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
}
