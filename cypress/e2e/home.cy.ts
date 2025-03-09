// describe("home", () => {
//   it("passes", () => {
//     cy.visit("https://example.cypress.io")
//   })
// })

// describe("home page", () => {
//   it("the h1 contains the correct text", () => {
//     cy.visit("http://localhost:3000")
//     // cy.get("h1").should(
//     //   "have.text",
//     //   "Testing Next.js Applications with Cypress"
//     // )
//     cy.get("h1").contains("Testing Next.js Applications with Cypress")
//   })
// })

// We can tell Cypress to only run a specific test by using it.only() like so
// By adding .only() after the it we are telling Cypress to only run this specific test.
// You can add .only() to multiple tests, and only those tests will run.
// describe("home page", () => {
//   it.only("the h1 contains the correct text", () => {
//     cy.visit("http://localhost:3000")
//     cy.get("[data-test='hero-heading']").contains(
//       "Testing Next.js Applications with Cypress"
//     )
//   })
// })

// it.only("the features on the homepage are correct", () => {
//   cy.visit("http://localhost:3000")
//   // cy.get("dt").eq(0).contains("4 Courses")
//   cy.get("dt")
//     .eq(0)
//     .contains(/4 courses/i)
//   cy.get("dt").eq(1).contains("25+ Lessons")
//   cy.get("dt").eq(2).contains("Free and Open Source")
// })

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      // cy.get("[data-test='hero-heading']").contains(
      //   "Testing Next.js Applications with Cypress"
      // )
      cy.getByDataAttribute("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing Your First Next.js Application", () => {
      cy.getByDataAttribute("course-0")
        .find("a")
        .contains("Get started")
        .click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
    it.only("Course: Testing Foundations", () => {
      cy.getByDataAttribute("course-1")
        .find("a")
        .contains("Get started")
        .click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    it.only("Course: Cypress Fundamentals", () => {
      cy.getByDataAttribute("course-2")
        .find("a")
        .contains("Get started")
        .click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
