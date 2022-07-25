const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    productUrl: 'https://automationpractice.com/index.php?id_product=3&controller=product'
  }
})