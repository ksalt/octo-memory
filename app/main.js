'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import OctoMemory from 'components/octomemory.component';

import "assets/styles/main.scss";

const files = require.context('assets/svg', false, /\.svg$/);
files.keys().forEach(files);

ReactDOM.render(
  <OctoMemory />,
  document.getElementById('octoMemory')
);