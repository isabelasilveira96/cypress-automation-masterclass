Cypress.Commands.add("AcessarCadastro", () => { 
    cy.visit("/register");
});

Cypress.Commands.add("PreencherNome", (name) => { 
    cy.get("#user").type(name);
});

Cypress.Commands.add("PreencherEmail", (email) => { 
    cy.get("#email").type(email);
});

Cypress.Commands.add("PreencherSenha", (password) => { 
    cy.get("#password").type(password);
});