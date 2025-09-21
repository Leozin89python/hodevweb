// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:5500/web", // URL padrão do seu projeto
    supportFile: false, // suporte global
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // onde ficam os testes
    setupNodeEvents(on, config) {
      // Adicione plugins ou tasks customizadas aqui se precisar
      return config;
    },
  },
  video: false, // grava vídeos da execução
  screenshotOnRunFailure: false, // tira screenshot se falhar
});
