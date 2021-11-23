import * as homePageActions from '../support/actions/ui/homePage.ui.actions';
import * as interceptor from '../support/network/interceptors'

describe('Currency Conversion Api check', () => {
  it('Validate API response during currency coversion', () => {
    cy.visit('https://cash-conversion.dev-tester.com/')
    const apiLogger = interceptor.conversionInterceptor()
    apiLogger.as('getCoversionApi')
    homePageActions.enterBaseAmount('100')
    homePageActions.selectFromCurrency('EUR')
    homePageActions.selectToCurrency('INR')
    homePageActions.convertCurrency()
    homePageActions.assertSuccessfulConversion('100 Euro is about 7750.98 Indian Rupee')
    cy.wait('@getCoversionApi').then(({ request, response }) => {
      cy.log(JSON.stringify(request.headers))
      cy.log(JSON.stringify(response.headers))
      expect(response.statusCode).equal(200)
      expect(response.body).contains({ toCurrency: "Indian Rupee" })
    })
  })
})