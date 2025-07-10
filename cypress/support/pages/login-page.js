export function acessarLogin() {
  cy.visit('/login');
}

export function preencherEmail(email) {
  cy.get("#user").type(email);
}

export function preencherSenha(senha) {
  cy.get("#password").type(senha);
}

export function clicarLogin() {
  cy.get("#btnLogin").click();
}

export function loginSucesso() {
  cy.get("#swal2-title").should("contain", "Login realizado");
  cy.get("#swal2-html-container").should("contain", "Olá, isa@teste.com");
}

export function senhaInvalida() {
  cy.get(".invalid_input").should("have.text", "Senha inválida.");
}

export function emailInvalido() {
  cy.get(".invalid_input").should("have.text", "E-mail inválido.");
}