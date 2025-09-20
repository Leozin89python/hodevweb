// cypress/e2e/contactForm.cy.js

describe("Formulário de Contato - Hodevweb", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/web/index.html"); // ajuste se rodar em outra porta
  });

  it("Deve preencher e enviar o formulário com sucesso", () => {
    // Preencher campos
    cy.get("#nome").type("Leonardo Sousa");
    cy.get("#email").type("leonardo@email.com");
    cy.get("#tel").type("+5511999999999");
    cy.get("#msg").type("Quero mais informações sobre seus serviços!");

    // Enviar formulário
    cy.get("#send").click();

    // Modal de LGPD deve aparecer
    cy.get(".lgpd-overlay").should("exist");

    // Marca checkbox
    cy.get("#lgpdAcceptCheck").check({ force: true });

    // Confirma que aparece mensagem de sucesso
    cy.get("#formAlert")
      .should("exist")
      .and("have.class", "success");
    cy.get("#formAlertMessage")
      .should("contain.text", "Formulário enviado com sucesso!");
  });

  it("Deve exibir erro se tentar enviar sem preencher os campos", () => {
    cy.get("#send").click();

    cy.get("#nome").should("have.class", "error");
    cy.get("#email").should("have.class", "error");
    cy.get("#tel").should("have.class", "error");
    cy.get("#msg").should("have.class", "error");
  });
});
