var path = require('path');
var autoprefixer = require('autoprefixer');

var config = {
  entry: path.resolve(__dirname, 'app/main'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
      test: /\.scss$/,
      loader: 'style!css?sourceMap!postcss!sass?sourceMap!'
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

  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules']
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
