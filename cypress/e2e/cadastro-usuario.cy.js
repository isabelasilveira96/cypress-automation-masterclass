/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const telas = ["ipad-2","iphone-x", "samsung-s10", "macbook-16"];

describe("Cadastro de Usuário", () => {
    telas.forEach((tela) => {
        let name, email, password;

        beforeEach(() => {
            name = faker.person.fullName();
            email = faker.internet.email();
            password = faker.internet.password({
                length: 6,
                memorable: false,
                pattern: /\d/,
                prefix: ''
            });
            cy.AcessarCadastro();
        });

        it(`Cadastro com sucesso - ${tela}`, () => {
            cy.viewport(tela);

            cy.PreencherNome(name);
            cy.PreencherEmail(email);
            cy.PreencherSenha(password);

            cy.get("#btnRegister").click();

            cy.get("#swal2-title").should("have.text", "Cadastro realizado!");
            cy.get("#swal2-html-container").should("have.text", `Bem-vindo ${name}`);
        });

        it(`Cadastro com nome vazio - ${tela}`, () => {
            cy.viewport(tela);

            cy.PreencherEmail(email);
            cy.PreencherSenha(password);

            cy.get("#btnRegister").click();

            cy.get("#errorMessageFirstName").should("have.text", "O campo nome deve ser prenchido");
        });

        it(`Cadastro com e-mail vazio - ${tela}`, () => {
            cy.viewport(tela);

            cy.PreencherNome(name);
            cy.PreencherSenha(password);

            cy.get("#btnRegister").click();

            cy.get("#errorMessageFirstName").should("have.text", "O campo e-mail deve ser prenchido corretamente");
        });

        it(`Cadastro com senha vazia - ${tela}`, () => {
            cy.viewport(tela);

            cy.PreencherNome(name);
            cy.PreencherEmail(email);
            
            cy.get("#btnRegister").click();

            cy.get("#errorMessageFirstName").should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
        });

        it(`Cadastro com todos os campos vazios - ${tela}`, () => {
            cy.viewport(tela);

            cy.get("#btnRegister").click();

            cy.get("#errorMessageFirstName").should("have.text", "O campo nome deve ser prenchido");
        });

        it(`Cadastro com e-mail inválido - ${tela}`, () => {
            cy.viewport(tela);

            cy.PreencherNome(name);
            cy.PreencherEmail("email-invalido");
            cy.PreencherSenha(password);

            cy.get("#btnRegister").click();

            cy.get("#errorMessageFirstName").should("have.text", "O campo e-mail deve ser prenchido corretamente");
        });

        it(`Cadastro com senha inválida - ${tela}`, () => {
            cy.viewport(tela);

            cy.PreencherNome(name);
            cy.PreencherEmail(email);
            cy.PreencherSenha("123");

            cy.get("#btnRegister").click();

            cy.get("#errorMessageFirstName").should("have.text", "O campo senha deve ter pelo menos 6 dígitos");
        });
    });
});