// Locators

const conversionBtn = '#convert_btn'
const convertFrom = '#from_currency'
const convertTo = '#to_currency'
const conversionValue = '#base_amount'
const conversionMsg = '.conversion-response'

// Actions

export const enterBaseAmount = (baseAmount: string) =>
  cy.get('#base_amount').type(baseAmount)


export const selectFromCurrency = (fromCurrency: string) =>
  cy.get('#from_currency').select(fromCurrency)


export const selectToCurrency = (toCurrency: string) =>
  cy.get('#to_currency').select(toCurrency)


export const convertCurrency = () =>
  cy.get('#convert_btn').click()


// Assertions

export const assertSuccessfulConversion = (successMessage: string) => {
  cy.get('.conversion-response').contains(successMessage)
}
