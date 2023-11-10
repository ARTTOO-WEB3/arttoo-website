## 构建

### 项目初始化

npx create-react-app my-app --template typescript

### 添加自定义的webpack打包命令

```
"scripts": {
    "start": "NODE_ENV=development npm run dev",
    "build": "NODE_ENV=production npm run compile",
    "dev": "node scripts/server.js",
    "compile": "node scripts/compile.js",
    "lint": "eslint --ext .ts,.tsx src --fix",
    "format": "prettier --write \"src/**/*.ts\" \"src/**/*.tsx\" \"src/**/*.scss\""
},
```

### 创建对应的文件夹以及目录

```
---- config
    ---- webpack.config.base.js
    ---- webpack.config.production.js
    ---- webpack.development.js
---- public
---- script
    ---- compile.js
    ---- server.js
----- src
    ---- assets
    ---- pages
          ---- App
    ---- index.css
    ---- index.tsx
```

### 添加 eslint & 创建.eslintrc.js

```
npm install -D eslint@latest

```

### 添加解析器 & 规则

```
解析器
npm install -D @typescript-eslint/parser@latest
规则插件
npm install -D @typescript-eslint/eslint-plugin@latest

module.exports = {
  parser: "@typescript-eslint/parser",
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    indent: ['error', 2],
    'react/button-has-type': 'error', // 禁止没有任何类型的按钮
  }
}

```

### 添加 husky & lint-staged

```
npm install -D husky@latest
npm install -D lint-staged@latest

  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "prettier --write",
      "eslint",
      "git add"
    ],
    "src/**/*.{scss,css}": [
      "prettier --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  }

```

### 4. 添加 prettier 以及 .prettierrc

```
npm install -D prettier@latest
npm install -D eslint-plugin-prettier@latest
npm install -D eslint-config-prettier@latest

然后只需要在extends添加即可，这样，eslint & prettier的规则就可以同时使用了

{
  "extends": ["plugin:prettier/recommended"]
}

{
  "semi": false,
  "singleQuote": true,
  "arrowParens": "always",
  "trailingComma": "es5",
  "printWidth": 120,
  "tabWidth": 2
}

```

### 5. 添加 eslint-plugin-react (对 tsx 的支持)

```
npm install -D eslint-plugin-react@latest

"extends": [
    "plugin:react/recommended"
  ]
```

### 6. 配置打包 webpack

```
webpack保持在5的最新版本进行开发

npm install -D webpack@latest
npm install -D webpack-dev-server@latest
npm install -D webpack-merge@latest
npm install -D webpack-cli@latest
npm install -D mini-css-extract-plugin@latest
npm install -D html-webpack-plugin@latest
npm install -D css-loader@latest
npm install -D ts-loader@latest
npm isntall -D postcss@latest
npm install -D postcss-pxtorem@latest
npm install -D postcss-loader@latest
npm install -D postcss-preset-env@latest
npm install -D sass@latest
npm install -D sass-loader@latest
npm install -D less-loader@latest
npm install -D @svgr/webpack@latest

npm install -D @commitlint/cli@latest
npm install -D @commitlint/config-conventional@latest
```

webpack.config.base.js

```
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = process.env.NODE_ENV || 'development'
const root = path.join(__dirname, '../')
const srcPath = path.join(root, 'src')
module.exports = {
  context: srcPath,
  entry: {
    index: 'index.tsx', // 对象形式,打包多入口,对应打出来的多文件
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
    },
    modules: [srcPath, 'components', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|jpeg|woff|ttf|eot)$/i,
        type: 'asset',
        exclude: [path.resolve('src/svg')],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
}

```

webpack.config.development.js

```
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

```

webpack.config.production.js

```
const { merge } = require('webpack-merge')
const path = require('path')
const root = path.join(__dirname, '../')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.join(root, 'build'),
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

```

compile.js

```
/* eslint no-console: 0 */

'use strict'

const path = require('path')
const fs = require('fs')
const ip = require('dev-ip')
const webpack = require('webpack')

console.log('start compiling...')

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
    return Promise.all([fs.removeAsync(buildPath)])
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

```

server.js

```
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
```

环境变量

```

```
