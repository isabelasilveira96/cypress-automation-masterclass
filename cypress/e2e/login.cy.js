/// <reference types="cypress" />

describe("Página de Login", () => {
  it("Login com sucesso", () => {
    cy.visit("/login");

    // preencher os campos de email e senha
    cy.get("#user").type("isa@teste.com");
    cy.get("#password").type("123456");

    // clicar no botão de login
    cy.get("#btnLogin").click();

    // validar mensagem de sucesso
    cy.get("#swal2-title").should("contain", "Login realizado");

    cy.get("#swal2-html-container").should("contain", "Olá, isa@teste.com");
  });

  it("Login com senha inválida", () => {
    cy.visit("/login");

    // preencher os campos de email e senha
    cy.get("#user").type("isa@teste.com");
    cy.get("#password").type("1");

    // clicar no botão de login
    cy.get("#btnLogin").click();

    // validar mensagem de erro
    cy.get(".invalid_input").should("have.text", "Senha inválida.");
  });

  it("Login com e-mail inválido", () => {
    cy.visit("/login");

    // preencher os campos de email e senha
    cy.get("#user").type("isa");
    cy.get("#password").type("123456");

    // clicar no botão de login
    cy.get("#btnLogin").click();

    // validar mensagem de erro
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  });

  it("Login com campos vazios", () => {
    cy.visit("/login");

    // clicar no botão de login
    cy.get("#btnLogin").click();

    // validar mensagem de erro
    cy.get(".invalid_input").should("have.text", "E-mail inválido.");
  });
});
