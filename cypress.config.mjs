import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      frontUrl: 'http://localhost:5173/',
      backUrl: 'http://localhost:4000/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
