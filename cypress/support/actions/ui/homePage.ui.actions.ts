// Locators

const conversionBtn = '#convert_btn'
const convertFrom = '#from_currency'
const convertTo = '#to_currency'
const conversionValue = '#base_amount'
const conversionMsg = '.conversion-response'
const conversionErrorMsg = '.error-message'

// Actions

export const enterBaseAmount = (baseAmount: string) =>
  cy.get(conversionValue).type(baseAmount)


export const selectFromCurrency = (fromCurrency: string) =>
  cy.get(convertFrom).select(fromCurrency)


export const selectToCurrency = (toCurrency: string) =>
  cy.get(convertTo).select(toCurrency)


export const convertCurrency = () =>
  cy.get(conversionBtn).click()


// Assertions

export const assertSuccessfulConversion = (successMessage: string) => {
  cy.get(conversionMsg).contains(successMessage)
}

export const assertFailedConversion = (failureMessage: string) => {
  cy.get(conversionErrorMsg).contains(failureMessage)
}