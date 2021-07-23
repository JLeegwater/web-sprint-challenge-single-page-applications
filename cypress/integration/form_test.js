//write tests here
describe("Quotes app", () => {
  beforeEach(() => {
    //arbitrary code we want running before our test run
    cy.visit("http://localhost:3000");
  });

  it("sanity test to make sure our tests work", () => {
    //'expect' is an assertions
    //there can be many assertions per test
    //though inside the 'it' statement (the test),
    //usually those assertions are logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); //not strict (==)
    expect({}).to.eql({}); //strict (===)
  });

  const homeBtn = () => cy.get("a");
  const pizzaBtn = () => cy.get("#order-pizza");
  const sizeDD = () => cy.get("#size-dropdown");
  const originalRed = () => cy.get(".sauces > :nth-child(1)");
  const bbqSauce = () => cy.get(".sauces > :nth-child(2)");
  const pep = () => cy.get(".toppings > :nth-child(1) > input");
  const cheese = () => cy.get(".toppings > :nth-child(2)> input");
  const pina = () => cy.get(".toppings > :nth-child(3)> input");
  const sausage = () => cy.get(".toppings > :nth-child(4)> input");
  const name = () => cy.get("#name-input > label > input");
  const special = () => cy.get("#special-text > label > input");
  const submitBtn = () => cy.get("#order-button");

  it("test our routing buttons", () => {
    homeBtn().should("exist").click();
    cy.url().should("eq", "http://localhost:3000/");

    pizzaBtn().should("exist").click();
    cy.url().should("eq", "http://localhost:3000/pizza");

    homeBtn().should("exist").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("test to see if we can add test to the name and special instructions boxes", () => {
    pizzaBtn().should("exist").click();
    cy.url().should("eq", "http://localhost:3000/pizza");

    submitBtn().should("be.disabled");
    name().should("have.value", "").type("Jesse").should("have.value", "Jesse");
    submitBtn().should("be.disabled");

    special()
      .should("have.value", "")
      .type("I'm Special")
      .should("have.value", "I'm Special");
  });

  it("test that you can select multiple toppings", () => {
    pizzaBtn().should("exist").click();
    cy.url().should("eq", "http://localhost:3000/pizza");

    pep()
      .should("be.enabled")
      .should("not.be.checked")
      .check()
      .should("be.checked");

    cheese()
      .should("be.enabled")
      .should("not.be.checked")
      .check()
      .should("be.checked");

    pina()
      .should("be.enabled")
      .should("not.be.checked")
      .check()
      .should("be.checked");

    sausage()
      .should("be.enabled")
      .should("not.be.checked")
      .check()
      .should("be.checked");
  });

  it("test that you can submit the form", () => {
    pizzaBtn().should("exist").click();
    cy.url().should("eq", "http://localhost:3000/pizza");
    submitBtn().should("be.disabled");
    sizeDD().select("large").should("have.value", "large");
    name().should("have.value", "").type("Jesse").should("have.value", "Jesse");
    submitBtn().should("be.enabled");
  });
  //const submitBtn = () => cy.get("button");

  //   const nameInput = () => cy.get(".inputs > :nth-child(2) > input");
  //   const emailInput = () => cy.get(":nth-child(3) > input");
  //   const passwordInput = () => cy.get(":nth-child(4) > input");
  //   const tosBtn = () => cy.get(".checkboxes > label > input");
  //   const userP = () => cy.get("p");

  //   //here go our tests
  //   it("sanity test to make sure our tests work", () => {
  //     //'expect' is an assertions
  //     //there can be many assertions per test
  //     //though inside the 'it' statement (the test),
  //     //usually those assertions are logically grouped together
  //     expect(1 + 2).to.equal(3);
  //     expect(2 + 2).not.to.equal(5);
  //     expect({}).not.to.equal({}); //not strict (==)
  //     expect({}).to.eql({}); //strict (===)
  //   });

  //   it("Check to make sure the elements we will be testing exist", () => {
  //     cy.get("button").should("exist");
  //     cy.get(".inputs > :nth-child(2) > input").should("exist");
  //     cy.get(":nth-child(3) > input").should("exist");
  //     cy.get(":nth-child(4) > input").should("exist");
  //     cy.get(".checkboxes > label > input").should("exist");
  //     cy.get("p").should("not.exist");
  //   });

  //   it("Check the app to see if it works correctly", () => {
  //     submitBtn().should("be.disabled");
  //     nameInput()
  //       .should("have.value", "")
  //       .type("Jesse")
  //       .should("have.value", "Jesse");
  //     submitBtn().should("be.disabled");

  //     emailInput()
  //       .should("have.value", "")
  //       .type("Jleegwater")
  //       .should("have.value", "Jleegwater");

  //     submitBtn().should("be.disabled");

  //     emailInput().type("@live.com").should("have.value", "Jleegwater@live.com");

  //     passwordInput()
  //       .should("have.value", "")
  //       .type("password")
  //       .should("have.value", "password");

  //     tosBtn()
  //       .should("be.enabled")
  //       .should("not.be.checked")
  //       .check()
  //       .should("be.checked");

  //     submitBtn().should("be.enabled").click().should("be.disabled");

  //     userP().should("exist");
  //   });

  //   it("Check to see if the submit button is still disabled if a text box is left empty", () => {
  //     submitBtn().should("be.disabled");
  //     nameInput()
  //       .should("have.value", "")
  //       .type("Jesse")
  //       .should("have.value", "Jesse");
  //     submitBtn().should("be.disabled");

  //     emailInput().should("have.value", "");

  //     submitBtn().should("be.disabled");

  //     passwordInput()
  //       .should("have.value", "")
  //       .type("password")
  //       .should("have.value", "password");

  //     tosBtn()
  //       .should("be.enabled")
  //       .should("not.be.checked")
  //       .check()
  //       .should("be.checked");

  //     submitBtn().should("be.disabled");
  //   });
});
