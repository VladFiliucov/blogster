/* eslint-disable */
const NODE_ENV = process.env.NODE_ENV || 'development'

var path = require('path');
const { resolve } = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    "./src/index.js"
  ],

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',

  devServer: {
    hot: true,

    contentBase: resolve(__dirname, 'public'),

    publicPath: '/assets/'
  },

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
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      './src',
      path.resolve(__dirname, "public")
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

