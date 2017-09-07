'use strict';

const webpack = require('webpack');

const browserConfig = {
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',  
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

const serverConfig = {
  entry: './server/app/app.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: './server/app/index.js'
  },
  context: __dirname,
  devtool: 'source-map',  
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

module.exports = [browserConfig, serverConfig];
