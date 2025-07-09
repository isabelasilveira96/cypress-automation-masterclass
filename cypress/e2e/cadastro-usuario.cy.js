/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe("Cadastro de Usuário", () => {
    it("Cadastro com sucesso", () => {
        const name = faker.person.fullName();
        cy.visit("/register");

        // preencher os campos de cadastro
        cy.get("#user").type(name);
        cy.get("#email").type("isa.isa@teste.com");
        cy.get("#password").type("123456");

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagem de sucesso
        cy.get("#swal2-title").should("have.text", "Cadastro realizado!");
        cy.get("#swal2-html-container").should("have.text", `Bem-vindo ${name}`);
    });

    it("Cadastro com nome vazio", () => {
        cy.visit("/register");

        // não preencher o campo nome
        cy.get("#email").type("isa.isa@teste.com");
        cy.get("#password").type("123456");

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagem de erro
        cy.get("#errorMessageFirstName").should("have.text", "O campo nome deve ser prenchido");
    });

    it("Cadastro com e-mail vazio", () => {
        cy.visit("/register");

        // preencher apenas o nome e a senha
        cy.get("#user").type("Isa Teste");
        cy.get("#password").type("123456");

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagem de erro para o campo e-mail
        cy.get("#errorMessageFirstName").should("have.text", "O campo e-mail deve ser prenchido corretamente");
    });

    it("Cadastro com senha vazia", () => {
        cy.visit("/register");

        // preencher apenas o nome e o e-mail
        cy.get("#user").type("Isa Teste");
        cy.get("#email").type("isa.isa@teste.com");

        // não preencher o campo senha

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagem de erro para o campo senha
        cy.get("#errorMessageFirstName").should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
    });

    it("Cadastro com todos os campos vazios", () => {
        cy.visit("/register");

        // não preencher nenhum campo

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagens de erro para todos os campos obrigatórios
        cy.get("#errorMessageFirstName").should("have.text", "O campo nome deve ser prenchido");
    });

    it("Cadastro com e-mail inválido", () => {
        cy.visit("/register");

        // preencher nome e senha, mas e-mail inválido
        cy.get("#user").type("Isa Teste");
        cy.get("#email").type("email-invalido");
        cy.get("#password").type("123456");

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagem de erro para o campo e-mail
        cy.get("#errorMessageFirstName").should("have.text", "O campo e-mail deve ser prenchido corretamente");
    });

    it("Cadastro com senha inválida", () => {
        cy.visit("/register");

        // preencher nome e e-mail, mas senha inválida (menos de 6 caracteres)
        cy.get("#user").type("Isa Teste");
        cy.get("#email").type("isa.isa@teste.com");
        cy.get("#password").type("123");

        // clicar no botão de cadastro
        cy.get("#btnRegister").click();

        // validar mensagem de erro para o campo senha
        cy.get("#errorMessageFirstName").should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
    });
});