
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const resolvePath = require("./paths");
const config = require('./config');

module.exports = function (options) {

  const isProduction = options.isProduction
  const useCss = [
    isProduction ? MiniCssExtractPlugin.loader : "style-loader",
    {
      loader: "css-loader",
      options: { importLoaders: 1 }
    },
    "postcss-loader"
  ]

  return {
    entry: config.entry,
    output: {
      filename: `${config.outputRootPath}/js/[name].[chunkhash:6].main.js`,
      chunkFilename: `${config.outputRootPath}/js/[name].[contenthash:6].chunk.js`,
      path: config.outputPath
    },
    resolve: {
      extensions: config.resolve.extensions,
      alias: {
        ...config.resolve.alias
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx)$/i,
          exclude: /node_modules/,
          use: [
            "babel-loader"
          ]
        },
        {
          test: /\.css$/,
          use: useCss
        },
        {
          test: /\.less$/,
          use: [
            ...useCss,
            "less-loader"
          ]
        },
        {
          test: /\.(jpg|png|jpeg|gif|svg)$/,
          type: 'asset',
          generator: {
            filename: `${config.outputRootPath}/img/[name].[hash:6][ext]`
          },
          parser: {
            dataUrlCondition: {
              maxSize: 100 * 1024
            }
          }
        },
        {
          test: /\.(ttf|eot|woff)$/,
          type: 'asset/resource',
          generator: {
            filename: `${config.outputRootPath}/font/[name].[hash:6][ext]`
          },
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: config.htmlTemplate,
        minify: isProduction ? {
          removeComments: true,
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          minifyCSS: true,
        } : false
      }),
      new webpack.ProvidePlugin({
        ...config.providePlugin
      }),
    ]
  }
}