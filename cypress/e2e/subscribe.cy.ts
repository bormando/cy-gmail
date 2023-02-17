import messages from 'cypress/fixtures/messages.json'
import {SubscribePage} from 'cypress/pages'

it('Subscribe', () => {
  const recipient = `g.getter.test+${Date.now()}@gmail.com`
  const linkRegEx = /(https:\/\/)(\S*)(confirmation)([\w\/\?\=\-]*)/im

  cy.intercept('POST', '/api/subscription/subscribe').as('subscribe')

  SubscribePage.open()
  SubscribePage.button.subscribe.click()
  SubscribePage.input.email.type(recipient)
  SubscribePage.button.confirm.click()

  cy.wait('@subscribe', {timeout: 15000}).its('response.statusCode').should('eq', 200)

  SubscribePage.label.confirm.should('be.visible')

  cy.checkInbox(recipient).then(email => {
    expect(email).not.to.be.null
    cy.parseLinkFromHtml(email, linkRegEx).then(link => {
      cy.visit(link)
    })
  })

  SubscribePage.label.confirmed.should('be.visible').should('have.text', messages.confirmed)
})
