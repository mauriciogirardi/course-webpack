const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin
const DotenvPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

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
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
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

    new HtmlWebpackPlugin(),
  ],
}
