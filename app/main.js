'use strict';

require("./assets/styles/main.css");
var files = require.context('./assets/svg', false, /\.svg$/);
files.keys().forEach(files);

var ReactDOM = require('react-dom'),
  React = require('react'),
  OctoMemory = require('./components/octomemory.component');

ReactDOM.render(
  <OctoMemory />,
  document.getElementById('octoMemory')
);