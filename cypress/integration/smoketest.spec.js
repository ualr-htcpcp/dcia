context("Smoke Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays DCIA TEST", () => {
    cy.get("h1").should("have.text", "DCIA TEST");
  });
});
