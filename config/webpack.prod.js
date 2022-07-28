
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const glob = require('glob');

const config = require('./config');
const resolvePath = require('./paths');


module.exports = function (env) {

  const plugin = []
  if (config.isOpenAnalyzer) {
    plugin.push(new BundleAnalyzerPlugin())
  }

  return {
    mode: 'production',
    performance: false,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              dead_code: true
            }
          },
          extractComments: false
        })
      ],
      splitChunks: {
        chunks: 'all',
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `${config.outputRootPath}/css/[name].[contenthash:8].css`
      }),
      new CssMinimizerPlugin(),
      new CompressionPlugin({
        test: /\.(css|less|js|jsx)$/,
        minRatio: 0.8,
        algorithm: 'gzip'
      }),
      new PurgeCssPlugin({
        paths: glob.sync(`${resolvePath('./src')}/**/*`, { nodir: true }),
        safelist: function () {
          return {
            standard: ["body", "html"]
          }
        }
      }),
      ...plugin
    ]
  }
}