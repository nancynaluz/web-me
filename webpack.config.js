const webpack = require('webpack')
const path = require('path')
const PATHS = {
  build: path.join(__dirname, './src/public')
}
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    javascript: './src/index.js'
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(sass)$/, use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/, loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
}
