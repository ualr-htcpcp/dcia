context("Signin", () => {
  it("redirects unauthenticated user to signin", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Sign in to DCIA");
    cy.url().should("include", "/signin");
  });

  it("shows error message when credentials are invalid", () => {
    cy.visit("/signin");

    cy.get("form");
    cy.get("input.is-invalid").should("have.length", 0);

    const invalidEmail = "invalid@example.com";
    cy.get("input[name=email]")
      .type(invalidEmail)
      .should("have.value", invalidEmail);

    const invalidPassword = "invalid";
    cy.get("input[name=password]")
      .type(invalidPassword)
      .should("have.value", invalidPassword);

    cy.get("button[type=submit]").click();

    const invalidMessage = "The email or password you entered is incorrect.";
    cy.get(".alert-danger").should("have.text", invalidMessage);
    cy.get("input.is-invalid").should("have.length", 2);
  });
});
