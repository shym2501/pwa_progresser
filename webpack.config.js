const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive Web App',
      template: "./index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      inject: false
    }),
    new WorkboxPlugin.GenerateSW({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
      clientsClaim: true,
      skipWaiting: true
    }),
  ],
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};