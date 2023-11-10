const { merge } = require('webpack-merge')
const path = require('path')
const root = path.join(__dirname, '../')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.join(root, 'build'),
    publicPath: './', // 可替换
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    hashDigestLength: 21,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash:21].css',
    }),
  ],
})
