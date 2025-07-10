const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1gdv3d",
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
