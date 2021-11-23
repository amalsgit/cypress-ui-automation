export const getToDo = () => {
  const response = cy.request('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    expect(response.status).equal(200)
  })

  return response.its('body')
}