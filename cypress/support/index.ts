import {Email} from 'gmail-getter'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Check inbox of a Gmail account
       * @param {string} recipient Email addres of a recepient
       * @returns {Promise<Email | null>} Email contents
       * @example cy.checkInbox('test@gmail.com')
       */
      checkInbox(recipient: string): Promise<Email | null>

      /**
       * Parse HTML link from an email
       * @param {Email} email Email content
       * @param {RegExp} regex Regular expression for a link, example: https://regex101.com/r/f3RXKp/1
       * @returns {string | null} HTML link
       * @example const cy.parseLinkFromHtml('test@gmail.com', /(https:\/\/)(\S*)(gmail-getter)([\w\/\?\=\-]*)/im)
       */
      parseLinkFromHtml(email: Email, regex: RegExp): Promise<string | null>
    }
  }
}
