// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByDataAttribute("email-input").type("tom@aol.com")
    cy.getByDataAttribute("submit-button").click()
    cy.getByDataAttribute("success-message")
      .should("exist")
      .contains("tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByDataAttribute("email-input").type("tom")
    cy.getByDataAttribute("submit-button").click()
    cy.getByDataAttribute("success-message").should("not.exist")
  })

  // it("does NOT allow an invalid email address", () => {
  //   cy.getByDataAttribute("email-input").type("tom")
  //   cy.getByDataAttribute("submit-button").click()
  //   cy.getByDataAttribute("success-message").should("not.exist")
  // })

  it("prevent signup if user already exists", () => {
    cy.getByDataAttribute("email-input").type("john@example.com")
    cy.getByDataAttribute("submit-button").click()
    cy.getByDataAttribute("server-error-message")
      .should("exist")
      .contains(
        "john@example.com already exists. Please use a different email address"
      )
  })
})
