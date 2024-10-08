const { merge } = require('webpack-merge')
const path = require('path')
const ip = require('dev-ip')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')
const root = path.join(__dirname, '../')
const devIp = ip()[0] || 'localhost'
const devPort = 9080
module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    pathinfo: true,
    path: path.join(root, 'build'),
    publicPath: `http://${devIp}:${devPort}/`,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: `ws://${devIp}:9080/ws`,
    },
    historyApiFallback: true, // 在使用单页面的项目中,最终都会转向请求根目录
    hot: true,
    devMiddleware: {
      writeToDisk: false,
      publicPath: '/', // 意义
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    port: devPort,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
})
