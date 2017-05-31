/* eslint-disable */
const NODE_ENV = process.env.NODE_ENV || 'development'

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
  watch: NODE_ENV === 'development',
  devtool: NODE_ENV === 'development' && 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader',
          loader: 'css-loader?importLoaders=1'
        }
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      path.resolve(__dirname, "public")
    ]
  }
};

