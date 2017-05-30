/* eslint-disable */

var path = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules/")
        ],
        loader: "babel-loader",

        options: {
          presets: ["es2015", "babel-preset-react", "latest"]
        }
      }
    ]
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "public")
    ],
    extensions: [".js", ".json", ".jsx", ".css"]
  }
};

