const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    port: 9090,
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}