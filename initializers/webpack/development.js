/* eslint-disable */
const NODE_ENV = process.env.NODE_ENV || 'development'

import path from 'path';
import webpack from 'webpack';

import { resolve } from 'path';


const root = path.join(process.cwd(), 'src');

export default {
  context: root,

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    "./index.js"
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,

    contentBase: resolve(__dirname, 'dist'),

    publicPath: '/'
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
        use: [ "babel-loader", ],
        exclude: /node_modules/
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
      path.resolve(__dirname, "dist")
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

