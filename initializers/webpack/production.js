/* eslint-disable */
import path from 'path';
import webpack from 'webpack';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const root = path.join(process.cwd(), 'src');

export default {
  devtool: 'source-map',

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[chunkhash].js'
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
        use: [ 'babel-loader', ],
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
    modules: [
      path.join(process.cwd(), "src"),
      "node_modules"
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': 'production'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map'
    }),
    new webpack.BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};