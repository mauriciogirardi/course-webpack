const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8000,
    historyApiFallback: {
      index: 'index.html',
    },
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].js',
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),

    new DefinePlugin({
      VERSION: JSON.stringify('1.0.3'),
      PORT: JSON.stringify('8080'),
    }),

    new DotenvPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Modes',
    }),

    // Shimming
    new webpack.ProvidePlugin({ _: 'lodash' }),
  ],

  optimization: {
    runtimeChunk: true,
  },
}
