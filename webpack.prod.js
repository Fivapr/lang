const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: 'static' }),
  ],
})
