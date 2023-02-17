import messages from 'cypress/fixtures/messages.json'

export const SubscribePage = new (class {
  readonly button: {
    subscribe: Cypress.Chainable<JQuery<HTMLElement>>
    confirm: Cypress.Chainable<JQuery<HTMLElement>>
  }
  readonly input: {
    email: Cypress.Chainable<JQuery<HTMLElement>>
  }
  readonly label: {
    confirm: Cypress.Chainable<JQuery<HTMLElement>>
    confirmed: Cypress.Chainable<JQuery<HTMLElement>>
  }

  constructor() {
    this.button = {
      get subscribe() {
        return cy.get('button[aria-controls="newsletter-COM001-form"]')
      },
      get confirm() {
        return cy.get('form[id="newsletter-COM001-form"]').find('input[value="Subscribe"]')
      },
    }
    this.input = {
      get email() {
        return cy.get('input[id="newsletter-COM001"]')
      },
    }
    this.label = {
      get confirm() {
        return cy.contains(messages.confirm)
      },
      get confirmed() {
        return cy.get('h2[class="confirm-header"]')
      },
    }
  }

  open() {
    return cy.visit('/listmanagement')
  }
})()
