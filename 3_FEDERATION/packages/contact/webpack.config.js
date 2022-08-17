const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist'),
  },

  devServer: {
    static: {
      directory: resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: false, // specify to enable root proxying
    },
    port: 8002,
    historyApiFallback: {
      index: 'index.html',
    },
  },

  resolve: {
    extensions: ['.jsx', '.js', 'json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'App',
    }),

    new ModuleFederationPlugin({
      name: 'ContactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ContactPage': './src/App',
      },
    }),
  ],
}
