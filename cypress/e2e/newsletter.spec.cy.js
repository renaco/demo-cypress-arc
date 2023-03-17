const random = Math.random(1000);
const emailRandom = `rpa-test${random}@gmail.com`;

describe("empty spec", () => {
  xit("passes", () => {
    console.log(random);
    cy.visit("http://localhost/pf/homepage/?_website=viveusa");
    cy.get("#email-subscription").type();
    cy.get("#button-subscription").click();
  });
});

describe("test_name", function () {
  it("what_it_does", function () {
    cy.viewport(690, 601);

    cy.visit("http://localhost/pf/universal/?_website=eluniversal");

    cy.get(
      ".chain-home-sidebar > .newsletter > .box-border > #form-subscription > .box-border > .w-full"
    ).click();

    cy.get(
      ".chain-home-sidebar > .newsletter > .box-border > #form-subscription > .box-border > .w-full"
    ).type(emailRandom);

    cy.get(
      ".chain-home-sidebar > .newsletter > .box-border > #form-subscription > .box-border:nth-child(2)"
    ).click();
  });
});
