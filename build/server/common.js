const path = require('path');
const nodeExternals = require('webpack-node-externals');
const rules = require('../rules');

module.exports = {
  entry: {
    index: './src/server/index.js',
  },
  output: {
    path: path.resolve(__dirname, `../../_dist`),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules,
  },
  target: 'node',
  externals: nodeExternals(),
};
