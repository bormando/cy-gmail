import {getToken, checkInbox, Email, parseLinkFromHtml} from 'gmail-getter'

Cypress.Commands.add('checkInbox', async (recipient: string) => {
  const username = recipient.split('@')[0]
  const token = await getToken(
    Cypress.env('clientId'),
    Cypress.env('clientSecret'),
    Cypress.env('refreshToken')
  )
  return checkInbox(token, 30000, 2000, `to:${username}`)
})

Cypress.Commands.add('parseLinkFromHtml', async (email: Email, regex: RegExp) => {
  return parseLinkFromHtml(email, regex)
})
