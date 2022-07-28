

const presets = [
  ["@babel/preset-env"],
  ["@babel/preset-react"]
]

const plugins = [
  [
    "import",
    {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }
  ]
]

if (process.env.MODE === "development") {
  plugins.push('react-refresh/babel')
}

module.exports = {
  presets,
  plugins
}