const { resolve } = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const config = {
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    resolve(__dirname, 'app/main')
  ],
  output: {
    path: resolve(__dirname, 'build'),

    filename: 'bundle.js',

    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/'
  },

  devServer: {
    // enable HMR on the server
    hot: true,

    // match the output path
    contentBase: resolve(__dirname, 'build'),

    // match the output `publicPath`
    publicPath: '/'
  },

  module: {
    rules: [
    {
      test: /\.js$/,
      use: [
        'babel-loader'
      ],
      exclude: /node_modules/
    },
    {
      test: /\.css$/, // Only .css files
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?sourceMap',
        'postcss-loader',
        'sass-loader?sourceMap'
      ]
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader?' + JSON.stringify({
        name: '[name]',
        prefixize: true
      })
    }]
  },

  resolve: {
    modules: [
      resolve('./app'),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  },

  devtool: "eval-source-map",
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;
