context("Signin", () => {
  it("redirects unauthenticated user to signin", () => {
    cy.visit("/");

    cy.get("h1").should("have.text", "Sign in to DCIA");
    cy.location("pathname").should("eq", "/signin");
  });

  it("signs in a user with valid credentials", () => {
    cy.visit("/signin");

    cy.get("form");
    cy.get("input.is-invalid").should("have.length", 0);

    cy.typeCredentials("instructor@example.com", "instructor");
    cy.get("button[type=submit]").click();

    cy.get("h1").should("have.text", "Dashboard");
    cy.location("pathname").should("eq", "/");

    cy.reload(true);

    cy.get("h1").should("have.text", "Dashboard");
    cy.location("pathname").should("eq", "/");
  });

  it("signs out a user", () => {
    cy.signin("instructor@example.com");

    cy.get("h1").should("have.text", "Dashboard");
    cy.location("pathname").should("eq", "/");

    cy.contains("button", "Sign out").click();

    cy.get("h1").should("have.text", "Sign in to DCIA");
    cy.location("pathname").should("eq", "/signin");

    cy.visit("/");

    cy.get("h1").should("have.text", "Sign in to DCIA");
    cy.location("pathname").should("eq", "/signin");
  });

  it("shows error message when credentials are invalid", () => {
    cy.visit("/signin");

    cy.get("form");
    cy.get("input.is-invalid").should("have.length", 0);

    cy.typeCredentials("instructor@example.com", "invalid");
    cy.get("button[type=submit]").click();

    const invalidMessage = "The email or password you entered is incorrect.";
    cy.get(".alert-danger").should("have.text", invalidMessage);
    cy.get("input.is-invalid").should("have.length", 2);
  });

  it("shows error message when denied registration request", () => {
    cy.visit("/signin");

    cy.get("form");
    cy.get("input.is-invalid").should("have.length", 0);

    cy.typeCredentials("denied@example.com", "denied");
    cy.get("button[type=submit]").click();

    const invalidMessage = "Registration request is denied.";
    cy.get(".alert-danger").should("have.text", invalidMessage);
    cy.get("input.is-invalid").should("have.length", 2);
  });

  it("shows error message when pending registration request", () => {
    cy.visit("/signin");

    cy.get("form");
    cy.get("input.is-invalid").should("have.length", 0);

    cy.typeCredentials("pending@example.com", "pending");
    cy.get("button[type=submit]").click();

    const invalidMessage = "Registration request is pending.";
    cy.get(".alert-danger").should("have.text", invalidMessage);
    cy.get("input.is-invalid").should("have.length", 2);
  });
});
