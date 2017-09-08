'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './browser/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};