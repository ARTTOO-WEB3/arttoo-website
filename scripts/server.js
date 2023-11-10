const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const root = path.join(__dirname, '..')
const configPath = path.join(root, `config/webpack.config.development`)

const config = require(configPath)

const compiler = webpack(config)
const devServerOptions = { ...config.devServer, open: true }
const server = new webpackDevServer(devServerOptions, compiler)
const runServer = async () => {
  await server.start()
}
runServer()
