/// <reference types="cypress" />

const login_page = require("../support/pages/login-page");

describe("Página de Login", () => {
  it("Login com sucesso", () => {
    login_page.acessarLogin();

    // preencher os campos de email e senha
    login_page.preencherEmail("isa@teste.com");
    login_page.preencherSenha("123456");

    // clicar no botão de login
    login_page.clicarLogin();

    // validar mensagem de sucesso
    login_page.loginSucesso();
  });

  it("Login com senha inválida", () => {
    login_page.acessarLogin();

    // preencher os campos de email e senha
    login_page.preencherEmail("isa@teste.com");
    login_page.preencherSenha("1");

    // clicar no botão de login
    login_page.clicarLogin();

    // validar mensagem de erro
    login_page.senhaInvalida();
  });

  it("Login com e-mail inválido", () => {
    login_page.acessarLogin();

    // preencher os campos de email e senha
    login_page.preencherEmail("isa");
    login_page.preencherSenha("123456");

    // clicar no botão de login
    login_page.clicarLogin();

    // validar mensagem de erro
    login_page.emailInvalido();
  });

  it("Login com campos vazios", () => {
    login_page.acessarLogin();

    // clicar no botão de login
    login_page.clicarLogin();

    // validar mensagem de erro
    login_page.emailInvalido();
  });
});
