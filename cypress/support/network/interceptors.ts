export const conversionInterceptor = () => {
  return cy.intercept('https://cash-conversion-api.dev-tester.com/exchange_rates/convert')
}