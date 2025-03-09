describe("User Journey", () => {
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.visit("http://localhost:3000")
    cy.getByDataAttribute("course-0").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/testing-your-first-application")
    cy.get(`[data-test=next-lesson-button]`).click()
    cy.location("pathname", { timeout: 100000 }).should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByDataAttribute("challenge-answer-0").click()
    cy.getByDataAttribute("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    cy.getByDataAttribute("challenge-answer-0").click()
    cy.getByDataAttribute("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByDataAttribute("challenge-answer-0").click()
    cy.getByDataAttribute("next-lesson-button")
      .should("exist")
      .contains("Complete Course")
      .click()

    cy.location("pathname").should("equal", "/")
  })
})
