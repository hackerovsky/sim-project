const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: { main: './src/js/app.js' },
  output: {
    path: path.resolve(),
    // publicPath: path.resolve(__dirname, 'dist'),
    filename: '../assets/js/bundle.js'
  },
  target: 'node',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
          output: {
              comments: false
          }
        }
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
      },
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   use: [{
      //       loader: 'url-loader'
      //   }]
      // },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },
      {
        test: /\.(png|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'images/plugins'
            }
        }]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: [path] }
    }),
    new CopyWebpackPlugin([
      {from: 'src/img/', to: '../assets/img/',},
      {from: 'src/fonts/', to: '../assets/fonts/',}
    ]),
    new ImageminPlugin({
      pngquant: {
        quality: '100'
      },
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true
        })
      ]
    }),
    // new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      filename: '../assets/css/style.css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   template: './src/index.html',
    //   filename: 'index.html'
    // })
  ]
};