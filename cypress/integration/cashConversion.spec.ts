import * as homePageActions from '../support/actions/ui/homePage.ui.actions';

describe('Currency Conversion', () => {
  it('Should be able to convert currency', () => {
    cy.visit('https://cash-conversion.dev-tester.com/')
    homePageActions.enterBaseAmount('100')
    homePageActions.selectFromCurrency('EUR')
    homePageActions.selectToCurrency('INR')
    homePageActions.convertCurrency()
    homePageActions.assertSuccessfulConversion('100 Euro is about 7750.98 Indian Rupee')
  })
})