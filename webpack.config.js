var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [{
      test: /\.jsx?/,
      include: APP_DIR,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: [require('babel-plugin-transform-class-properties')]
        }
      }
    }]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;