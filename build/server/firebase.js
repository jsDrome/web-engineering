const merge = require('webpack-merge');
const commonConfig = require('./prod');

module.exports = merge(commonConfig, {
  entry: {
    index: './src/server/firebase.js',
  },
});
