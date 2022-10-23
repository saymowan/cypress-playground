const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        homeUrl: 'https://automationpractice.com/index.php',
        productUrl: 'https://automationpractice.com/index.php?id_product=3&controller=product'
    },
});
