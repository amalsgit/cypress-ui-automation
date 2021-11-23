import * as toDoApiActions from '../support/actions/api/toDo.api.actions'

describe('Api Tests', () => {
  it('Should be able to make api calls', () => {
    const response = toDoApiActions.getToDo()
    expect(response.its('id').should('eq', 1))
  })
})