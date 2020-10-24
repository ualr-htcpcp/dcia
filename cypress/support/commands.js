// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("typeCredentials", (email, password) => {
  cy.get("input[name=email]").type(email).should("have.value", email);
  cy.get("input[name=password]").type(password).should("have.value", password);
});

Cypress.Commands.add("signin", (email, password) => {
  password = password || email.split("@")[0];

  cy.visit("/signin");
  cy.get("h1").should("have.text", "Sign in to DCIA");

  cy.typeCredentials(email, password);
  cy.get("button[type=submit]").click();

  cy.get("h1").should("have.text", "Dashboard");
});
