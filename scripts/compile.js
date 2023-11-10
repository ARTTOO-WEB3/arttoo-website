/* eslint no-console: 0 */

'use strict'

const path = require('path')
const fs = require('fs-extra')
const ip = require('dev-ip')
const webpack = require('webpack')

console.log('start compiling...')
// 测试哈哈
const startTime = Date.now()
let env = process.env.NODE_ENV || 'development'

if (env === 'staging') {
  env = 'test'
}

console.log(`using ${env} config`)

const devIp = ip()[0]
const root = path.join(__dirname, '..')
const configPath = path.join(root, `config/webpack.config.${env}`)

const config = require(configPath)

const buildPath = config.output.path

Promise.resolve()
  .then(() => {
    console.log('clean views and build path')

    // 1. 清理 我的buildPath
    return Promise.all([fs.removeSync(buildPath)])
  })
  .then(() => {
    // 2. 开始打包操作
    console.log('webpack building...')

    const devPort = 9080
    // 兼容测试环境下的bug
    if (env === 'development') {
      config.output.publicPath = `http://${devIp}:${devPort}/build/`
    }

    // webpack 编译
    return new Promise((resolve, reject) => {
      webpack(config, (err, stats) => {
        if (err || stats.hasErrors()) {
          console.log(
            stats.toString({
              colors: true,
              timings: true,
              hash: true,
              version: true,
              errorDetails: true,
              assets: false,
              chunks: false,
              children: false,
              modules: false,
              chunkModules: false,
            })
          )

          return reject(err)
        }

        const time = (stats.endTime - stats.startTime) / 1000

        console.log(`webpack build success in ${time.toFixed(2)} s`)

        resolve()
      })
    })
  })
  .then(() => {
    const time = (Date.now() - startTime) / 1000
    console.log(`compile success in ${time.toFixed(2)} s`)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
