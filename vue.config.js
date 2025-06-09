const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: '/AminPortfolio/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Home - Amin'
    }
  }
}