
const path = require('path');

const rootPath = process.cwd();

module.exports = appPath => path.resolve(rootPath, appPath)
