const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://alexkuz.github.io/webpack-chart/

module.exports = {
  mode: 'development',

  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    test: {
      import: './src/test.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve(__dirname, 'src'),
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({ _: 'lodash' }),
    new HtmlWebpackPlugin({ title: 'Recursos Webpack' }),
  ],

  optimization: {
    runtimeChunk: true,
  },
}
