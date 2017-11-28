const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react/cjs/react.production.min.js')
    }
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(__dirname, 'template.html')
    }),
  ]
};