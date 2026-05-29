//vue.config.js

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/AminPortfolio/', 
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Home - Amin'
    }
  }
})