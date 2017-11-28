const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'react-hot-loader/patch', // 激活HMR
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devServer: {
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
    // publicPath: "/",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-hot-loader', ...ExtractTextPlugin.extract({
          use:[
          'css-loader',
          'sass-loader'
          ],
        })],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(__dirname, 'template.html')
    }),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
  ]
};