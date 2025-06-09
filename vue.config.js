const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/AminPortfolio/', // Should match your repo name
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Home - Amin'
    }
  }
})
