
const { merge } = require('webpack-merge');

module.exports = function (env) {

  const isProduction = !!env.production
  process.env.MODE = isProduction ? 'production' : 'development'
  const config = isProduction ? require("./webpack.prod")() : require("./webpack.dev")()
  const commonConfig = require("./webpack.common")({ isProduction })

  return merge(commonConfig, config)
}

