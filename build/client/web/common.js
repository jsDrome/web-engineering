const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const rules = require('../../rules');

module.exports = {
  entry: {
    app: './src/client/web/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../../../_dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My website',
      template: path.resolve(__dirname, '../templates/client.html'),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, `../../../_dist/bundle.html`),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../../../_dist'),
    compress: true,
    port: 9000,
  },
};
