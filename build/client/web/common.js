const path = require('path');

module.exports = {
  entry: {
    app: './src/client/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../../../_dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
