/*
 * @Descripttion:
 * @Author: wlj
 * @Date: 2021-12-17 11:49:48
 * @LastEditors: wlj
 * @LastEditTime: 2021-12-17 18:16:28
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = function (args) {
  return {
    target: 'async-node',
    mode: 'production',
    entry: {
      main: path.resolve(__dirname, 'index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `[name].js`
    },
    resolve: {},
    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          loader: 'url-loader'
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: '/node_modules/'
          // cacheDirectory: true
          // exclude: [path.join(__dirname, './node_modules/')]
        }
        // ...ThreeExamples
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  }
}
