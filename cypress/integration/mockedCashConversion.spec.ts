import * as homePageActions from '../support/actions/ui/homePage.ui.actions';
import * as mocks from '../support/network/mocks'

describe('Currency Conversion with Mock', () => {
  it('Should throw error when currency conversion  fails', () => {
    cy.visit('https://cash-conversion.dev-tester.com/')
    mocks.mockConversionFailure()
    homePageActions.enterBaseAmount('100')
    homePageActions.selectFromCurrency('EUR')
    homePageActions.selectToCurrency('INR')
    homePageActions.convertCurrency()
    homePageActions.assertFailedConversion('There was an error performing the conversion. Please try again.')
  })
})