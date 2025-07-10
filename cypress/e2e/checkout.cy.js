/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Checkout", () => {
  let fname, lname, cname, email, country, city, faddress, zip, messages;

  beforeEach(() => {
    fname = faker.person.firstName();
    lname = faker.person.lastName();
    cname = faker.company.name();
    email = faker.internet.email();
    country = "usa";
    city = "Aland Islands";
    faddress = faker.location.streetAddress();
    zip = faker.location.zipCode();
    messages = faker.lorem.sentence();
    cy.visit("/checkout-one");
  });

  it("Realizando uma compra", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    cy.get(":nth-child(2) > h3").should("have.text","Billings Information registred with success!");

    cy.get("#css").check();
    cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();

    cy.get(".offer_modal_left > h3").should("have.text","Congrats! Your order was created with sucess!");
  });

  it("Tentar realizar uma compra sem preencher o campo First name", () => {
    // Não preenche o campo First name
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo First name
    cy.get("#errorMessageFirstName").should("have.text","O campo First Name deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo Last name", () => {
    cy.get("#fname").type(fname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Last name
    cy.get('#errorMessageFirstName').should("have.text","O campo Last Name deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo Company name", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Company name
    cy.get("#errorMessageFirstName").should("have.text","O campo Company deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo Email", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Email
    cy.get("#errorMessageFirstName").should("have.text","O campo E-mail deve ser prenchido ou é inválido");
  });

  it("Tentar realizar uma compra sem preencher o campo Country", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Country
    cy.get("#errorMessageFirstName").should("have.text","O campo Country deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo City", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo City
    cy.get("#errorMessageFirstName").should("have.text","O campo City deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo Zip code", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Zip code
    cy.get("#errorMessageFirstName").should("have.text","O campo Zip Code deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo Address", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Address
    cy.get("#errorMessageFirstName").should("have.text","O campo Address deve ser prenchido");
  });

  it("Tentar realizar uma compra sem preencher o campo Additional Notes", () => {    
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#materialUnchecked").check();
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro para o campo Additional Notes
    cy.get("#errorMessageFirstName").should("have.text","O campo Additional Notes deve ser prenchido");
  });

  it("Tentar realizar uma compra sem salvar o endereço", () => {
    cy.get("#fname").type(fname);
    cy.get("#lname").type(lname);
    cy.get("#cname").type(cname);
    cy.get("#email").type(email);
    cy.get("#country").select(country);
    cy.get("#city").select(city);
    cy.get("#faddress").type(faddress);
    cy.get("#zip").type(zip);
    cy.get("#messages").type(messages);
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Verifica se o pedido foi criado com sucesso
    cy.get(":nth-child(2) > h3").should("have.text","Billings Information registred with success!");
  });

  it("Tentar realizar uma compra sem preencher nenhum campo", () => {
    // Não preenche nenhum campo, apenas clica para tentar finalizar a compra
    cy.get(".checkout-area-bg > .theme-btn-one").click();

    // Valida se aparece mensagem de erro para todos os campos obrigatórios
    cy.get(':nth-child(1) > .form-group > #errorMessageFirstName').should("have.text", "O campo First Name deve ser prenchido");
    cy.get(':nth-child(2) > .form-group > #errorMessageFirstName').should("have.text", "O campo Last Name deve ser prenchido");
    cy.get(':nth-child(3) > .form-group > #errorMessageFirstName').should("have.text", "O campo Company deve ser prenchido");
    cy.get(':nth-child(4) > .form-group > #errorMessageFirstName').should("have.text", "O campo E-mail deve ser prenchido ou é inválido");
    cy.get(':nth-child(5) > .form-group > #errorMessageFirstName').should("have.text", "O campo Country deve ser prenchido");
    cy.get(':nth-child(6) > .form-group > #errorMessageFirstName').should("have.text", "O campo City deve ser prenchido");
    cy.get(':nth-child(7) > .form-group > #errorMessageFirstName').should("have.text", "O campo Zip Code deve ser prenchido");
    cy.get(':nth-child(8) > .form-group > #errorMessageFirstName').should("have.text", "O campo Address deve ser prenchido");
    cy.get(':nth-child(9) > .form-group > #errorMessageFirstName').should("have.text", "O campo Additional Notes deve ser prenchido");
  });

  it("Tentar clicar no botão de Place Order sem preencher nenhum campo", () => {
    // Tenta clicar no botão de Place Order sem preencher nenhum campo
    cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();

    // Verifica se aparece mensagem de erro sobre o pagamento
    cy.get("#errorMessageFirstName").should("have.text", "Preencha os dados de pagamento!");
  });
});
