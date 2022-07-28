

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const resolvePath = require('./paths');
const config = require('./config');

module.exports = function (env) {
  return {
    mode: 'development',
    devtool: config.sourcemap,
    devServer: {
      hot: true,
      open: config.devServer.open,
      port: config.devServer.port,
      static: resolvePath('./public/'),
      historyApiFallback: true,
      compress: true,
      proxy: {
        ...config.devServer.proxy
      }
    },
    plugins: [
      new ReactRefreshWebpackPlugin(),
    ]
  }
}