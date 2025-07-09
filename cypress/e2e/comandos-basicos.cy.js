/// <reference types="cypress" />

describe("Comandos básicos", () => {
  it("Acessando uma URL", () => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Encontrando Elementos", () => {
    cy.visit("https://automationpratice.com.br/login");

    // get() - selecionar/buscar um elemento
    cy.get("#user");

    // find() - encontrar um elemento dentro de outro
    // dimunir o escopo de busca com o get antes

    // buscar elemento por id usa o #
    cy.get("#mc_embed_signup").find(".form-control");

    // buscar elemento por classe usa o .
    cy.get(".mc-form").find(".form-control");

    // contains() - selecionar um elemento por um texto
    // dimunir o escopo de busca com o get antes
    cy.get("#mc_embed_signup").contains(" Send Mail");
  });

  it("Preenchendo um campo", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#mc_embed_signup")
      .find(".form-control")
      .type("isa@teste.com.br{enter}");
    cy.get(".swal2-confirm").click();
  });

  it("Clicando em um botão", () => {
    cy.visit("https://automationpratice.com.br/login");

    // clicar no botão de login
    cy.get("#btnLogin").click();
  });

  it("Selecionando uma opção de uma lista", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");

    // selecionar uma opção em um select
    // o select permite selecionar uma opção de uma lista
    cy.get("#country").select("usa");
  });

  it("Selecionando um checkbox e um radio button", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");

    // selecionar um checkbox
    cy.get("#materialUnchecked").check();

    // selecionar um radio button
    cy.get("#css").check();
  });

  it("Validando um texto", () => {
    cy.visit("https://automationpratice.com.br/login");

    cy.get("#createAccount")
      .should("contain", "Ainda não tem conta?")
      .should("be.visible");
  });
});
