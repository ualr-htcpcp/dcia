describe("Registration", () => {
  let email = ""; // generated unique for each test
  const password = "qwerty";
  const accessLevel = "instructor";

  beforeEach(() => {
    email = `test-${Date.now()}@example.com`;
    cy.visit("/register");

    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("select[name=accessLevel]").select(accessLevel);
    cy.get("button[type=submit]").click();

    cy.get(".alert-success").should(
      "have.text",
      "Registration request submitted."
    );
  });

  context("when root user", () => {
    beforeEach(() => {
      cy.signin("root@example.com", "root1");

      cy.contains(".nav-link", "User Access").click();
      cy.get("h1").should("have.text", "User Access");
    });

    it("shows the registration request", () => {
      cy.contains(".card", "Access Requests").within(() => {
        cy.get("table").should("contain.text", email);
        cy.contains("tr", email).within(() => {
          cy.get("td").eq(0).get("select").should("have.value", accessLevel);
          cy.get("td").eq(1).should("have.text", email);
          cy.get("td").eq(2).should("have.text", "pending");
        });
      });

      cy.contains(".card", "Users").within(() => {
        cy.get("table").should("not.contain.text", email);
      });
    });

    it("approves registration request", () => {
      cy.contains(".card", "Access Requests").within(() => {
        cy.contains("tr", email).within(() => {
          cy.contains("button", "Deny Request").as("denyAccess");
          cy.contains("button", "Grant Access").as("grantAccess");

          cy.get("@denyAccess").should("not.be.disabled");
          cy.get("@grantAccess").should("not.be.disabled");

          cy.get("@grantAccess").click();
        });
        cy.get("table").should("not.contain.text", email);
      });

      cy.contains(".card", "Users").within(() => {
        cy.get("table").should("contain.text", email);
        cy.contains("tr", email).within(() => {
          cy.get("td").eq(0).get("select").should("have.value", accessLevel);
          cy.get("td").eq(1).should("have.text", email);
        });
      });
    });

    it("denies registration request", () => {
      cy.contains(".card", "Access Requests").within(() => {
        cy.contains("tr", email).within(() => {
          cy.contains("button", "Deny Request").as("denyAccess");
          cy.contains("button", "Grant Access").as("grantAccess");

          cy.get("@denyAccess").should("not.be.disabled");
          cy.get("@grantAccess").should("not.be.disabled");

          cy.get("@denyAccess").click();
          cy.get("@denyAccess").should("be.disabled");
          cy.get("@grantAccess").should("not.be.disabled");
        });
      });

      cy.contains(".card", "Users").within(() => {
        cy.get("table").should("not.contain", email);
      });
    });
  });

  context("when non-root user", () => {
    it("does not show User Access page", () => {
      cy.signin("instructor@example.com");
      cy.get(".nav-link").should("not.contain.text", "User Access");
    });
  });
});
