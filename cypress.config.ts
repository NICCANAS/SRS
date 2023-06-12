import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
	experimentalRunAllSpecs: true,
	viewportWidth: 1000,
	viewportHeight: 660,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
