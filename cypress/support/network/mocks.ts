export const mockConversionFailure = () => {
  cy.intercept('https://cash-conversion-api.dev-tester.com/exchange_rates/convert', {
    headers:
    {
      'Access-Control-Allow-Origin': 'https://cash-conversion.dev-tester.com',
      'Access-Control-Allow-Headers': 'content-type,key-inflection',
      'Access-Control-Allow-Methods': 'POST',
    }, statusCode: 404
  })
}