
const resolvePath = require("./paths");

module.exports = {
  // 打包  资源文件的根节点
  outputRootPath: 'static',
  // 打包 入口
  entry: resolvePath('./src/index.js'),
  // 打包 出口
  outputPath: resolvePath('build'),
  // webpack-dev-server 配置相关
  devServer: {
    // 自动打开浏览器
    open: true,
    // 端口号
    port: 3000,
    // 代理
    proxy: {
      "/api": {
        target: "http://xxxxxxxxxx",
        secure: false,
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },

  resolve: {
    // 支持以下格式  可忽略文件尾缀
    extensions: ['.js', '.json', '.jsx'],
    // 配置别名
    alias: {
      "@": resolvePath("./src"),
      "pages": resolvePath("./src/pages"),
      "components": resolvePath("./src/components")
    }
  },
  // html模板所在路径
  htmlTemplate: resolvePath('./public/index.html'),
  // 设置关键字对应的包   可自动引入
  providePlugin: {
    React: "react"
  },
  // source-map
  sourcemap: "cheap-module-source-map",
  // 是否开启打包分析
  isOpenAnalyzer: false
}