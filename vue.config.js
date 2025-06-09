const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 👇 Add this block to set the page title
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Home - Amin'
    }
  }
})
