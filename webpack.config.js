var path = require('path');
var autoprefixer = require('autoprefixer');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['eslint']
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.css$/, // Only .css files
      loader: 'style-loader!css-loader!postcss-loader' // Run both loaders
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite?' + JSON.stringify({
        name: '[name]',
        prefixize: true
      })
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  eslint: {
    configFile: '.eslintrc.js',
    emitError: true
  },
  modulesDirectories: [
    'node_modules'
  ]
};

module.exports = config;
